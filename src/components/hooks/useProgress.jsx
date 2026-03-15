import { useState, useEffect, useCallback } from "react";
import { getLessonsForCategory } from "../data/lessons";
import { getRank } from "../data/categories";

const STORAGE_KEY = "manify_progress";

function loadProgress() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    lessonProgress: {},
    flashcardSchedules: {},
    streak: { currentStreak: 0, longestStreak: 0, lastActiveDate: null, weeklyActiveDays: [], weekStartDate: null },
    totalXP: 0,
    bookmarkedLessons: [],
    currentLessonId: null,
  };
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function useProgress() {
  const [data, setData] = useState(loadProgress);

  useEffect(() => { saveProgress(data); }, [data]);

  const progress = useCallback((lessonId) => data.lessonProgress[lessonId] || { isCompleted: false, bestScore: 0, attempts: 0, xpEarned: 0, hasReadLesson: false }, [data]);
  const isCompleted = useCallback((lessonId) => data.lessonProgress[lessonId]?.isCompleted || false, [data]);
  const hasRead = useCallback((lessonId) => data.lessonProgress[lessonId]?.hasReadLesson || false, [data]);
  const isBookmarked = useCallback((lessonId) => data.bookmarkedLessons.includes(lessonId), [data]);

  const updateStreak = useCallback((d) => {
    const today = new Date().toDateString();
    const s = { ...d.streak };
    if (s.lastActiveDate) {
      const last = new Date(s.lastActiveDate).toDateString();
      const diff = Math.floor((new Date(today) - new Date(last)) / 86400000);
      if (diff === 1) s.currentStreak += 1;
      else if (diff > 1) s.currentStreak = 1;
    } else {
      s.currentStreak = 1;
    }
    s.longestStreak = Math.max(s.longestStreak, s.currentStreak);
    s.lastActiveDate = today;
    const day = new Date().getDay();
    if (!s.weeklyActiveDays.includes(day)) s.weeklyActiveDays = [...s.weeklyActiveDays, day];
    return s;
  }, []);

  const markRead = useCallback((lessonId) => {
    setData((d) => {
      const p = d.lessonProgress[lessonId] || { isCompleted: false, bestScore: 0, attempts: 0, xpEarned: 0, hasReadLesson: false };
      if (p.hasReadLesson) return d;
      return {
        ...d,
        lessonProgress: { ...d.lessonProgress, [lessonId]: { ...p, hasReadLesson: true, xpEarned: p.xpEarned + 10 } },
        totalXP: d.totalXP + 10,
        currentLessonId: lessonId,
        streak: updateStreak(d),
      };
    });
  }, [updateStreak]);

  const submitQuiz = useCallback((lessonId, score, total) => {
    setData((d) => {
      const p = d.lessonProgress[lessonId] || { isCompleted: false, bestScore: 0, attempts: 0, xpEarned: 0, hasReadLesson: false };
      const pct = total > 0 ? Math.round((score * 100) / total) : 0;
      const isFirst = p.attempts === 0;
      const newP = { ...p, attempts: p.attempts + 1, lastAttemptDate: new Date().toISOString() };
      if (pct > newP.bestScore) newP.bestScore = pct;
      let xp = 0;
      if (pct >= 80) { newP.isCompleted = true; xp = 30; if (isFirst) xp += 10; if (pct === 100) xp += 10; }
      newP.xpEarned += xp;
      return {
        ...d,
        lessonProgress: { ...d.lessonProgress, [lessonId]: newP },
        totalXP: d.totalXP + xp,
        streak: updateStreak(d),
      };
    });
  }, [updateStreak]);

  const markFlashcards = useCallback((lessonId, flashcardIds) => {
    setData((d) => {
      const schedules = { ...d.flashcardSchedules };
      flashcardIds.forEach((fid) => {
        const s = schedules[fid] || { flashcardId: fid, interval: 1 };
        schedules[fid] = { ...s, interval: Math.min(s.interval * 2, 30), nextReviewDate: new Date(Date.now() + s.interval * 2 * 86400000).toISOString() };
      });
      return { ...d, flashcardSchedules: schedules, totalXP: d.totalXP + 10, streak: updateStreak(d) };
    });
  }, [updateStreak]);

  const toggleBookmark = useCallback((lessonId) => {
    setData((d) => {
      const bm = d.bookmarkedLessons.includes(lessonId) ? d.bookmarkedLessons.filter((id) => id !== lessonId) : [...d.bookmarkedLessons, lessonId];
      return { ...d, bookmarkedLessons: bm };
    });
  }, []);

  const categoryMastery = useCallback((categoryId) => {
    const lessons = getLessonsForCategory(categoryId);
    if (!lessons.length) return 0;
    const completed = lessons.filter((l) => isCompleted(l.id)).length;
    return completed / lessons.length;
  }, [isCompleted]);

  const isTierUnlocked = useCallback((tier, categoryId) => {
    if (tier === 1) return true;
    const allLessons = getLessonsForCategory(categoryId);
    const prevTier = allLessons.filter((l) => l.tier === tier - 1);
    if (!prevTier.length) return false;
    const completedCount = prevTier.filter((l) => isCompleted(l.id)).length;
    const ratio = completedCount / prevTier.length;
    const scores = prevTier.map((l) => progress(l.id).bestScore).filter((s) => s > 0);
    const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
    if (tier === 2) return ratio >= 0.8 && avg >= 80;
    if (tier === 3) return ratio >= 0.9 && avg >= 85;
    return false;
  }, [isCompleted, progress]);

  const tierProgress = useCallback((tier, categoryId) => {
    const allLessons = getLessonsForCategory(categoryId);
    const tierLessons = allLessons.filter((l) => l.tier === tier);
    const completed = tierLessons.filter((l) => isCompleted(l.id)).length;
    const scores = tierLessons.map((l) => progress(l.id).bestScore).filter((s) => s > 0);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    return { completed, total: tierLessons.length, avgScore: avg };
  }, [isCompleted, progress]);

  const flashcardsDueCount = Object.values(data.flashcardSchedules).filter((s) => !s.nextReviewDate || new Date(s.nextReviewDate) <= new Date()).length;

  const completedLessonCount = Object.values(data.lessonProgress).filter((p) => p.isCompleted).length;

  const quizAverage = (() => {
    const scores = Object.values(data.lessonProgress).filter((p) => p.bestScore > 0).map((p) => p.bestScore);
    return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  })();

  const disciplineIndex = (() => {
    const streakScore = Math.min(data.streak.currentStreak / 30, 1) * 40;
    const quizScore = (quizAverage / 100) * 30;
    const weeklyScore = ((data.streak.weeklyActiveDays?.length || 0) / 7) * 20;
    const flashScore = (flashcardsDueCount === 0 ? 1 : 0.5) * 10;
    return Math.round(streakScore + quizScore + weeklyScore + flashScore);
  })();

  const currentRank = getRank(data.totalXP);

  return {
    data, progress, isCompleted, hasRead, isBookmarked,
    markRead, submitQuiz, markFlashcards, toggleBookmark,
    categoryMastery, isTierUnlocked, tierProgress,
    totalXP: data.totalXP, currentStreak: data.streak.currentStreak,
    longestStreak: data.streak.longestStreak, flashcardsDueCount,
    completedLessonCount, quizAverage, disciplineIndex, currentRank,
  };
}