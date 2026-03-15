// Lesson data for all categories - structured to match the original Manify format

const lessons = {
  constitution: [
    {
      id: "con_t1_01", categoryId: "constitution", tier: 1, lessonNumber: 1,
      title: "Why the Constitution Matters", subtitle: "The operating system of American governance",
      estimatedMinutes: 7, difficulty: 1, prerequisites: [],
      contentBlocks: [
        { id: "con101_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "The Constitution is the highest law in the United States — every government action must conform to it.",
          "Understanding it means understanding the rules that bind power. Without that knowledge, you can't evaluate whether power is being used properly.",
          "This isn't academic. It affects your taxes, your rights, your property, and your freedom — every day."
        ]},
        { id: "con101_b2", type: "system_overview", title: "SYSTEM OVERVIEW", bullets: [
          "Written in 1787, ratified in 1788. Seven articles plus 27 amendments.",
          "Establishes three branches: Legislative (Congress), Executive (President), Judicial (Courts).",
          "The Bill of Rights (first 10 amendments) protects individual liberties against government overreach.",
          "The system is designed with checks and balances — no single branch can dominate."
        ]},
        { id: "con101_b3", type: "how_it_works", title: "HOW IT WORKS", bullets: [
          "Congress makes laws. The President enforces them. The courts interpret them.",
          "Each branch can limit the others: presidential veto, judicial review, congressional override.",
          "Amendments require supermajorities — the system resists rapid change by design.",
          "Federalism divides power between national and state governments."
        ]},
        { id: "con101_b4", type: "summary", title: "SUMMARY", bullets: [
          "The Constitution creates the structure of American government and protects individual rights.",
          "Three branches with checks and balances prevent concentration of power.",
          "Understanding this document is foundational to civic competence."
        ]}
      ],
      quiz: { id: "con101_q", passPercent: 80, questions: [
        { id: "con101_q1", type: "multipleChoice", prompt: "How many branches of government does the Constitution establish?", choices: ["Two", "Three", "Four", "Five"], correctIndex: 1, explanation: "The Constitution establishes three branches: Legislative, Executive, and Judicial." },
        { id: "con101_q2", type: "multipleChoice", prompt: "The Bill of Rights consists of:", choices: ["The first 5 amendments", "The first 10 amendments", "The first 15 amendments", "All 27 amendments"], correctIndex: 1, explanation: "The Bill of Rights is the first 10 amendments to the Constitution, protecting individual liberties." },
        { id: "con101_q3", type: "multipleChoice", prompt: "Which branch interprets laws?", choices: ["Legislative", "Executive", "Judicial", "Administrative"], correctIndex: 2, explanation: "The Judicial branch (the courts) interprets laws and determines their constitutionality." }
      ]},
      flashcards: [
        { id: "con101_f1", front: "Checks and Balances", back: "System where each branch of government can limit the powers of the other branches" },
        { id: "con101_f2", front: "Federalism", back: "Division of power between national and state governments" },
        { id: "con101_f3", front: "Bill of Rights", back: "The first 10 amendments to the Constitution, protecting individual liberties" },
        { id: "con101_f4", front: "Judicial Review", back: "Power of courts to declare laws unconstitutional" }
      ],
      tags: ["intro", "basics", "structure"]
    },
    {
      id: "con_t1_02", categoryId: "constitution", tier: 1, lessonNumber: 2,
      title: "The Three Branches", subtitle: "Separation of powers in practice",
      estimatedMinutes: 8, difficulty: 1, prerequisites: ["con_t1_01"],
      contentBlocks: [
        { id: "con102_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Each branch has distinct powers and responsibilities. Knowing what each does tells you who to hold accountable.",
          "When someone says 'the government did X,' you should know exactly which part of the government they mean."
        ]},
        { id: "con102_b2", type: "component_breakdown", title: "COMPONENT BREAKDOWN", bullets: [
          "Legislative (Article I): Congress — Senate (100 members) and House of Representatives (435 members). Makes laws, controls spending, declares war.",
          "Executive (Article II): President, Vice President, Cabinet, federal agencies. Enforces laws, commands military, conducts foreign policy.",
          "Judicial (Article III): Supreme Court and lower federal courts. Interprets laws, resolves disputes, determines constitutionality."
        ]},
        { id: "con102_b3", type: "how_it_works", title: "HOW IT WORKS", bullets: [
          "A bill must pass both House and Senate, then be signed by the President to become law.",
          "The President can veto a bill. Congress can override with a two-thirds vote in both chambers.",
          "The Supreme Court can strike down laws that violate the Constitution.",
          "The Senate confirms presidential appointments (judges, cabinet members)."
        ]},
        { id: "con102_b4", type: "summary", title: "SUMMARY", bullets: [
          "Three branches: Legislative makes law, Executive enforces, Judicial interprets.",
          "Each has tools to check the others. No branch operates unchecked.",
          "Understanding this structure is key to understanding how policy happens."
        ]}
      ],
      quiz: { id: "con102_q", passPercent: 80, questions: [
        { id: "con102_q1", type: "multipleChoice", prompt: "How many members are in the U.S. Senate?", choices: ["50", "100", "200", "435"], correctIndex: 1, explanation: "The Senate has 100 members — two from each state." },
        { id: "con102_q2", type: "multipleChoice", prompt: "Who has the power to declare war?", choices: ["The President", "The Supreme Court", "Congress", "The Vice President"], correctIndex: 2, explanation: "Only Congress has the constitutional power to declare war." },
        { id: "con102_q3", type: "multipleChoice", prompt: "A presidential veto can be overridden by:", choices: ["Simple majority in Congress", "Two-thirds vote in both chambers", "Supreme Court ruling", "Public referendum"], correctIndex: 1, explanation: "Congress can override a presidential veto with a two-thirds vote in both the House and Senate." }
      ]},
      flashcards: [
        { id: "con102_f1", front: "Article I", back: "Establishes the Legislative Branch (Congress) — power to make laws" },
        { id: "con102_f2", front: "Article II", back: "Establishes the Executive Branch (President) — power to enforce laws" },
        { id: "con102_f3", front: "Article III", back: "Establishes the Judicial Branch (Courts) — power to interpret laws" },
        { id: "con102_f4", front: "Veto Override", back: "Two-thirds vote in both chambers of Congress to override a presidential veto" }
      ],
      tags: ["branches", "structure", "separation"]
    },
    {
      id: "con_t1_03", categoryId: "constitution", tier: 1, lessonNumber: 3,
      title: "Individual Rights", subtitle: "What the government cannot do to you",
      estimatedMinutes: 8, difficulty: 2, prerequisites: ["con_t1_02"],
      contentBlocks: [
        { id: "con103_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Your rights define the boundaries of government power over your life, speech, and property.",
          "Knowing your rights isn't optional — it's the difference between a free citizen and a subject."
        ]},
        { id: "con103_b2", type: "component_breakdown", title: "KEY AMENDMENTS", bullets: [
          "1st Amendment: Freedom of speech, religion, press, assembly, and petition.",
          "2nd Amendment: Right to keep and bear arms.",
          "4th Amendment: Protection against unreasonable searches and seizures.",
          "5th Amendment: Right against self-incrimination, due process, double jeopardy.",
          "14th Amendment: Equal protection under the law, due process extended to states."
        ]},
        { id: "con103_b3", type: "how_it_works", title: "HOW IT WORKS", bullets: [
          "These rights restrict government action, not private action. The 1st Amendment doesn't apply to your employer.",
          "Rights can be limited in specific circumstances — but the government must meet strict legal tests to do so.",
          "The 14th Amendment incorporated most Bill of Rights protections to apply against state governments too."
        ]},
        { id: "con103_b4", type: "summary", title: "SUMMARY", bullets: [
          "The Bill of Rights protects you against government overreach.",
          "Key rights: speech, arms, privacy, due process, equal protection.",
          "These rights have limits but require strong justification to restrict."
        ]}
      ],
      quiz: { id: "con103_q", passPercent: 80, questions: [
        { id: "con103_q1", type: "multipleChoice", prompt: "Which amendment protects freedom of speech?", choices: ["2nd", "1st", "4th", "5th"], correctIndex: 1, explanation: "The 1st Amendment protects freedom of speech, religion, press, assembly, and petition." },
        { id: "con103_q2", type: "multipleChoice", prompt: "The 4th Amendment protects against:", choices: ["Self-incrimination", "Unreasonable searches", "Cruel punishment", "Double jeopardy"], correctIndex: 1, explanation: "The 4th Amendment protects against unreasonable searches and seizures." },
        { id: "con103_q3", type: "multipleChoice", prompt: "The Bill of Rights restricts:", choices: ["Private companies", "Individual citizens", "Government action", "Foreign governments"], correctIndex: 2, explanation: "The Bill of Rights restricts government action — it defines what the government cannot do to you." }
      ]},
      flashcards: [
        { id: "con103_f1", front: "Due Process", back: "Government must follow fair procedures before depriving someone of life, liberty, or property" },
        { id: "con103_f2", front: "Equal Protection", back: "14th Amendment guarantee that no state shall deny any person equal protection of the laws" },
        { id: "con103_f3", front: "Incorporation Doctrine", back: "Application of Bill of Rights protections to state governments via the 14th Amendment" }
      ],
      tags: ["rights", "amendments", "freedom"]
    },
  ],

  firearms: [
    {
      id: "fire_t1_01", categoryId: "firearms", tier: 1, lessonNumber: 1,
      title: "The Four Rules", subtitle: "Non-negotiable fundamentals of firearm safety",
      estimatedMinutes: 6, difficulty: 1, prerequisites: [],
      contentBlocks: [
        { id: "fire101_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Every negligent discharge traces back to violating one of these four rules.",
          "These aren't suggestions. They are absolute requirements for anyone handling a firearm.",
          "Following all four simultaneously creates multiple layers of safety — even if one fails, the others prevent tragedy."
        ]},
        { id: "fire101_b2", type: "component_breakdown", title: "THE FOUR RULES", bullets: [
          "Rule 1: Treat every firearm as if it is loaded. No exceptions, ever.",
          "Rule 2: Never point the muzzle at anything you are not willing to destroy.",
          "Rule 3: Keep your finger off the trigger until your sights are on target and you have decided to fire.",
          "Rule 4: Be sure of your target and what is beyond it."
        ]},
        { id: "fire101_b3", type: "how_it_works", title: "HOW THEY WORK TOGETHER", bullets: [
          "If you violate Rule 1 but follow 2, 3, and 4 — nothing bad happens.",
          "If you violate Rule 3 but follow 1, 2, and 4 — the muzzle is pointed safely.",
          "The system is designed so that a single failure doesn't result in harm.",
          "All four must be violated simultaneously for a negligent injury to occur."
        ]},
        { id: "fire101_b4", type: "summary", title: "SUMMARY", bullets: [
          "Four rules. Always loaded. Muzzle discipline. Trigger discipline. Know your target.",
          "Redundant safety system — following even three of four prevents harm.",
          "These rules are the foundation of every other firearms lesson."
        ]}
      ],
      quiz: { id: "fire101_q", passPercent: 80, questions: [
        { id: "fire101_q1", type: "multipleChoice", prompt: "Rule 1 states:", choices: ["Always point downrange", "Treat every firearm as if loaded", "Keep finger on trigger guard", "Wear eye protection"], correctIndex: 1, explanation: "Rule 1: Treat every firearm as if it is loaded — no exceptions." },
        { id: "fire101_q2", type: "multipleChoice", prompt: "When should your finger be on the trigger?", choices: ["When holding the firearm", "When the safety is on", "When sights are on target and you've decided to fire", "When at a shooting range"], correctIndex: 2, explanation: "Keep your finger off the trigger until your sights are on target and you have decided to fire." },
        { id: "fire101_q3", type: "multipleChoice", prompt: "Rule 4 requires you to be sure of:", choices: ["Your grip", "Your stance", "Your target and what's beyond it", "Your ammunition type"], correctIndex: 2, explanation: "Be sure of your target and what is beyond it — bullets can pass through targets." }
      ]},
      flashcards: [
        { id: "fire101_f1", front: "Muzzle Discipline", back: "Never pointing the muzzle at anything you are not willing to destroy" },
        { id: "fire101_f2", front: "Trigger Discipline", back: "Keeping finger off the trigger until sights are on target and decision to fire is made" },
        { id: "fire101_f3", front: "Negligent Discharge", back: "An unintentional firing of a weapon due to handler error — not a mechanical malfunction" }
      ],
      tags: ["safety", "fundamentals", "rules"]
    },
    {
      id: "fire_t1_02", categoryId: "firearms", tier: 1, lessonNumber: 2,
      title: "Firearm Types", subtitle: "Handguns, rifles, and shotguns — what each does",
      estimatedMinutes: 7, difficulty: 1, prerequisites: ["fire_t1_01"],
      contentBlocks: [
        { id: "fire102_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Different firearms serve different purposes. Knowing the differences prevents poor decisions.",
          "A home defense choice is different from a hunting choice is different from a target shooting choice."
        ]},
        { id: "fire102_b2", type: "component_breakdown", title: "TYPES", bullets: [
          "Handguns: Compact, portable. Revolvers (rotating cylinder) and semi-automatics (magazine-fed). Effective at close range.",
          "Rifles: Long barrel, shoulder-fired. Much greater accuracy and range than handguns. Bolt-action, lever-action, semi-automatic.",
          "Shotguns: Fire multiple projectiles (shot) or single slugs. Devastating at close range. Pump-action, semi-automatic, break-action."
        ]},
        { id: "fire102_b3", type: "how_it_works", title: "ACTION TYPES", bullets: [
          "Semi-automatic: One round fires per trigger pull. The action cycles automatically.",
          "Bolt-action: Manually cycle the bolt between each shot. High accuracy.",
          "Pump-action: Manually cycle the forend. Common in shotguns.",
          "Revolver: Rotating cylinder advances with each trigger pull."
        ]},
        { id: "fire102_b4", type: "summary", title: "SUMMARY", bullets: [
          "Three main types: handguns, rifles, shotguns — each with distinct strengths.",
          "Action type determines how the firearm cycles between shots.",
          "Choose based on purpose: defense, hunting, sport, training."
        ]}
      ],
      quiz: { id: "fire102_q", passPercent: 80, questions: [
        { id: "fire102_q1", type: "multipleChoice", prompt: "A semi-automatic firearm:", choices: ["Fires continuously while trigger is held", "Fires one round per trigger pull", "Requires manual cycling", "Has no magazine"], correctIndex: 1, explanation: "Semi-automatic: one round per trigger pull, action cycles automatically." },
        { id: "fire102_q2", type: "multipleChoice", prompt: "Shotguns typically fire:", choices: ["A single bullet", "Multiple projectiles or a slug", "Explosive rounds", "Rubber bullets"], correctIndex: 1, explanation: "Shotguns fire either multiple projectiles (shot) or single slugs." },
        { id: "fire102_q3", type: "multipleChoice", prompt: "Which firearm type has the greatest range?", choices: ["Handgun", "Shotgun", "Rifle", "Revolver"], correctIndex: 2, explanation: "Rifles have the greatest accuracy and range due to their long barrels and design." }
      ]},
      flashcards: [
        { id: "fire102_f1", front: "Semi-Automatic", back: "Fires one round per trigger pull; action cycles automatically to chamber the next round" },
        { id: "fire102_f2", front: "Bolt-Action", back: "Manually operated rotating bolt — high accuracy, common in precision rifles" },
        { id: "fire102_f3", front: "Caliber", back: "The internal diameter of a firearm's barrel, determining which ammunition it fires" }
      ],
      tags: ["types", "fundamentals", "equipment"]
    },
  ],

  home: [
    {
      id: "home_t1_01", categoryId: "home", tier: 1, lessonNumber: 1,
      title: "Your Electrical Panel", subtitle: "The brain of your home's power system",
      estimatedMinutes: 7, difficulty: 1, prerequisites: [],
      contentBlocks: [
        { id: "home101_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Your electrical panel controls all power distribution in your home. A tripped breaker at 2 AM is on you.",
          "Knowing your panel means knowing what you can fix yourself vs. what requires an electrician.",
          "Electrical fires are among the leading causes of residential fires. Basic knowledge prevents them."
        ]},
        { id: "home101_b2", type: "system_overview", title: "SYSTEM OVERVIEW", bullets: [
          "Power enters from the utility through the meter into the main panel.",
          "The main breaker controls all power to the house. Individual breakers protect individual circuits.",
          "Each breaker is rated for a specific amperage — 15A and 20A are most common for household circuits.",
          "240V circuits (dryer, oven, A/C) use double-pole breakers."
        ]},
        { id: "home101_b3", type: "owner_actions", title: "OWNER ACTIONS", bullets: [
          "Label every breaker in your panel. Turn each one off individually to identify which outlets and lights it controls.",
          "If a breaker trips: turn off devices on that circuit, reset the breaker. If it trips again immediately — call an electrician.",
          "Never use a breaker rated higher than the wire it protects. This is a fire hazard.",
          "Know where your main breaker is and how to shut off all power in an emergency."
        ]},
        { id: "home101_b4", type: "call_pro", title: "WHEN TO CALL A PRO", bullets: [
          "Breaker trips repeatedly without obvious cause.",
          "Burning smell from panel or outlets.",
          "Any work inside the panel itself — this can kill you.",
          "Adding new circuits or upgrading panel capacity."
        ]},
        { id: "home101_b5", type: "summary", title: "SUMMARY", bullets: [
          "Your panel distributes power via breakers that protect circuits from overload.",
          "Label it, know the main shutoff, understand when to reset vs. call a pro.",
          "Don't work inside the panel yourself. Everything outside it is your responsibility."
        ]}
      ],
      quiz: { id: "home101_q", passPercent: 80, questions: [
        { id: "home101_q1", type: "multipleChoice", prompt: "If a breaker trips repeatedly:", choices: ["Replace it with a higher-rated one", "Tape it in the on position", "Call an electrician", "Ignore it"], correctIndex: 2, explanation: "Repeated tripping indicates a serious problem — overloaded circuit, short circuit, or ground fault." },
        { id: "home101_q2", type: "multipleChoice", prompt: "Most household circuits use breakers rated at:", choices: ["5A and 10A", "15A and 20A", "30A and 40A", "50A and 60A"], correctIndex: 1, explanation: "15-amp and 20-amp breakers are standard for most household lighting and outlet circuits." },
        { id: "home101_q3", type: "multipleChoice", prompt: "240V circuits typically power:", choices: ["Bedroom lights", "Phone chargers", "Dryers, ovens, and A/C units", "Bathroom outlets"], correctIndex: 2, explanation: "Large appliances like dryers, ovens, and central A/C use 240V circuits with double-pole breakers." }
      ]},
      flashcards: [
        { id: "home101_f1", front: "Circuit Breaker", back: "A safety device that automatically stops electrical flow when current exceeds the rated amperage" },
        { id: "home101_f2", front: "Double-Pole Breaker", back: "A breaker that controls a 240-volt circuit, taking up two slots in the panel" },
        { id: "home101_f3", front: "Short Circuit", back: "When electrical current takes an unintended path of low resistance — causes breakers to trip instantly" }
      ],
      tags: ["electrical", "basics", "safety"]
    },
    {
      id: "home_t1_02", categoryId: "home", tier: 1, lessonNumber: 2,
      title: "Water Shutoff Valves", subtitle: "Stop a flood before it destroys your home",
      estimatedMinutes: 6, difficulty: 1, prerequisites: ["home_t1_01"],
      contentBlocks: [
        { id: "home102_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Water damage is the most common and expensive form of home damage. Response time matters enormously.",
          "Knowing where your shutoff valves are can save you tens of thousands of dollars in a single incident."
        ]},
        { id: "home102_b2", type: "component_breakdown", title: "TYPES OF SHUTOFFS", bullets: [
          "Main shutoff: Controls all water entering the house. Usually near the water meter or where the supply line enters.",
          "Fixture shutoffs: Individual valves under sinks, behind toilets, behind washing machines.",
          "Gate valves: Round handle, turn multiple times. Older style, can corrode stuck.",
          "Ball valves: Lever handle, quarter turn. Modern, reliable, preferred."
        ]},
        { id: "home102_b3", type: "owner_actions", title: "OWNER ACTIONS", bullets: [
          "Locate your main shutoff TODAY. Don't wait for an emergency.",
          "Test it annually — turn it off and back on to prevent it from seizing.",
          "Know every fixture shutoff in your house.",
          "Keep a water meter key accessible if your main shutoff is at the street."
        ]},
        { id: "home102_b4", type: "summary", title: "SUMMARY", bullets: [
          "Know your main shutoff location and test it annually.",
          "Fixture shutoffs let you isolate problems without cutting water to the whole house.",
          "Speed of response determines damage cost. Preparation is everything."
        ]}
      ],
      quiz: { id: "home102_q", passPercent: 80, questions: [
        { id: "home102_q1", type: "multipleChoice", prompt: "A ball valve is operated by:", choices: ["Turning a round handle many times", "A quarter-turn lever", "Pressing a button", "An electronic switch"], correctIndex: 1, explanation: "Ball valves use a quarter-turn lever — they're more reliable than gate valves." },
        { id: "home102_q2", type: "multipleChoice", prompt: "How often should you test your main shutoff?", choices: ["Never", "Every 10 years", "Annually", "Monthly"], correctIndex: 2, explanation: "Test your main shutoff valve annually to prevent it from corroding in place." },
        { id: "home102_q3", type: "multipleChoice", prompt: "Water damage is:", choices: ["Rare and minor", "The most common expensive home damage", "Only a concern in flood zones", "Covered by all insurance"], correctIndex: 1, explanation: "Water damage is the most common and often most expensive form of residential damage." }
      ]},
      flashcards: [
        { id: "home102_f1", front: "Ball Valve", back: "Quarter-turn valve with lever handle — modern, reliable, preferred for water shutoffs" },
        { id: "home102_f2", front: "Gate Valve", back: "Multi-turn valve with round handle — older style, can corrode stuck over time" },
        { id: "home102_f3", front: "Main Shutoff", back: "The valve that controls all water entering the house — usually near meter or supply line entry" }
      ],
      tags: ["plumbing", "basics", "emergency"]
    },
  ],

  cars: [
    {
      id: "cars_t1_01", categoryId: "cars", tier: 1, lessonNumber: 1,
      title: "Under the Hood", subtitle: "What you're looking at when you open it",
      estimatedMinutes: 7, difficulty: 1, prerequisites: [],
      contentBlocks: [
        { id: "cars101_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "You should be able to open your hood and identify the major components. This is baseline competence.",
          "Basic knowledge prevents you from being taken advantage of at a repair shop.",
          "Some problems are simple to diagnose — if you can identify what you're looking at."
        ]},
        { id: "cars101_b2", type: "component_breakdown", title: "KEY COMPONENTS", bullets: [
          "Engine: The block in the center. Converts fuel to mechanical energy.",
          "Battery: Usually a black box with two terminals (positive/red and negative/black).",
          "Radiator: At the front. Cools the engine using coolant fluid.",
          "Oil dipstick: Yellow or orange handle. Tells you your oil level and condition.",
          "Air filter: Usually in a plastic housing. Cleans air entering the engine.",
          "Brake fluid reservoir: Small container, usually near the firewall. Clear with markings."
        ]},
        { id: "cars101_b3", type: "owner_actions", title: "OWNER ACTIONS", bullets: [
          "Check oil monthly using the dipstick. Engine off, on level ground.",
          "Check coolant level in the overflow reservoir (never open the radiator cap when hot).",
          "Inspect battery terminals for corrosion — white/blue crusty buildup.",
          "Know where your fuse box is and keep spare fuses."
        ]},
        { id: "cars101_b4", type: "summary", title: "SUMMARY", bullets: [
          "Know six things under the hood: engine, battery, radiator, dipstick, air filter, brake fluid.",
          "Check oil and coolant regularly. Inspect battery terminals.",
          "This knowledge protects you from unnecessary repair costs."
        ]}
      ],
      quiz: { id: "cars101_q", passPercent: 80, questions: [
        { id: "cars101_q1", type: "multipleChoice", prompt: "The oil dipstick typically has what color handle?", choices: ["Black", "White", "Yellow or orange", "Red"], correctIndex: 2, explanation: "The oil dipstick usually has a yellow or orange handle for easy identification." },
        { id: "cars101_q2", type: "multipleChoice", prompt: "You should never open the radiator cap when:", choices: ["The car is off", "It's raining", "The engine is hot", "The oil is low"], correctIndex: 2, explanation: "A hot radiator is under pressure — opening the cap can cause severe burns from superheated coolant." },
        { id: "cars101_q3", type: "multipleChoice", prompt: "White/blue crusty buildup on battery terminals indicates:", choices: ["Normal operation", "Corrosion", "A full charge", "New battery needed immediately"], correctIndex: 1, explanation: "Corrosion on battery terminals can cause starting problems and should be cleaned." }
      ]},
      flashcards: [
        { id: "cars101_f1", front: "Coolant (Antifreeze)", back: "Fluid circulated through the engine and radiator to regulate engine temperature" },
        { id: "cars101_f2", front: "Dipstick", back: "A measuring rod to check fluid levels — most commonly for engine oil" },
        { id: "cars101_f3", front: "Radiator", back: "Heat exchanger at the front of the car that cools engine coolant using airflow" }
      ],
      tags: ["basics", "maintenance", "components"]
    },
    {
      id: "cars_t1_02", categoryId: "cars", tier: 1, lessonNumber: 2,
      title: "Tire Basics", subtitle: "The only thing between you and the road",
      estimatedMinutes: 6, difficulty: 1, prerequisites: ["cars_t1_01"],
      contentBlocks: [
        { id: "cars102_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Tires are the single most important safety component on your vehicle. They're your only contact with the road.",
          "Proper tire maintenance prevents blowouts, improves fuel economy, and extends tire life."
        ]},
        { id: "cars102_b2", type: "component_breakdown", title: "WHAT TO KNOW", bullets: [
          "Tire pressure: Check monthly when cold. Find recommended PSI on the driver's door jamb sticker.",
          "Tread depth: Use a penny — insert with Lincoln's head down. If you see the top of his head, replace the tire.",
          "Tire rotation: Every 5,000-8,000 miles. Evens out wear patterns.",
          "Tire size: Numbers on the sidewall (e.g., 225/65R17) — width, aspect ratio, diameter."
        ]},
        { id: "cars102_b3", type: "owner_actions", title: "OWNER ACTIONS", bullets: [
          "Own a tire pressure gauge and check monthly.",
          "Inspect tires visually for bulges, cracks, or embedded objects.",
          "Know how to change a tire — locate your spare, jack, and lug wrench now.",
          "Don't drive on a spare tire above 50 mph or longer than necessary."
        ]},
        { id: "cars102_b4", type: "summary", title: "SUMMARY", bullets: [
          "Check pressure monthly, tread depth regularly, rotate on schedule.",
          "Know your tire size and how to change a flat.",
          "Tires are safety-critical — don't neglect them."
        ]}
      ],
      quiz: { id: "cars102_q", passPercent: 80, questions: [
        { id: "cars102_q1", type: "multipleChoice", prompt: "Where do you find the recommended tire pressure?", choices: ["On the tire sidewall", "In the owner's manual only", "On the driver's door jamb sticker", "On the dashboard"], correctIndex: 2, explanation: "The recommended PSI is on the driver's door jamb sticker (the sidewall shows maximum, not recommended)." },
        { id: "cars102_q2", type: "multipleChoice", prompt: "How often should tires be rotated?", choices: ["Every 1,000 miles", "Every 5,000-8,000 miles", "Every 20,000 miles", "Never"], correctIndex: 1, explanation: "Tires should be rotated every 5,000-8,000 miles to ensure even wear." },
        { id: "cars102_q3", type: "multipleChoice", prompt: "The penny test checks:", choices: ["Tire pressure", "Tread depth", "Tire age", "Wheel alignment"], correctIndex: 1, explanation: "The penny test checks tread depth — if Lincoln's head is fully visible, the tire needs replacement." }
      ]},
      flashcards: [
        { id: "cars102_f1", front: "PSI", back: "Pounds per square inch — the unit for measuring tire pressure" },
        { id: "cars102_f2", front: "Tire Rotation", back: "Moving tires to different positions on the vehicle to ensure even wear — every 5,000-8,000 miles" },
        { id: "cars102_f3", front: "Penny Test", back: "Insert penny head-down into tread groove — if you see the top of Lincoln's head, tire needs replacement" }
      ],
      tags: ["tires", "maintenance", "safety"]
    },
  ],

  grilling: [
    {
      id: "grill_t1_01", categoryId: "grilling", tier: 1, lessonNumber: 1,
      title: "Fire Management", subtitle: "Heat control is the foundation of everything",
      estimatedMinutes: 6, difficulty: 1, prerequisites: [],
      contentBlocks: [
        { id: "grill101_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Grilling isn't about having the best equipment. It's about understanding heat and when to apply it.",
          "Most grilling failures come from two things: wrong temperature and wrong timing. Both are controllable."
        ]},
        { id: "grill101_b2", type: "system_overview", title: "HEAT ZONES", bullets: [
          "Direct heat: Food directly over the flame/coals. High temperature. For searing, thin cuts, burgers.",
          "Indirect heat: Food to the side of the heat source. Lower temperature. For thick cuts, roasts, whole chicken.",
          "Two-zone setup: Hot side and cool side. This is the most versatile configuration.",
          "Every grill — charcoal, gas, or pellet — should be set up with zones."
        ]},
        { id: "grill101_b3", type: "how_it_works", title: "TEMPERATURE CONTROL", bullets: [
          "Charcoal: More coals = more heat. Spread or pile to control zones. Vents control airflow and temperature.",
          "Gas: Burner knobs. Simple and precise. Use one side high and one side low.",
          "Let the grill preheat 10-15 minutes before cooking. A cold grill sticks.",
          "The hand test: hold your hand 6 inches over the grate — 2 seconds = high, 4 = medium, 6 = low."
        ]},
        { id: "grill101_b4", type: "summary", title: "SUMMARY", bullets: [
          "Two-zone setup is essential. Direct for searing, indirect for cooking through.",
          "Preheat your grill. Control temperature through fuel, airflow, and burner settings.",
          "Master heat and timing — equipment is secondary."
        ]}
      ],
      quiz: { id: "grill101_q", passPercent: 80, questions: [
        { id: "grill101_q1", type: "multipleChoice", prompt: "A two-zone setup means:", choices: ["Two grills side by side", "Hot side and cool side on one grill", "Top rack and bottom rack", "Indoor and outdoor zones"], correctIndex: 1, explanation: "Two-zone setup: one side has direct heat, the other has indirect — the most versatile configuration." },
        { id: "grill101_q2", type: "multipleChoice", prompt: "How long should a grill preheat?", choices: ["No preheating needed", "2-3 minutes", "10-15 minutes", "30+ minutes"], correctIndex: 2, explanation: "Preheat for 10-15 minutes so the grates are hot enough to sear and prevent sticking." },
        { id: "grill101_q3", type: "multipleChoice", prompt: "On a charcoal grill, temperature is controlled by:", choices: ["The lid color", "Coal amount and vent position", "The type of lighter fluid", "The grate height only"], correctIndex: 1, explanation: "More coals = more heat. Open vents = more oxygen = hotter. Close vents to lower temperature." }
      ]},
      flashcards: [
        { id: "grill101_f1", front: "Direct Heat", back: "Cooking food directly over the flame or coals — high temperature for searing" },
        { id: "grill101_f2", front: "Indirect Heat", back: "Cooking food offset from the heat source — lower temperature for slow cooking" },
        { id: "grill101_f3", front: "Two-Zone Setup", back: "Arranging a grill with a hot side (direct) and cool side (indirect) for maximum versatility" }
      ],
      tags: ["fire", "basics", "temperature"]
    },
    {
      id: "grill_t1_02", categoryId: "grilling", tier: 1, lessonNumber: 2,
      title: "The Perfect Steak", subtitle: "Sear, rest, and internal temperature",
      estimatedMinutes: 7, difficulty: 1, prerequisites: ["grill_t1_01"],
      contentBlocks: [
        { id: "grill102_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "A properly grilled steak is one of the most fundamental cooking skills a person can have.",
          "The difference between great and mediocre is technique, not the price of the meat."
        ]},
        { id: "grill102_b2", type: "how_it_works", title: "THE METHOD", bullets: [
          "Start with room temperature meat. Take it out of the fridge 30-45 minutes before grilling.",
          "Season generously with salt and pepper. That's it. Good meat doesn't need more.",
          "Sear on high direct heat: 3-4 minutes per side for a 1-inch steak.",
          "Move to indirect heat to finish if needed. Use a meat thermometer.",
          "Rest for 5-10 minutes after removing from heat. This redistributes juices."
        ]},
        { id: "grill102_b3", type: "component_breakdown", title: "INTERNAL TEMPERATURES", bullets: [
          "Rare: 120-125°F — cool red center.",
          "Medium-rare: 130-135°F — warm red center. The most commonly recommended doneness.",
          "Medium: 135-145°F — warm pink center.",
          "Medium-well: 145-155°F — slightly pink.",
          "Well-done: 155°F+ — no pink. (Higher temperatures = drier meat.)"
        ]},
        { id: "grill102_b4", type: "summary", title: "SUMMARY", bullets: [
          "Room temp meat, simple seasoning, high heat sear, rest before cutting.",
          "Use a thermometer. Remove 5°F below target — carryover cooking continues.",
          "Resting is not optional. It makes or breaks the result."
        ]}
      ],
      quiz: { id: "grill102_q", passPercent: 80, questions: [
        { id: "grill102_q1", type: "multipleChoice", prompt: "Medium-rare internal temperature is:", choices: ["110-115°F", "130-135°F", "155-160°F", "175-180°F"], correctIndex: 1, explanation: "Medium-rare is 130-135°F — warm red center, the most commonly recommended doneness." },
        { id: "grill102_q2", type: "multipleChoice", prompt: "Why do you rest a steak after grilling?", choices: ["To cool it for eating", "To add more seasoning", "To redistribute juices throughout the meat", "It's not necessary"], correctIndex: 2, explanation: "Resting allows the juices to redistribute. Cutting immediately causes them to run out." },
        { id: "grill102_q3", type: "multipleChoice", prompt: "Carryover cooking means:", choices: ["Cooking continues after removing from heat", "Cooking on two grills", "Finishing in the oven", "Using leftover heat from yesterday"], correctIndex: 0, explanation: "Meat temperature continues to rise 5-10°F after removal from heat — pull early to hit your target." }
      ]},
      flashcards: [
        { id: "grill102_f1", front: "Carryover Cooking", back: "Temperature continues to rise 5-10°F after meat is removed from heat source" },
        { id: "grill102_f2", front: "Resting", back: "Letting meat sit after cooking so juices redistribute — 5-10 minutes for steaks" },
        { id: "grill102_f3", front: "Maillard Reaction", back: "Chemical reaction between amino acids and sugars that creates the brown seared crust on meat" }
      ],
      tags: ["steak", "technique", "temperature"]
    },
  ],

  sharks: [
    {
      id: "shark_t1_01", categoryId: "sharks", tier: 1, lessonNumber: 1,
      title: "Why Sharks Made the App", subtitle: "Every academy needs an apex predator",
      estimatedMinutes: 5, difficulty: 1, prerequisites: [],
      contentBlocks: [
        { id: "shark101_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Sharks have existed for approximately 450 million years — predating trees, dinosaurs, and every human government.",
          "They are among the most efficient apex predators on Earth.",
          "This category exists because it's genuinely fascinating and because every serious training system needs something memorable."
        ]},
        { id: "shark101_b2", type: "system_overview", title: "SYSTEM OVERVIEW", bullets: [
          "There are over 500 species of sharks, from the tiny dwarf lanternshark to the massive whale shark.",
          "They occupy every ocean and many river systems.",
          "Most species are harmless to humans. Only about a dozen pose any real risk.",
          "They are keystone predators — remove them and entire marine ecosystems collapse."
        ]},
        { id: "shark101_b3", type: "how_it_works", title: "WHY THEY'RE HERE", bullets: [
          "Sharks represent quiet, structural dominance. No posturing. No wasted energy.",
          "Millions of years of refinement into peak efficiency.",
          "If the Constitution teaches structure and firearms teach responsibility, sharks remind you that real power doesn't announce itself."
        ]},
        { id: "shark101_b4", type: "summary", title: "SUMMARY", bullets: [
          "450 million years of evolution. 500+ species. Apex predators.",
          "Keystone species critical to ocean health.",
          "In this app: a symbol of refined, quiet competence."
        ]}
      ],
      quiz: { id: "shark101_q", passPercent: 80, questions: [
        { id: "shark101_q1", type: "multipleChoice", prompt: "Sharks are approximately how old as a species group?", choices: ["50 million years", "450 million years", "200 million years", "1 billion years"], correctIndex: 1, explanation: "Sharks have been around for approximately 450 million years." },
        { id: "shark101_q2", type: "multipleChoice", prompt: "How many shark species exist?", choices: ["About 50", "About 150", "About 2,000", "About 500+"], correctIndex: 3, explanation: "There are over 500 known species of sharks." },
        { id: "shark101_q3", type: "multipleChoice", prompt: "Sharks are considered keystone predators because:", choices: ["They're the largest fish", "They eat the most", "Removing them collapses ecosystems", "They have no predators"], correctIndex: 2, explanation: "As keystone predators, sharks regulate populations below them. Remove them and the system destabilizes." }
      ]},
      flashcards: [
        { id: "shark101_f1", front: "Keystone Predator", back: "A predator whose removal would fundamentally alter the structure of its ecosystem" },
        { id: "shark101_f2", front: "Apex Predator", back: "A predator at the top of the food chain with no natural predators of its own" },
        { id: "shark101_f3", front: "Dwarf Lanternshark", back: "The smallest known shark species at about 8 inches — bioluminescent, deep-water" },
        { id: "shark101_f4", front: "Whale Shark", back: "The largest fish in the ocean at up to 40+ feet — filter feeder, harmless to humans" }
      ],
      tags: ["intro", "basics", "philosophy"]
    },
    {
      id: "shark_t1_02", categoryId: "sharks", tier: 1, lessonNumber: 2,
      title: "Shark Basics", subtitle: "Cartilage, rows of teeth, and electroreception",
      estimatedMinutes: 6, difficulty: 1, prerequisites: ["shark_t1_01"],
      contentBlocks: [
        { id: "shark102_b1", type: "why_matters", title: "WHY THIS MATTERS", bullets: [
          "Before you learn individual species, you need to understand what makes a shark a shark.",
          "Sharks are fundamentally different from bony fish in ways that explain their evolutionary success."
        ]},
        { id: "shark102_b2", type: "component_breakdown", title: "WHAT MAKES A SHARK", bullets: [
          "Skeleton made of cartilage, not bone — lighter, more flexible.",
          "Multiple rows of teeth that replace continuously throughout life.",
          "Skin covered in dermal denticles (tiny tooth-like scales) — reduces drag.",
          "No swim bladder — must keep moving or use oil-rich livers for buoyancy.",
          "Electroreception — ampullae of Lorenzini detect electrical fields from prey."
        ]},
        { id: "shark102_b3", type: "how_it_works", title: "HOW THEY HUNT", bullets: [
          "Smell — can detect extremely low concentrations of blood in water. Primary long-range sense.",
          "Lateral line — detects vibrations and pressure changes in water.",
          "Electroreception — short-range, final approach. Detects heartbeats and muscle contractions.",
          "Vision — better than most people assume, especially in low light."
        ]},
        { id: "shark102_b4", type: "summary", title: "SUMMARY", bullets: [
          "Cartilage skeleton, replaceable teeth, dermal denticles, electroreception.",
          "Multiple sensory systems layered for hunting efficiency.",
          "450 million years of optimization — these are not primitive animals."
        ]}
      ],
      quiz: { id: "shark102_q", passPercent: 80, questions: [
        { id: "shark102_q1", type: "multipleChoice", prompt: "Shark skeletons are made of:", choices: ["Bone", "Calcium", "Cartilage", "Chitin"], correctIndex: 2, explanation: "Shark skeletons are made of cartilage, which is lighter and more flexible than bone." },
        { id: "shark102_q2", type: "multipleChoice", prompt: "Ampullae of Lorenzini detect:", choices: ["Sound waves", "Temperature changes", "Light", "Electrical fields"], correctIndex: 3, explanation: "The ampullae of Lorenzini are electroreceptors that detect faint electrical fields from prey." },
        { id: "shark102_q3", type: "multipleChoice", prompt: "Dermal denticles are:", choices: ["A type of shark tooth", "Sensory organs", "Tiny scales that reduce drag", "Reproductive structures"], correctIndex: 2, explanation: "Dermal denticles are tiny tooth-like scales that reduce hydrodynamic drag." }
      ]},
      flashcards: [
        { id: "shark102_f1", front: "Ampullae of Lorenzini", back: "Electroreceptor organs that detect faint electrical fields — used for prey detection at close range" },
        { id: "shark102_f2", front: "Dermal Denticles", back: "Tiny tooth-like scales covering shark skin that reduce drag and protect against parasites" },
        { id: "shark102_f3", front: "Lateral Line", back: "A sensory system detecting vibrations and pressure changes in surrounding water" },
        { id: "shark102_f4", front: "Cartilaginous Skeleton", back: "A skeleton made of cartilage rather than bone — lighter, more flexible, characteristic of all sharks" }
      ],
      tags: ["anatomy", "basics", "biology"]
    },
  ],
};

export function getAllLessons() {
  return Object.values(lessons).flat();
}

export function getLessonsForCategory(categoryId) {
  return lessons[categoryId] || [];
}

export function getLessonById(id) {
  return getAllLessons().find((l) => l.id === id);
}

export function getNextLesson(lessonId, categoryId) {
  const all = getLessonsForCategory(categoryId);
  const idx = all.findIndex((l) => l.id === lessonId);
  if (idx >= 0 && idx + 1 < all.length) return all[idx + 1];
  return null;
}

export default lessons;