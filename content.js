// =====================================================================
// CDL STUDY CONTENT
// Everything Dad reads, hears, and gets quizzed on lives in this file.
// To fix or add something, edit the text below and re-upload this file.
//
// Each unit has:
//   sections   - the one-page notes (h = heading, text = paragraph, list = bullet points)
//   keyNumbers - short facts to memorize (read aloud as a group)
//   cards      - flashcards (q = front, a = back)
//   quiz       - multiple choice (answer = index of the right choice, starting at 0)
// =====================================================================

window.CDL = {
  title: "Dad's CDL Study Hub",
  subtitle: "Virginia Class A CDL — 30 minutes a day",

  units: [
    // ---------------------------------------------------------------
    {
      id: 1,
      title: "CDL Basics and Virginia Rules",
      test: "General Knowledge",
      summary: "License classes, endorsements, the learner's permit, and the rules that can cost you your CDL.",
      sections: [
        {
          h: "The three license classes",
          text: "Your CDL class depends on how heavy the vehicle is and what it carries.",
          list: [
            "Class A: a combination of vehicles with a gross combination weight rating of 26,001 pounds or more, where the towed vehicle is rated over 10,000 pounds. A tractor-trailer is Class A.",
            "Class B: a single vehicle rated 26,001 pounds or more, or one towing a vehicle rated 10,000 pounds or less. Dump trucks and large buses are often Class B.",
            "Class C: a smaller vehicle that carries 16 or more people including the driver, or carries hazardous materials that need placards."
          ]
        },
        {
          h: "Endorsements",
          text: "Endorsements are add-ons to your CDL. Each one needs its own knowledge test.",
          list: [
            "T: double and triple trailers.",
            "P: passenger vehicles.",
            "N: tank vehicles.",
            "H: hazardous materials.",
            "X: tank vehicles plus hazardous materials together.",
            "S: school bus."
          ]
        },
        {
          h: "Knowledge tests for Class A",
          text: "Every CDL driver takes the General Knowledge test. If the truck has air brakes, take the Air Brakes test, or you get a restriction that keeps you out of air-brake trucks. For Class A, also take the Combination Vehicles test. Virginia requires at least 80 percent correct to pass each test. That means if there are 50 questions, you can miss no more than 10."
        },
        {
          h: "The learner's permit, step by step",
          list: [
            "Pass the knowledge tests to get your commercial learner's permit, called a CLP.",
            "With a CLP, you may only drive a commercial vehicle when a CDL holder licensed for that type of vehicle is with you.",
            "In Virginia the CLP is good for 180 days and can be renewed one time without retesting.",
            "Hold the CLP for at least 14 days and finish Entry Level Driver Training before the skills test.",
            "The skills test has three parts: the pre-trip vehicle inspection, basic vehicle control, and the on-road drive."
          ]
        },
        {
          h: "Medical card and age",
          text: "You need a Department of Transportation medical examiner's certificate, often called the medical card. It is good for up to 2 years. You must be at least 18 to drive within Virginia only, and at least 21 to drive across state lines or to haul hazardous materials."
        },
        {
          h: "Rules that can take your CDL away",
          list: [
            "Driving a commercial vehicle with a blood alcohol content of 0.04 or higher is driving under the influence. That is half the limit for regular cars.",
            "If you have any detectable alcohol, even under 0.04, you are put out of service for 24 hours.",
            "Refusing an alcohol test counts the same as failing it.",
            "A first offense for DUI, refusing a test, leaving the scene of a crash, or using the vehicle in a felony means losing the CDL for at least 1 year, or 3 years if you were hauling placarded hazardous materials.",
            "A second offense of that kind means losing the CDL for life.",
            "Serious traffic violations include speeding 15 miles per hour or more over the limit, reckless driving, improper lane changes, following too closely, texting, and using a hand-held phone. Two in 3 years means at least 60 days without a CDL. Three in 3 years means at least 120 days."
          ]
        },
        {
          h: "Other rules to know",
          list: [
            "You may only have one driver's license. In Virginia you hold either a regular license or a CDL, not both.",
            "Tell your employer about any traffic conviction within 30 days, except parking tickets.",
            "Texting and using a hand-held phone while driving a commercial vehicle are banned. Hands-free only."
          ]
        }
      ],
      keyNumbers: [
        "80 percent correct passes a knowledge test.",
        "Class A: towed vehicle rated over 10,000 pounds.",
        "26,001 pounds or more makes it a commercial vehicle by weight.",
        "Hold the learner's permit at least 14 days before the skills test.",
        "The Virginia learner's permit lasts 180 days and can be renewed once.",
        "The medical card lasts up to 2 years.",
        "0.04 blood alcohol content is DUI in a commercial vehicle.",
        "Any alcohol under 0.04 means 24 hours out of service.",
        "First DUI: lose the CDL for 1 year, or 3 years with hazmat. Second: for life.",
        "Two serious violations in 3 years: 60 days. Three: 120 days."
      ],
      cards: [
        { q: "What score passes a Virginia CDL knowledge test?", a: "80 percent correct." },
        { q: "What makes a combination vehicle Class A?", a: "Combined rating of 26,001 pounds or more, with the towed vehicle rated over 10,000 pounds." },
        { q: "What does the H endorsement allow?", a: "Hauling hazardous materials that need placards." },
        { q: "What does the T endorsement allow?", a: "Pulling double and triple trailers." },
        { q: "What does the N endorsement allow?", a: "Driving tank vehicles." },
        { q: "How long must you hold the learner's permit before the skills test?", a: "At least 14 days, plus finishing Entry Level Driver Training." },
        { q: "Who must ride with you when you drive on a learner's permit?", a: "A CDL holder licensed for that type of vehicle." },
        { q: "What blood alcohol level is DUI in a commercial vehicle?", a: "0.04." },
        { q: "What happens with any alcohol below 0.04?", a: "Out of service for 24 hours." },
        { q: "Penalty for a first DUI in a commercial vehicle?", a: "Lose the CDL for at least 1 year. 3 years if hauling placarded hazmat." },
        { q: "How long is a DOT medical card good for?", a: "Up to 2 years." },
        { q: "What are the three parts of the skills test?", a: "Pre-trip inspection, basic vehicle control, and the on-road drive." }
      ],
      quiz: [
        { q: "What score do you need to pass a Virginia CDL knowledge test?", choices: ["70 percent", "75 percent", "80 percent", "90 percent"], answer: 2, why: "Virginia requires at least 80 percent correct on each knowledge test." },
        { q: "A combination vehicle needs a Class A CDL when the towed vehicle is rated over how many pounds?", choices: ["5,000 pounds", "10,000 pounds", "15,000 pounds", "26,000 pounds"], answer: 1, why: "Class A is a combination of 26,001 pounds or more where the towed unit is rated over 10,000 pounds." },
        { q: "How long must you hold a commercial learner's permit before taking the skills test?", choices: ["7 days", "14 days", "60 days", "6 months"], answer: 1, why: "At least 14 days, and you must also finish Entry Level Driver Training." },
        { q: "When you drive with a learner's permit, who must be with you?", choices: ["Any adult with a regular license", "No one, if it is daytime", "A CDL holder licensed for that type of vehicle", "A police officer"], answer: 2, why: "A CLP holder may only drive with a CDL holder who is licensed for that type of vehicle." },
        { q: "At what blood alcohol content are you considered under the influence in a commercial vehicle?", choices: ["0.02", "0.04", "0.08", "0.10"], answer: 1, why: "0.04 is the limit for commercial drivers, half the limit for regular cars." },
        { q: "If you have a blood alcohol content under 0.04 but more than zero, what happens?", choices: ["Nothing", "A warning", "You are put out of service for 24 hours", "You lose your CDL for life"], answer: 2, why: "Any detectable alcohol under 0.04 means 24 hours out of service." },
        { q: "A first DUI conviction in a commercial vehicle means losing your CDL for at least:", choices: ["60 days", "6 months", "1 year", "Life"], answer: 2, why: "At least 1 year, or 3 years if you were hauling placarded hazardous materials." },
        { q: "Which endorsement do you need to haul placarded hazardous materials?", choices: ["T", "N", "H", "P"], answer: 2, why: "H is the hazardous materials endorsement." },
        { q: "How long is a DOT medical examiner's certificate good for, at most?", choices: ["1 year", "2 years", "4 years", "8 years"], answer: 1, why: "The medical card is good for up to 2 years." },
        { q: "Two serious traffic violations within 3 years means losing your CDL for at least:", choices: ["30 days", "60 days", "1 year", "Life"], answer: 1, why: "Two serious violations in 3 years is at least 60 days. Three is at least 120 days." },
        { q: "Can you use a hand-held phone while driving a commercial vehicle?", choices: ["Yes, at red lights", "Yes, under 25 miles per hour", "Yes, to call dispatch", "No, only hands-free"], answer: 3, why: "Hand-held phone use and texting are banned for commercial drivers." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 2,
      title: "Vehicle Inspection",
      test: "General Knowledge",
      summary: "Why, when, and how to inspect the truck, including the seven-step method used on the pre-trip test.",
      sections: [
        {
          h: "Why and when you inspect",
          text: "Inspections keep you safe, and the law requires them. Inspectors can put an unsafe truck out of service. There are three kinds of inspection.",
          list: [
            "Pre-trip: before every trip, to find problems that could cause a crash or breakdown.",
            "During the trip: watch your gauges, use your senses for sounds, smells, and feel, and check the tires, brakes, lights, and cargo whenever you stop.",
            "Post-trip: at the end of the day, with a written report on any problems you found. This is called the driver vehicle inspection report."
          ]
        },
        {
          h: "Tires",
          list: [
            "Steering tires on the front need at least 4 thirty-seconds of an inch of tread.",
            "All other tires need at least 2 thirty-seconds of an inch.",
            "No cuts, bulges, or tread separation.",
            "Dual tires must not touch each other or the truck.",
            "Do not mix sizes, and do not mix radial and bias-ply tires on the same axle.",
            "Check air pressure with a gauge."
          ]
        },
        {
          h: "Wheels, brakes, steering, and suspension",
          list: [
            "Rust trails around the lug nuts mean the nuts may be loose.",
            "Welded repairs on wheels or rims are not allowed.",
            "Brake drums must not be cracked, and brake linings must not be thinner than a quarter inch.",
            "Steering wheel play of more than 10 degrees, about 2 inches at the rim of a 20-inch wheel, makes the truck hard to steer.",
            "Check for cracked or broken spring hangers, missing or broken leaf springs, and leaking shock absorbers.",
            "Check the exhaust for loose, broken, or leaking parts."
          ]
        },
        {
          h: "Emergency equipment",
          text: "Every truck must carry a fire extinguisher, spare electrical fuses unless the truck has circuit breakers, and three red reflective warning triangles. A spare tire is nice to have but is not required."
        },
        {
          h: "The seven-step inspection method",
          list: [
            "Step 1, vehicle overview: walk up to the truck and look for leaks under it, damage, and whether it leans to one side.",
            "Step 2, engine compartment: check oil, coolant, and power steering fluid levels, belts, and hoses. Belts should be snug, with no more than about three quarters of an inch of play.",
            "Step 3, start the engine and inspect inside the cab: oil pressure should come up to normal within seconds, and the gauges should read normal. Check mirrors, windshield, wipers, horn, and the emergency equipment.",
            "Step 4, turn off the engine and check the lights: headlights, high beams, and four-way flashers.",
            "Step 5, do a walk-around inspection of tires, wheels, brakes, suspension, lights, and reflectors. Clean the lights and reflectors as you go.",
            "Step 6, check the turn signals and brake lights.",
            "Step 7, start the engine and check the brakes. Make sure the parking brake holds and the service brake stops the truck without pulling to one side."
          ]
        },
        {
          h: "Hydraulic brake check",
          text: "On a truck with hydraulic brakes, pump the brake pedal three times, then press and hold it for five seconds. The pedal should not move. If it does, there could be a leak."
        },
        {
          h: "Cargo checks",
          text: "Check cargo within the first 50 miles of a trip. After that, check it every 3 hours or every 150 miles, whichever comes first, and after every break."
        }
      ],
      keyNumbers: [
        "Front steering tires: at least 4 thirty-seconds of an inch of tread.",
        "All other tires: at least 2 thirty-seconds of an inch.",
        "Steering play over 10 degrees, about 2 inches on a 20-inch wheel, is too much.",
        "Brake linings: not thinner than a quarter inch.",
        "Belts: no more than about three quarters of an inch of play.",
        "Hydraulic brakes: pump 3 times, hold 5 seconds, pedal should not move.",
        "3 red reflective warning triangles.",
        "Check cargo within 50 miles, then every 3 hours or 150 miles."
      ],
      cards: [
        { q: "What are the three types of inspection?", a: "Pre-trip, during the trip, and post-trip." },
        { q: "Minimum tread on front steering tires?", a: "4 thirty-seconds of an inch." },
        { q: "Minimum tread on all other tires?", a: "2 thirty-seconds of an inch." },
        { q: "What do rust trails around lug nuts mean?", a: "The lug nuts may be loose." },
        { q: "How much steering wheel play is too much?", a: "More than 10 degrees, about 2 inches on a 20-inch wheel." },
        { q: "What emergency equipment is required?", a: "Fire extinguisher, spare fuses unless it has circuit breakers, and 3 red reflective warning triangles." },
        { q: "How do you check hydraulic brakes for leaks?", a: "Pump the pedal 3 times, hold it for 5 seconds. It should not move." },
        { q: "What is step 1 of the seven-step inspection?", a: "Vehicle overview: look for leaks, damage, and leaning as you walk up." },
        { q: "Which inspection ends with a written report?", a: "The post-trip inspection." },
        { q: "When do you first check cargo after starting a trip?", a: "Within the first 50 miles." }
      ],
      quiz: [
        { q: "What is the minimum tread depth for front steering tires?", choices: ["2 thirty-seconds of an inch", "4 thirty-seconds of an inch", "6 thirty-seconds of an inch", "8 thirty-seconds of an inch"], answer: 1, why: "Front tires need 4 thirty-seconds. All other tires need 2 thirty-seconds." },
        { q: "What is the minimum tread depth for tires that are not on the front axle?", choices: ["1 thirty-second of an inch", "2 thirty-seconds of an inch", "4 thirty-seconds of an inch", "There is no minimum"], answer: 1, why: "All tires other than the front steering tires need at least 2 thirty-seconds of an inch." },
        { q: "Rust trails around the lug nuts most likely mean:", choices: ["The wheel is new", "The lug nuts may be loose", "The tire is overinflated", "Nothing, this is normal"], answer: 1, why: "Rust trails are a sign the lug nuts may be loose." },
        { q: "Steering wheel play of more than how many degrees can make the truck hard to steer?", choices: ["5 degrees", "10 degrees", "20 degrees", "45 degrees"], answer: 1, why: "More than 10 degrees, about 2 inches at the rim of a 20-inch wheel." },
        { q: "Which of these is NOT required emergency equipment?", choices: ["Fire extinguisher", "Three reflective warning triangles", "Spare fuses, unless the truck has circuit breakers", "Spare tire"], answer: 3, why: "A spare tire is not on the required list." },
        { q: "Which inspection includes a written report on the truck's condition?", choices: ["Pre-trip", "During the trip", "Post-trip", "None of them"], answer: 2, why: "The post-trip inspection ends with the driver vehicle inspection report." },
        { q: "To check hydraulic brakes, you pump the pedal 3 times and hold it for 5 seconds. What should the pedal do?", choices: ["Sink slowly", "Not move", "Go to the floor", "Vibrate"], answer: 1, why: "If the pedal moves, there may be a leak or other problem." },
        { q: "How should dual tires look?", choices: ["Touching each other for support", "Not touching each other or any part of the truck", "Different sizes for better grip", "One radial and one bias-ply"], answer: 1, why: "Duals must not touch each other or the truck, and sizes must match." },
        { q: "Brake linings should not be worn thinner than:", choices: ["One eighth of an inch", "A quarter inch", "Half an inch", "One inch"], answer: 1, why: "Linings worn thinner than a quarter inch are dangerous." },
        { q: "After the first check, how often should you check cargo during a trip?", choices: ["Every hour or 50 miles", "Every 3 hours or 150 miles", "Every 6 hours or 300 miles", "Only at the end of the day"], answer: 1, why: "Check within the first 50 miles, then every 3 hours or 150 miles, whichever comes first." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 3,
      title: "Basic Control, Seeing, and Communicating",
      test: "General Knowledge",
      summary: "Starting, steering, backing, shifting, using mirrors, signaling, and setting out warning triangles.",
      sections: [
        {
          h: "Basic control",
          list: [
            "Hold the steering wheel firmly with both hands, on opposite sides of the wheel.",
            "Accelerate smoothly so the truck does not jerk. On a hill, use the parking brake to keep from rolling back as you start.",
            "Stop by pushing the brake pedal down gradually."
          ]
        },
        {
          h: "Backing safely",
          text: "Avoid backing whenever you can. When you must back up, follow these rules.",
          list: [
            "Get out and look at the path before you back. Truckers call this G.O.A.L., get out and look.",
            "Back toward the driver's side whenever possible, because you can see better.",
            "Back slowly, using the lowest reverse gear.",
            "Use a helper when you can, and agree on hand signals first. The most important one is stop.",
            "Check your mirrors on both sides often, and correct drift right away."
          ]
        },
        {
          h: "Shifting gears",
          list: [
            "Downshift before you start down a hill and before you enter a curve.",
            "Retarders help slow the truck without wearing the brakes. Turn them off when the road is wet, icy, or snowy, because they can make the drive wheels skid."
          ]
        },
        {
          h: "Seeing ahead",
          text: "Look 12 to 15 seconds ahead. At highway speed, that is about a quarter mile. In the city, it is about one block. Looking far ahead gives you time to react."
        },
        {
          h: "Using mirrors",
          list: [
            "Check your mirrors regularly, and more often at intersections, lane changes, turns, and merges.",
            "Convex mirrors, the curved ones, show a wider view but make things look smaller and farther away than they really are.",
            "Know your blind spots. There are large ones beside and behind a truck."
          ]
        },
        {
          h: "Communicating with other drivers",
          list: [
            "Signal well before you turn or change lanes, and cancel the signal afterward.",
            "When slowing down, tap the brake pedal a few times to flash your brake lights for drivers behind you.",
            "Do not wave other drivers through or direct traffic.",
            "Use the horn only when needed."
          ]
        },
        {
          h: "Turning",
          list: [
            "Right turns: turn slowly and turn wide as you complete the turn. Keep the rear of the truck close to the curb so cars cannot squeeze in on your right. Do not swing wide to the left before starting the turn.",
            "Left turns: reach the center of the intersection before you start turning. If there are two left-turn lanes, use the right-hand one."
          ]
        },
        {
          h: "Warning triangles when stopped",
          text: "If you stop on or beside the road, turn on your four-way flashers. Put out your warning triangles within 10 minutes.",
          list: [
            "Two-lane road with traffic both ways: one triangle within 10 feet of the front or rear corner, one 100 feet behind, and one 100 feet ahead.",
            "Divided highway or one-way road: triangles at 10 feet, 100 feet, and 200 feet behind the truck, toward oncoming traffic.",
            "Behind a hill or curve: move the back triangle as far as 500 feet back so drivers see it in time."
          ]
        }
      ],
      keyNumbers: [
        "Look 12 to 15 seconds ahead.",
        "That is about a quarter mile at highway speed, or one city block.",
        "Put out warning triangles within 10 minutes.",
        "Divided highway triangles: 10, 100, and 200 feet behind.",
        "Two-way road triangles: 10 feet, 100 feet behind, and 100 feet ahead.",
        "Hill or curve: up to 500 feet back."
      ],
      cards: [
        { q: "How far ahead should you look while driving?", a: "12 to 15 seconds. About a quarter mile on the highway, one block in the city." },
        { q: "Which side should you back toward?", a: "The driver's side, because you can see better." },
        { q: "What does G.O.A.L. stand for?", a: "Get out and look, before you back up." },
        { q: "How do convex mirrors make things look?", a: "Smaller and farther away than they really are." },
        { q: "When should you turn off the retarder?", a: "When the road is wet, icy, or snowy." },
        { q: "How do you warn drivers behind you that you are slowing?", a: "Tap the brake pedal a few times to flash the brake lights." },
        { q: "How soon must you put out warning triangles?", a: "Within 10 minutes of stopping." },
        { q: "Triangle placement on a divided highway?", a: "10 feet, 100 feet, and 200 feet behind the truck." },
        { q: "How do you make a right turn in a big truck?", a: "Turn wide as you complete the turn, keeping the rear close to the curb." },
        { q: "When should you downshift?", a: "Before starting down a hill and before entering a curve." }
      ],
      quiz: [
        { q: "How far ahead should you look while driving?", choices: ["3 to 5 seconds", "12 to 15 seconds", "30 seconds", "1 minute"], answer: 1, why: "Look 12 to 15 seconds ahead to give yourself time to react." },
        { q: "At highway speed, 12 to 15 seconds ahead is about:", choices: ["One block", "A quarter mile", "Half a mile", "One mile"], answer: 1, why: "About a quarter mile on the highway, about one block in the city." },
        { q: "When you have to back up, it is safest to back toward:", choices: ["The passenger side", "The driver's side", "Whichever side is downhill", "It does not matter"], answer: 1, why: "Backing toward the driver's side lets you see better." },
        { q: "Convex mirrors make objects look:", choices: ["Closer and larger than they are", "Smaller and farther away than they are", "Exactly as they are", "Upside down"], answer: 1, why: "Convex mirrors show more area but make things look smaller and farther away." },
        { q: "After you stop on the shoulder, how soon must you set out warning devices?", choices: ["Within 10 minutes", "Within 30 minutes", "Within 1 hour", "Only at night"], answer: 0, why: "Turn on four-way flashers right away and put out triangles within 10 minutes." },
        { q: "On a divided highway, where do the warning triangles go?", choices: ["10, 50, and 100 feet behind", "10, 100, and 200 feet behind", "100 feet ahead and 100 feet behind", "Right next to the truck"], answer: 1, why: "On a divided or one-way road: 10, 100, and 200 feet toward approaching traffic." },
        { q: "How should you make a right turn?", choices: ["Swing wide to the left before turning", "Turn wide as you complete the turn, keeping the rear close to the curb", "Turn from the left lane", "Turn as fast as possible to clear the intersection"], answer: 1, why: "Keeping the rear close to the curb stops cars from passing on your right." },
        { q: "What is the best way to warn drivers behind you that you are slowing?", choices: ["Honk the horn", "Wave your arm out the window", "Tap the brake pedal a few times", "Turn on the high beams"], answer: 2, why: "Tapping the brakes flashes the brake lights." },
        { q: "When should you turn off the retarder?", choices: ["On hot days", "On wet, icy, or snowy roads", "When going downhill", "When the truck is loaded"], answer: 1, why: "On slippery roads a retarder can make the drive wheels skid." },
        { q: "When should you downshift?", choices: ["In the middle of a curve", "Halfway down a hill", "Before starting down a hill and before entering a curve", "Only when stopping"], answer: 2, why: "Get into the right gear before the hill or curve, not during it." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 4,
      title: "Speed and Space",
      test: "General Knowledge",
      summary: "Stopping distance, following distance, speed for the road conditions, and keeping space all around the truck.",
      sections: [
        {
          h: "Stopping distance",
          text: "Total stopping distance has three parts: perception distance, which is the time to see a problem, reaction distance, which is the time to move your foot to the brake, and braking distance. At 55 miles per hour on dry pavement with good brakes, a truck needs about 419 feet to stop. That is longer than a football field.",
          list: [
            "If you double your speed, it takes about four times the distance to stop.",
            "Empty trucks usually take longer to stop than loaded ones, because the tires have less grip."
          ]
        },
        {
          h: "Speed for the road conditions",
          list: [
            "Wet road: slow down by about one third. For example, from 55 down to about 35.",
            "Packed snow: slow down by half or more.",
            "Ice: slow to a crawl, and stop driving as soon as you can do so safely.",
            "Bridges freeze before the rest of the road.",
            "Black ice is a thin layer that makes the road look only wet.",
            "Hydroplaning, where the tires ride on water, can happen at speeds as low as 30 miles per hour."
          ]
        },
        {
          h: "Speed and sight distance",
          text: "Always drive at a speed that lets you stop within the distance you can see ahead. At night, low beams light up about 250 feet ahead, and high beams about 350 to 500 feet."
        },
        {
          h: "Curves",
          text: "Posted speeds on curves are meant for cars. Slow down before the curve, not in it. Braking in a curve can lock the wheels and cause a skid. Too much speed in a curve can roll a truck over."
        },
        {
          h: "Following distance",
          text: "Here is the rule. Below 40 miles per hour, leave at least 1 second for every 10 feet of vehicle length. Above 40 miles per hour, add 1 more second.",
          list: [
            "A 40-foot truck below 40 miles per hour: 4 seconds.",
            "A 40-foot truck above 40 miles per hour: 5 seconds.",
            "A 60-foot truck above 40 miles per hour: 7 seconds.",
            "To count seconds, watch the truck ahead pass a fixed object like a sign, then count: one thousand and one, one thousand and two, until you reach it."
          ]
        },
        {
          h: "Space around the truck",
          list: [
            "Behind: if someone tailgates you, increase your space ahead and avoid sudden moves. Do not speed up.",
            "Sides: stay centered in your lane and avoid driving next to other vehicles.",
            "Overhead: know your truck's height, and watch for low bridges and wires. Posted heights are not always right.",
            "Below: watch for low ground clearance, for example at railroad crossings.",
            "Merging and crossing traffic: a heavy truck accelerates slowly, so leave a bigger gap than a car would need."
          ]
        }
      ],
      keyNumbers: [
        "At 55 miles per hour, about 419 feet to stop.",
        "Double the speed, four times the stopping distance.",
        "Following distance: 1 second for every 10 feet of length, plus 1 second over 40 miles per hour.",
        "40-foot truck: 4 seconds slow, 5 seconds fast.",
        "Wet road: slow down by one third.",
        "Packed snow: slow down by half or more.",
        "Hydroplaning can start at 30 miles per hour.",
        "Low beams light about 250 feet ahead."
      ],
      cards: [
        { q: "What are the three parts of stopping distance?", a: "Perception distance, reaction distance, and braking distance." },
        { q: "About how far does a truck need to stop at 55 miles per hour?", a: "About 419 feet, longer than a football field." },
        { q: "If you double your speed, what happens to stopping distance?", a: "It goes up about four times." },
        { q: "Following distance rule below 40 miles per hour?", a: "1 second for every 10 feet of vehicle length." },
        { q: "Following distance for a 40-foot truck above 40 miles per hour?", a: "5 seconds." },
        { q: "How much should you slow down on a wet road?", a: "By about one third." },
        { q: "How much should you slow down on packed snow?", a: "By half or more." },
        { q: "Lowest speed where hydroplaning can happen?", a: "About 30 miles per hour." },
        { q: "What should you do about a tailgater?", a: "Increase your space ahead and avoid sudden changes. Do not speed up." },
        { q: "Do empty or loaded trucks take longer to stop?", a: "Empty trucks usually take longer, because the tires have less grip." }
      ],
      quiz: [
        { q: "What is the right following distance for a 40-foot truck going under 40 miles per hour?", choices: ["2 seconds", "4 seconds", "6 seconds", "8 seconds"], answer: 1, why: "1 second for every 10 feet of length: 40 feet means 4 seconds." },
        { q: "The same 40-foot truck is now going over 40 miles per hour. What following distance should you keep?", choices: ["3 seconds", "4 seconds", "5 seconds", "10 seconds"], answer: 2, why: "Above 40 miles per hour, add 1 second: 4 plus 1 is 5." },
        { q: "If you double your speed, your stopping distance becomes about:", choices: ["The same", "Twice as long", "Four times as long", "Ten times as long"], answer: 2, why: "Doubling speed makes stopping distance about four times longer." },
        { q: "At 55 miles per hour on dry pavement, about how far does a truck need to stop?", choices: ["About 100 feet", "About 200 feet", "About 419 feet", "About 1,000 feet"], answer: 2, why: "About 419 feet, longer than a football field." },
        { q: "On a wet road, you should reduce your speed by about:", choices: ["One tenth", "One quarter", "One third", "Three quarters"], answer: 2, why: "Slow down about one third, for example from 55 to about 35." },
        { q: "On packed snow, you should reduce your speed by:", choices: ["One tenth", "One quarter", "Half or more", "Nothing if you have chains"], answer: 2, why: "Packed snow calls for cutting your speed by half or more." },
        { q: "Compared to a loaded truck, an empty truck usually needs:", choices: ["Less distance to stop", "The same distance to stop", "More distance to stop", "No brakes on the trailer"], answer: 2, why: "Empty trucks have less traction, so they can take longer to stop." },
        { q: "Someone is tailgating you. What should you do?", choices: ["Speed up", "Brake hard to warn them", "Increase the space in front of you and avoid sudden moves", "Flash your lights at them"], answer: 2, why: "More space ahead lets you slow gradually, so the tailgater is less likely to hit you." },
        { q: "You should drive at a speed that lets you stop within:", choices: ["100 feet", "The distance you can see ahead", "The posted speed limit", "The length of your truck"], answer: 1, why: "If you can't stop within the distance you can see, you are going too fast." },
        { q: "Hydroplaning can happen at speeds as low as:", choices: ["10 miles per hour", "30 miles per hour", "55 miles per hour", "70 miles per hour"], answer: 1, why: "With enough water on the road, hydroplaning can start at about 30 miles per hour." },
        { q: "What part of the road usually freezes first?", choices: ["Uphill grades", "Bridges", "Shaded shoulders only", "Toll plazas"], answer: 1, why: "Bridges freeze before the rest of the road." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 5,
      title: "Hazards, Weather, Mountains, and Railroad Crossings",
      test: "General Knowledge",
      summary: "Spotting hazards early, staying alert, night and bad weather driving, mountain braking, and railroad crossings.",
      sections: [
        {
          h: "Seeing hazards early",
          text: "A hazard is anything that could cause trouble. Watch for work zones, drop-offs at the edge of the road, objects in the road, and people who may do something unexpected. That includes drivers whose view is blocked, distracted or confused drivers, slow drivers, people in a hurry, impaired drivers, children, and pedestrians. Always have an escape route in mind."
        },
        {
          h: "Staying alert",
          list: [
            "Get enough sleep before a trip, usually 7 to 8 hours.",
            "If you feel sleepy, pull off and rest. Sleep is the only real cure for being tired. Coffee only helps for a short time.",
            "Do not text or hold a phone while driving.",
            "Do not get into it with aggressive drivers. Give them space."
          ]
        },
        {
          h: "Night driving",
          list: [
            "Use high beams when it is safe and legal.",
            "Dim your high beams within 500 feet of an oncoming vehicle, and when following another vehicle within 500 feet.",
            "Do not look straight at oncoming headlights. Look slightly to the right side of the lane."
          ]
        },
        {
          h: "Fog, winter, and hot weather",
          list: [
            "Fog: the best choice is to pull off at a rest area or truck stop until it clears. If you must drive, slow down and use low beams.",
            "Winter: check the coolant, defroster, wipers, tires, and chains before you go. Drive slowly and smoothly.",
            "Wet brakes: after driving through deep water, ride the brakes lightly to dry them.",
            "Hot weather: tire pressure goes up as tires heat. Do not let air out, or the pressure will be too low when the tires cool. Check tires every 2 hours or 100 miles."
          ]
        },
        {
          h: "Mountain driving",
          text: "Gravity makes a heavy truck speed up going downhill. Choose a low gear before you start down, and let the engine help slow you. Never coast in neutral.",
          list: [
            "Brake fade happens when brakes get too hot from overuse. Hot brakes stop working well.",
            "The right way to brake downhill: once in the right low gear, apply the brakes hard enough to feel a definite slowdown. When you are 5 miles per hour below your safe speed, release the brakes. When you reach the safe speed again, repeat.",
            "Example: if your safe speed is 40, brake down to 35, release, and brake again when you are back at 40.",
            "Escape ramps are built to stop runaway trucks. Use them if your brakes fail."
          ]
        },
        {
          h: "Railroad crossings",
          list: [
            "Never stop on the tracks. Make sure you can get all the way across before you start.",
            "Do not shift gears while crossing.",
            "Buses and trucks carrying placarded hazardous materials must stop 15 to 50 feet before the nearest rail.",
            "A typical tractor-trailer takes about 14 seconds to clear a single track, and more than 15 seconds for a double track.",
            "Trains cannot stop quickly. Look and listen both ways.",
            "Low trailers can get stuck on raised crossings."
          ]
        }
      ],
      keyNumbers: [
        "Dim high beams within 500 feet.",
        "Hot weather: check tires every 2 hours or 100 miles.",
        "Downhill braking: brake to 5 miles per hour below the safe speed, then release.",
        "Railroad stop for buses and hazmat: 15 to 50 feet from the rail.",
        "A tractor-trailer takes about 14 seconds to clear a single track."
      ],
      cards: [
        { q: "When should you dim your high beams?", a: "Within 500 feet of an oncoming vehicle, or when following within 500 feet." },
        { q: "What is the only real cure for being sleepy?", a: "Sleep." },
        { q: "What is brake fade?", a: "Brakes getting too hot from overuse and losing stopping power." },
        { q: "Downhill braking: safe speed is 40. What do you do?", a: "Brake down to 35, release, and brake again when you reach 40." },
        { q: "When should you choose your gear for a downgrade?", a: "Before you start down the hill." },
        { q: "How far from the tracks must buses and hazmat trucks stop?", a: "15 to 50 feet before the nearest rail." },
        { q: "Can you shift gears while crossing railroad tracks?", a: "No. Never shift while crossing." },
        { q: "How long does a tractor-trailer take to clear a single track?", a: "About 14 seconds." },
        { q: "What should you do about tire pressure on a hot day?", a: "Nothing. Do not let air out. Pressure goes up as tires heat." },
        { q: "Best thing to do in thick fog?", a: "Pull off at a safe place like a rest area until it clears." }
      ],
      quiz: [
        { q: "When must you dim your high beams for an oncoming vehicle?", choices: ["Within 100 feet", "Within 250 feet", "Within 500 feet", "Within 1,000 feet"], answer: 2, why: "Dim within 500 feet of oncoming traffic and when following within 500 feet." },
        { q: "Your safe downhill speed is 40 miles per hour. Using the right braking method, you brake until you reach:", choices: ["20 miles per hour", "30 miles per hour", "35 miles per hour", "39 miles per hour"], answer: 2, why: "Brake to 5 miles per hour below the safe speed, release, and repeat." },
        { q: "When should you choose a low gear for a steep downgrade?", choices: ["Before starting down the hill", "Halfway down", "When the brakes start to smell", "At the bottom"], answer: 0, why: "Pick the gear before you start down. Shifting down mid-hill can be very hard." },
        { q: "What causes brake fade?", choices: ["Cold weather", "Using the brakes too much so they overheat", "Too little weight on the trailer", "Driving in low gear"], answer: 1, why: "Overused brakes get too hot and lose stopping power." },
        { q: "Buses and trucks with placarded hazardous materials must stop how far from a railroad crossing?", choices: ["5 to 10 feet", "15 to 50 feet", "75 to 100 feet", "200 feet"], answer: 1, why: "They stop 15 to 50 feet before the nearest rail." },
        { q: "What should you NOT do while crossing railroad tracks?", choices: ["Look both ways", "Shift gears", "Keep moving", "Listen for a train"], answer: 1, why: "Shifting while on the tracks could leave you stalled there." },
        { q: "About how long does a typical tractor-trailer need to clear a single railroad track?", choices: ["5 seconds", "10 seconds", "14 seconds", "30 seconds"], answer: 2, why: "About 14 seconds for a single track, more than 15 for a double track." },
        { q: "On a hot day, your tire pressure reads high. What should you do?", choices: ["Let air out until normal", "Do not let air out", "Replace the tires", "Spray them with water"], answer: 1, why: "Pressure rises as tires heat. Letting air out leaves them underinflated when they cool." },
        { q: "You feel very sleepy while driving. What is the best thing to do?", choices: ["Drink coffee and keep going", "Open the window and turn up the radio", "Pull off safely and sleep", "Drive faster to get there sooner"], answer: 2, why: "Sleep is the only real cure for being tired." },
        { q: "Driving in thick fog, the best choice is to:", choices: ["Use high beams", "Pull off at a safe place until it clears", "Speed up to get through it", "Stop in the travel lane"], answer: 1, why: "Pulling off at a rest area or truck stop is safest. If you must drive, slow down and use low beams." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 6,
      title: "Emergencies, Fires, Alcohol, and Hazmat Basics",
      test: "General Knowledge",
      summary: "Avoiding crashes, skids, brake and tire failure, crash scenes, fires, alcohol and drugs, and the hazmat rules every driver must know.",
      sections: [
        {
          h: "Steering to avoid a crash",
          list: [
            "You can almost always turn to miss an obstacle faster than you can stop.",
            "Usually, steer to the right, toward the shoulder, to avoid oncoming traffic.",
            "Do not brake while you are turning. Turn only as much as needed, then countersteer to get back.",
            "If you leave the road, avoid braking until you slow to about 20 miles per hour, and keep one set of wheels on the pavement if you can."
          ]
        },
        {
          h: "Stopping quickly",
          list: [
            "Controlled braking: press the brakes as hard as you can without locking the wheels.",
            "Stab braking: only for trucks without anti-lock brakes. Press the brakes all the way, release when the wheels lock, and press again when they start rolling.",
            "With anti-lock brakes, called ABS, brake normally. ABS helps you keep steering control but does not make you stop faster. If the ABS light stays on after starting, the ABS is not working, but your regular brakes still work."
          ]
        },
        {
          h: "Brake failure and blowouts",
          list: [
            "Brake failure: downshift to a lower gear, pump hydraulic brakes, use the parking brake carefully, and look for an escape ramp or an uphill road.",
            "Tire blowout: hold the steering wheel firmly, stay off the brake until the truck slows, then brake gently and pull off the road."
          ]
        },
        {
          h: "Skids",
          text: "Most serious skids come from driving too fast for the conditions. Other causes are overbraking, oversteering, and accelerating too hard.",
          list: [
            "Drive-wheel skid: take your foot off the gas and push in the clutch so the wheels can roll freely.",
            "To recover from a skid: stop braking, steer quickly where you want to go, then countersteer as the truck straightens out."
          ]
        },
        {
          h: "At a crash scene",
          text: "First, protect the area so no one else crashes into it. Turn on your flashers and set out triangles. Then call 911, and then help the injured. Do not move injured people unless they are in danger, such as from fire."
        },
        {
          h: "Fires",
          list: [
            "Common causes: crashes, underinflated tires or duals that touch, electrical shorts, fuel leaks, and cargo.",
            "A B:C fire extinguisher is for electrical fires and burning liquids like fuel.",
            "Never use water on electrical or fuel fires. Water spreads a gasoline fire.",
            "Stay upwind. Aim the extinguisher at the base of the fire, not the flames.",
            "For a cargo fire in a trailer, keep the doors closed. Opening them feeds the fire air.",
            "Pull off in an open area away from buildings and other vehicles, and call for help."
          ]
        },
        {
          h: "Alcohol and drugs",
          list: [
            "A 12-ounce beer, a 5-ounce glass of wine, and a shot of liquor all have about the same amount of alcohol.",
            "Only time sobers you up. Coffee and cold showers do not.",
            "By driving a commercial vehicle you agree to be tested for alcohol. This is called implied consent.",
            "Only take legal drugs that a doctor says are safe while driving."
          ]
        },
        {
          h: "Hazardous materials basics for every driver",
          list: [
            "You need the H endorsement to haul hazardous materials that require placards.",
            "Placards are diamond-shaped signs on all four sides of the vehicle.",
            "Shipping papers must be within your reach with your seat belt on. When you leave the cab, put them on the driver's seat or in the driver's door pocket.",
            "The shipper packages and labels the material. The driver makes sure the truck is placarded correctly."
          ]
        }
      ],
      keyNumbers: [
        "Leaving the road: don't brake until about 20 miles per hour.",
        "12 ounces of beer equals 5 ounces of wine equals 1 shot of liquor.",
        "B:C extinguisher: electrical and burning liquids.",
        "Placards go on all 4 sides."
      ],
      cards: [
        { q: "Is it usually faster to stop or to steer around an obstacle?", a: "Steer around it. You can almost always turn faster than you can stop." },
        { q: "Which way should you usually steer to avoid a crash?", a: "To the right, toward the shoulder." },
        { q: "What is stab braking, and when do you use it?", a: "Brakes all the way on, release when wheels lock, reapply when they roll. Only without ABS." },
        { q: "What should you do in a tire blowout?", a: "Hold the wheel firmly and stay off the brake until the truck slows." },
        { q: "What causes most serious skids?", a: "Driving too fast for the conditions." },
        { q: "How do you stop a drive-wheel skid?", a: "Take your foot off the gas and push in the clutch." },
        { q: "First thing to do at a crash scene?", a: "Protect the area so no one else crashes." },
        { q: "What is a B:C fire extinguisher for?", a: "Electrical fires and burning liquids." },
        { q: "Where do you aim a fire extinguisher?", a: "At the base of the fire, standing upwind." },
        { q: "Where do hazmat shipping papers go while driving?", a: "Within reach with your seat belt on." },
        { q: "What sobers you up?", a: "Only time." }
      ],
      quiz: [
        { q: "A car suddenly stops in front of you. Which is usually faster?", choices: ["Stopping", "Steering around it", "Honking", "They take the same time"], answer: 1, why: "You can almost always turn to miss an obstacle faster than you can stop." },
        { q: "If you must leave the road to avoid a crash, you should:", choices: ["Brake hard right away", "Avoid braking until you slow to about 20 miles per hour", "Speed up", "Turn sharply back onto the road at once"], answer: 1, why: "Hard braking on the shoulder can cause a skid. Slow down first." },
        { q: "Stab braking should only be used on vehicles:", choices: ["With anti-lock brakes", "Without anti-lock brakes", "With trailers", "Going uphill"], answer: 1, why: "With ABS, you brake normally. Stab braking is for trucks without ABS." },
        { q: "What should you do first if a tire blows out?", choices: ["Brake hard", "Hold the steering wheel firmly and stay off the brake", "Turn sharply to the shoulder", "Shift to neutral"], answer: 1, why: "Braking during a blowout can cause loss of control. Slow down first, then brake gently." },
        { q: "What causes most serious skids?", choices: ["Bad tires", "Driving too fast for conditions", "Heavy cargo", "Using the horn"], answer: 1, why: "Speed is the main cause. Overbraking, oversteering, and hard acceleration also cause skids." },
        { q: "To stop a drive-wheel skid, you should:", choices: ["Brake harder", "Take your foot off the gas and push in the clutch", "Steer the opposite way", "Speed up"], answer: 1, why: "This lets the drive wheels roll freely again." },
        { q: "A B:C fire extinguisher is used on:", choices: ["Wood, paper, and cloth only", "Electrical fires and burning liquids", "Metal fires only", "Nothing; it is for tires only"], answer: 1, why: "B is for burning liquids and C is for electrical fires." },
        { q: "When using a fire extinguisher, aim at:", choices: ["The top of the flames", "The base of the fire", "The smoke", "The ground in front of you"], answer: 1, why: "Aim at the base, and stand upwind." },
        { q: "What is the first thing to do at a crash scene?", choices: ["Move the injured", "Protect the area so no one else crashes", "Take photos", "Clear the vehicles from the road"], answer: 1, why: "Prevent another crash first, then call for help, then care for the injured." },
        { q: "Hazardous materials shipping papers should be kept:", choices: ["In the trailer", "In the glove box", "Within reach with your seat belt on", "At the company office"], answer: 2, why: "They must be within reach while driving, and on the seat or in the door pocket when you leave the cab." },
        { q: "What is the only thing that sobers a person up?", choices: ["Coffee", "A cold shower", "Fresh air", "Time"], answer: 3, why: "Only time removes alcohol from the body." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 7,
      title: "Transporting Cargo",
      test: "General Knowledge",
      summary: "Weight limits, balancing the load, securing cargo, and special kinds of loads.",
      sections: [
        {
          h: "Your responsibility",
          text: "Even if someone else loaded the truck, you are responsible for inspecting the cargo, knowing if the truck is overloaded, making sure the cargo is secured, and making sure it does not block your view or your access to emergency equipment."
        },
        {
          h: "When to check cargo",
          text: "Check within the first 50 miles. After that, check every 3 hours or 150 miles, whichever comes first, and after every break."
        },
        {
          h: "Weight terms",
          list: [
            "Gross vehicle weight: the total weight of one vehicle plus its load.",
            "Gross combination weight: the total weight of a power unit plus trailers plus the load.",
            "Weight rating: the maximum weight the manufacturer says the vehicle can carry.",
            "Axle weight: the weight carried by one axle.",
            "Overloading hurts steering, braking, and speed control, and can damage roads and bridges."
          ]
        },
        {
          h: "Balance and center of gravity",
          list: [
            "A high center of gravity, meaning the load is stacked high, makes the truck more likely to roll over.",
            "Keep the heaviest cargo low.",
            "Too much weight on the steering axle makes steering hard.",
            "Too little weight on the steering axle makes the front tires lose grip, so steering becomes unsafe.",
            "Too little weight on the drive axles makes the drive wheels lose traction."
          ]
        },
        {
          h: "Securing cargo",
          list: [
            "Blocking and bracing keep cargo from sliding.",
            "Use at least one tiedown for every 10 feet of cargo, and never fewer than two, no matter how small the load.",
            "The tiedowns together must be strong enough to hold at least half the weight of the cargo.",
            "A header board, sometimes called a headache rack, protects you from cargo sliding forward in a crash or hard stop.",
            "Cover open loads with a tarp to protect people and the cargo."
          ]
        },
        {
          h: "Sealed loads and special loads",
          list: [
            "Sealed loads: you can't inspect inside, but you still must make sure you are not over the weight limits.",
            "Dry bulk tanks have a high center of gravity and the load can shift. Take curves and sharp turns slowly.",
            "Hanging meat is unstable and has a high center of gravity. Take curves slowly.",
            "Livestock shifts around. Use false bulkheads in a partly full trailer to keep the animals bunched together.",
            "Oversized loads need special permits, and sometimes escort vehicles and special routes."
          ]
        }
      ],
      keyNumbers: [
        "Check cargo within 50 miles, then every 3 hours or 150 miles.",
        "One tiedown for every 10 feet of cargo, never fewer than 2.",
        "Tiedowns must hold at least half the cargo weight."
      ],
      cards: [
        { q: "Who is responsible for checking the cargo?", a: "The driver, even if someone else loaded it." },
        { q: "How many tiedowns do you need?", a: "At least one for every 10 feet of cargo, and never fewer than two." },
        { q: "How strong must the tiedowns be all together?", a: "Strong enough to hold at least half the weight of the cargo." },
        { q: "What does a header board do?", a: "Protects the driver from cargo sliding forward." },
        { q: "What does a high center of gravity cause?", a: "A greater chance of rolling over." },
        { q: "What happens with too little weight on the steering axle?", a: "The front tires lose grip, making steering unsafe." },
        { q: "With a sealed load, what are you still responsible for?", a: "Not going over the weight limits." },
        { q: "How do you drive with hanging meat?", a: "Slowly around curves, because it is unstable with a high center of gravity." }
      ],
      quiz: [
        { q: "When should you first check your cargo after starting a trip?", choices: ["Within the first 10 miles", "Within the first 50 miles", "After 3 hours", "At the end of the day"], answer: 1, why: "Check within the first 50 miles, then every 3 hours or 150 miles." },
        { q: "How many tiedowns do you need for cargo?", choices: ["One for every 5 feet", "One for every 10 feet, and at least two", "One for every 20 feet", "Only one, if it is tight"], answer: 1, why: "One tiedown per 10 feet of cargo, never fewer than two." },
        { q: "All the tiedowns together must be strong enough to hold at least:", choices: ["A quarter of the cargo weight", "Half of the cargo weight", "Twice the cargo weight", "1,000 pounds"], answer: 1, why: "The combined working load limit must be at least half the cargo weight." },
        { q: "What does a header board protect you from?", choices: ["Rain", "Cargo sliding forward", "Low bridges", "Tire blowouts"], answer: 1, why: "It keeps cargo from crushing the cab in a crash or hard stop." },
        { q: "A load with a high center of gravity is more likely to:", choices: ["Roll over", "Get better gas mileage", "Stop faster", "Skid less"], answer: 0, why: "Stacking weight high makes a truck more likely to tip." },
        { q: "Too little weight on the steering axle can cause:", choices: ["Hard steering", "Poor steering control because the front tires lose grip", "Better braking", "Faster acceleration"], answer: 1, why: "Light front tires don't grip well. Too much weight makes steering hard instead." },
        { q: "You are hauling a sealed load you cannot inspect. What are you still responsible for?", choices: ["Nothing", "Making sure you are not over the weight limits", "Breaking the seal to check it", "Counting the boxes"], answer: 1, why: "You can't see inside, but you are still responsible for legal weight." },
        { q: "Who is responsible for making sure cargo is secured?", choices: ["The shipper only", "The loading dock workers", "The driver", "The receiver"], answer: 2, why: "The driver is responsible even if someone else loaded it." },
        { q: "Hanging meat loads are dangerous because:", choices: ["They are too light", "They are unstable with a high center of gravity", "They must be kept warm", "They are always oversized"], answer: 1, why: "Hanging meat can swing and raise rollover risk, so take curves slowly." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 8,
      title: "Air Brakes",
      test: "Air Brakes",
      summary: "How air brakes work, the parts and their numbers, the seven-step air brake check, and using them safely.",
      sections: [
        {
          h: "Three brake systems in one",
          text: "Air brakes use compressed air to work the brakes. An air brake truck really has three braking systems: the service brakes you use with the pedal, the parking brakes, and the emergency brakes, which use parts of the other two if the air system fails."
        },
        {
          h: "The parts and their numbers",
          list: [
            "Air compressor: pumps air into the tanks. It is driven by the engine, by gears or a belt.",
            "Governor: controls the compressor. It stops pumping, called cut-out, at about 125 P.S.I., and starts again, called cut-in, at about 100 P.S.I.",
            "Air tanks: hold the compressed air.",
            "Tank drains: water and oil collect in the tanks and can freeze in cold weather, causing brake failure. Drain the tanks every day.",
            "Safety valve: opens to let air out if tank pressure reaches 150 P.S.I.",
            "Supply pressure gauge: shows how much air is in the tanks.",
            "Low air pressure warning: a light or buzzer that must come on before pressure drops below 60 P.S.I.",
            "Spring brakes: powerful springs held back by air. If air pressure drops to between 20 and 45 P.S.I., the springs put the brakes on.",
            "Parking brake control: a yellow, diamond-shaped knob. Push it in to release the parking brakes, pull it out to set them.",
            "Slack adjusters: connect the push rod to the brakes. If one moves more than about 1 inch when you pull it by hand, the brakes need adjusting."
          ]
        },
        {
          h: "Dual air systems",
          text: "Most trucks have two air systems, primary and secondary, each with its own tanks and gauge. If one fails, the other still gives you some braking."
        },
        {
          h: "The seven-step air brake check",
          text: "This is part of step 7 of the vehicle inspection. Know it well.",
          list: [
            "1. Test the low pressure warning. With the engine off and the key on, step on and off the brake to lower the air pressure. The warning must come on before 60 P.S.I.",
            "2. Check that the spring brakes come on. Keep fanning the brake. The parking brake knob should pop out between 20 and 45 P.S.I.",
            "3. Check the air pressure build-up rate. With the engine at operating speed, pressure should build from 85 to 100 P.S.I. within 45 seconds on a dual air system.",
            "4. Test the air leakage rate. With a full tank, engine off, and brakes released, the pressure should drop less than 2 P.S.I. in one minute for a single vehicle, or 3 P.S.I. for a combination. Then hold the brake pedal down with 90 P.S.I. or more. After the first drop, the loss should be no more than 3 P.S.I. per minute for a single vehicle, or 4 P.S.I. for a combination.",
            "5. Check the governor. The compressor should start pumping at about 100 P.S.I. and stop at about 125 P.S.I.",
            "6. Test the parking brake. Set it and gently try to pull forward in a low gear. The truck should not move.",
            "7. Test the service brakes. At about 5 miles per hour, press the brake pedal firmly. The truck should stop without pulling to one side."
          ]
        },
        {
          h: "Using air brakes",
          list: [
            "Air brakes have brake lag, a short delay while air flows to the brakes. At 55 miles per hour, a truck with air brakes needs about 450 feet to stop.",
            "Going downhill, use a low gear and the snub braking method: brake to 5 miles per hour below the safe speed, release, and repeat.",
            "If the low air warning comes on while driving, stop and park safely as soon as possible, before the spring brakes lock on by themselves.",
            "Do not press the brake pedal when the spring brakes are on. The two forces together can damage the brakes.",
            "Do not set the parking brakes if the brakes are very hot or if they are wet in freezing weather. Use wheel chocks instead."
          ]
        }
      ],
      keyNumbers: [
        "Governor cut-out about 125 P.S.I., cut-in about 100 P.S.I.",
        "Safety valve opens at 150 P.S.I.",
        "Low air warning comes on before 60 P.S.I.",
        "Spring brakes come on between 20 and 45 P.S.I.",
        "Build-up: 85 to 100 P.S.I. within 45 seconds.",
        "Leakage, brakes released: under 2 P.S.I. a minute single, 3 for a combination.",
        "Leakage, brakes applied: no more than 3 P.S.I. a minute single, 4 for a combination.",
        "Slack adjuster: more than 1 inch of movement needs adjusting.",
        "Stopping at 55 with air brakes: about 450 feet."
      ],
      cards: [
        { q: "What are the three braking systems on an air brake truck?", a: "Service brakes, parking brakes, and emergency brakes." },
        { q: "At what pressure does the governor stop the compressor?", a: "About 125 P.S.I. That is cut-out." },
        { q: "At what pressure does the governor start the compressor?", a: "About 100 P.S.I. That is cut-in." },
        { q: "The low air warning must come on before what pressure?", a: "60 P.S.I." },
        { q: "At what pressure do the spring brakes come on?", a: "Between 20 and 45 P.S.I." },
        { q: "How fast should air pressure build on a dual system?", a: "85 to 100 P.S.I. within 45 seconds." },
        { q: "Leakage limit, brakes released, combination vehicle?", a: "Less than 3 P.S.I. in one minute." },
        { q: "Leakage limit, brakes applied, combination vehicle?", a: "No more than 4 P.S.I. per minute." },
        { q: "What color and shape is the parking brake knob?", a: "Yellow and diamond-shaped." },
        { q: "Why drain the air tanks every day?", a: "Water and oil build up and can freeze, causing brake failure." },
        { q: "At what pressure does the safety valve open?", a: "150 P.S.I." },
        { q: "How much slack adjuster movement means the brakes need adjusting?", a: "More than about 1 inch." }
      ],
      quiz: [
        { q: "The governor makes the compressor stop pumping at about:", choices: ["60 P.S.I.", "100 P.S.I.", "125 P.S.I.", "150 P.S.I."], answer: 2, why: "Cut-out is about 125 P.S.I. Cut-in is about 100 P.S.I." },
        { q: "The low air pressure warning must come on before the pressure drops below:", choices: ["20 P.S.I.", "45 P.S.I.", "60 P.S.I.", "100 P.S.I."], answer: 2, why: "The warning must come on before 60 P.S.I." },
        { q: "The spring brakes should come on automatically when air pressure falls to between:", choices: ["5 and 10 P.S.I.", "20 and 45 P.S.I.", "60 and 80 P.S.I.", "100 and 125 P.S.I."], answer: 1, why: "Springs apply the brakes when pressure drops into the 20 to 45 P.S.I. range." },
        { q: "On a dual air system, pressure should build from 85 to 100 P.S.I. within:", choices: ["15 seconds", "45 seconds", "2 minutes", "5 minutes"], answer: 1, why: "85 to 100 P.S.I. within 45 seconds." },
        { q: "With the engine off and brakes released, a combination vehicle should lose less than how much air in one minute?", choices: ["1 P.S.I.", "3 P.S.I.", "5 P.S.I.", "10 P.S.I."], answer: 1, why: "Less than 3 P.S.I. per minute for a combination, less than 2 for a single vehicle." },
        { q: "With the brakes applied, a combination vehicle should lose no more than how much air per minute after the first drop?", choices: ["2 P.S.I.", "3 P.S.I.", "4 P.S.I.", "8 P.S.I."], answer: 2, why: "4 P.S.I. per minute for a combination, 3 for a single vehicle." },
        { q: "Why should you drain the air tanks every day?", choices: ["To check the air pressure", "Water and oil collect and can freeze, causing brake failure", "To cool the brakes", "It is only needed once a year"], answer: 1, why: "Water and compressor oil build up in the tanks and can freeze in cold weather." },
        { q: "The parking brake control knob is:", choices: ["Red and eight-sided", "Yellow and diamond-shaped", "Blue and round", "Green and square"], answer: 1, why: "Yellow diamond is the parking brake. The red eight-sided knob is the trailer air supply." },
        { q: "When you pull a slack adjuster by hand, the brakes need adjusting if it moves more than about:", choices: ["A quarter inch", "1 inch", "3 inches", "6 inches"], answer: 1, why: "More than about 1 inch of movement means adjustment is needed." },
        { q: "The low air warning comes on while you are driving. What should you do?", choices: ["Keep driving to the next stop", "Stop and park safely as soon as possible", "Pump the brakes to build pressure", "Speed up to reach the shop"], answer: 1, why: "If pressure keeps dropping, the spring brakes may lock on suddenly." },
        { q: "At 55 miles per hour, a truck with air brakes needs about how far to stop?", choices: ["About 200 feet", "About 300 feet", "About 450 feet", "About 800 feet"], answer: 2, why: "Brake lag adds distance. About 450 feet total." },
        { q: "When should you NOT use the parking brakes?", choices: ["On level ground", "When the brakes are very hot, or wet in freezing weather", "At a truck stop", "When the truck is empty"], answer: 1, why: "Hot brakes can be damaged and wet brakes can freeze. Use wheel chocks instead." },
        { q: "The safety valve on the air tank opens at about:", choices: ["60 P.S.I.", "100 P.S.I.", "125 P.S.I.", "150 P.S.I."], answer: 3, why: "The safety valve releases air at 150 P.S.I. to protect the tanks." }
      ]
    },

    // ---------------------------------------------------------------
    {
      id: 9,
      title: "Combination Vehicles",
      test: "Combination Vehicles",
      summary: "Rollovers, crack-the-whip, trailer air brakes, coupling and uncoupling, and the extra inspection items for Class A.",
      sections: [
        {
          h: "Rollovers and crack-the-whip",
          list: [
            "Keep cargo as low as possible and go slowly around turns, on-ramps, and off-ramps.",
            "A fully loaded rig is about 10 times more likely to roll over in a crash than an empty one.",
            "Steer gently. A quick lane change can start a crack-the-whip effect, called rearward amplification, where the rear trailer swings much harder than the tractor.",
            "The rear trailer of a triple is most likely to roll over, then doubles, then a single tractor-trailer."
          ]
        },
        {
          h: "Jackknifes and off-tracking",
          list: [
            "Trailer jackknife: the trailer wheels lock and the trailer swings out. Release the brakes to get traction back. Do not use the trailer hand brake to straighten the rig.",
            "Off-tracking: the rear wheels follow a tighter path than the front wheels. The longer the rig, the more off-tracking.",
            "Backing a trailer: turn the steering wheel the opposite way from where you want the trailer to go. Once the trailer starts turning, turn the wheel to follow it."
          ]
        },
        {
          h: "Trailer air brakes",
          list: [
            "Trailer hand valve, also called the trolley valve: works the trailer brakes alone. Use it only to test the trailer brakes. Never use it for parking.",
            "Tractor protection valve: keeps air in the tractor if the trailer breaks away or has a bad leak. It closes when pressure drops to between 20 and 45 P.S.I.",
            "Trailer air supply control: the red, eight-sided knob. Push it in to send air to the trailer. Pull it out to cut off air and put on the trailer emergency brakes.",
            "Two air lines connect tractor and trailer. The service line is usually blue and carries the air that works the brakes. The emergency line, also called the supply line, is usually red and fills the trailer tanks and controls the emergency brakes.",
            "Glad hands are the couplers that connect the air lines. Use dummy couplers to keep dirt out when not connected.",
            "If the emergency line breaks or the trailer comes loose, the trailer emergency brakes come on.",
            "On doubles and triples, the shut-off valves at the back of the last trailer must be closed. The others must be open."
          ]
        },
        {
          h: "Coupling a tractor to a trailer",
          list: [
            "Check the fifth wheel: no damage, greased, jaws open, and the release handle in the open position. Chock the trailer wheels.",
            "Make sure the trailer is at the right height: slightly lower than the center of the fifth wheel, so it rises a little as you back under it.",
            "Line up the tractor directly in front of the trailer. Never back under at an angle.",
            "Back slowly until the fifth wheel just touches the trailer. Set the parking brake.",
            "Connect the air lines, push in the red knob to supply air, then pull it out to lock the trailer brakes.",
            "Back under slowly in the lowest reverse gear until it locks.",
            "Tug test: pull gently forward in low gear with the trailer brakes on to make sure it is locked.",
            "Get out and look with a flashlight: no space between the upper and lower fifth wheel, the locking jaws closed around the shank of the kingpin, not the head, the locking lever in the lock position, and the safety latch in place.",
            "Connect the electrical cord, raise the landing gear all the way, secure the crank handle, and remove the wheel chocks."
          ]
        },
        {
          h: "Uncoupling",
          list: [
            "Park on firm, level ground, in a straight line.",
            "Chock the trailer wheels and lower the landing gear until it firmly touches the ground.",
            "Disconnect the air lines and electrical cord, and unlock the fifth wheel.",
            "Pull the tractor partly out and stop with the frame still under the trailer, in case the landing gear gives way.",
            "Check that the landing gear is holding, then pull the tractor clear."
          ]
        },
        {
          h: "Extra air brake checks for combinations",
          list: [
            "Tractor protection valve: with the system charged and engine off, step on and off the brake. Between 20 and 45 P.S.I. the red knob should pop out.",
            "Trailer emergency brakes: pull out the red knob and gently pull forward. The trailer should not move.",
            "Trailer service brakes: move forward slowly and apply the trailer brakes with the hand valve. You should feel them grab."
          ]
        }
      ],
      keyNumbers: [
        "A loaded rig is 10 times more likely to roll over than an empty one.",
        "Tractor protection valve closes between 20 and 45 P.S.I.",
        "Red eight-sided knob: trailer air supply.",
        "Blue line: service. Red line: emergency.",
        "Trailer height: slightly lower than the center of the fifth wheel.",
        "Jaws close around the shank of the kingpin, not the head."
      ],
      cards: [
        { q: "Which trailer is most likely to roll over from crack-the-whip?", a: "The rear trailer of a triple." },
        { q: "How much more likely is a loaded rig to roll over than an empty one?", a: "About 10 times." },
        { q: "What should you do if the trailer starts to jackknife?", a: "Release the brakes to get traction back." },
        { q: "What is the trailer hand valve for?", a: "Testing the trailer brakes only. Never for parking." },
        { q: "What does the red eight-sided knob do?", a: "Controls trailer air supply. Push in to supply air, pull out for trailer emergency brakes." },
        { q: "What color is the service line? The emergency line?", a: "Service is blue. Emergency is red." },
        { q: "When does the tractor protection valve close?", a: "Between 20 and 45 P.S.I." },
        { q: "How high should the trailer be when coupling?", a: "Slightly lower than the center of the fifth wheel." },
        { q: "What must the locking jaws close around?", a: "The shank of the kingpin, not the head." },
        { q: "When uncoupling, where do you stop the tractor before pulling clear?", a: "With its frame still under the trailer, in case the landing gear collapses." },
        { q: "How do you back a trailer to the right?", a: "Turn the steering wheel the opposite way, to the left." },
        { q: "On doubles, which shut-off valves are closed?", a: "Only the ones at the back of the last trailer." }
      ],
      quiz: [
        { q: "Which rig has the greatest crack-the-whip effect?", choices: ["A straight truck", "A tractor with one semitrailer", "Doubles", "Triples"], answer: 3, why: "The rear trailer of a triple swings the hardest and is most likely to roll." },
        { q: "A fully loaded rig is about how many times more likely to roll over in a crash than an empty one?", choices: ["2 times", "5 times", "10 times", "100 times"], answer: 2, why: "About 10 times more likely, so keep cargo low and take turns slowly." },
        { q: "The trailer hand valve should NEVER be used:", choices: ["To test trailer brakes", "For parking", "On a dry road", "With doubles"], answer: 1, why: "Air can leak away, releasing the brakes. Use the parking brakes to park." },
        { q: "The red, eight-sided knob controls:", choices: ["The tractor parking brake", "The trailer air supply", "The fifth wheel lock", "The windshield wipers"], answer: 1, why: "Push it in to supply trailer air, pull it out to apply the trailer emergency brakes." },
        { q: "The service air line is usually what color?", choices: ["Red", "Blue", "Yellow", "Green"], answer: 1, why: "Service is blue. Emergency, or supply, is red." },
        { q: "The tractor protection valve closes when air pressure drops to between:", choices: ["5 and 10 P.S.I.", "20 and 45 P.S.I.", "60 and 80 P.S.I.", "100 and 125 P.S.I."], answer: 1, why: "It closes in the 20 to 45 P.S.I. range to protect the tractor's air." },
        { q: "When coupling, the trailer should be:", choices: ["Much higher than the fifth wheel", "Slightly lower than the center of the fifth wheel", "Exactly level with the frame rails", "Resting on the ground"], answer: 1, why: "It should rise slightly when the tractor backs under it." },
        { q: "After coupling, the locking jaws should be closed around:", choices: ["The head of the kingpin", "The shank of the kingpin", "The landing gear", "The glad hands"], answer: 1, why: "Around the shank, not the head. And there should be no space between the upper and lower fifth wheel." },
        { q: "The trailer is starting to jackknife because its wheels locked. What should you do?", choices: ["Brake harder", "Release the brakes", "Use the trailer hand valve", "Turn sharply"], answer: 1, why: "Releasing the brakes lets the trailer wheels grip again." },
        { q: "To back the trailer to the right, you turn the steering wheel:", choices: ["To the right", "To the left", "Back and forth quickly", "It does not matter"], answer: 1, why: "When backing a trailer, turn the wheel the opposite direction." },
        { q: "When uncoupling, you pull the tractor partly out and stop:", choices: ["Right away with the frame still under the trailer", "Only after fully clearing the trailer", "Halfway down the lot", "With the glad hands still connected"], answer: 0, why: "If the landing gear collapses, the trailer falls on the frame, not the ground." },
        { q: "On a set of doubles, the shut-off valves at the back of the last trailer should be:", choices: ["Open", "Closed", "Removed", "Half open"], answer: 1, why: "The last trailer's valves are closed. All the others must be open." }
      ]
    }
  ],

  // -------------------------------------------------------------------
  // THE 6-WEEK PLAN (30 minutes a day, Monday to Saturday, Sunday off)
  // Day types: learn, practice, review, catchup, test, weak, final
  // -------------------------------------------------------------------
  plan: [
    { title: "Week 1: CDL basics and inspection", goal: "Know the license rules and the 7-step inspection.",
      days: [["learn", 1], ["practice", 1], ["learn", 2], ["practice", 2], ["review", [1, 2]], ["catchup", [1, 2]]] },
    { title: "Week 2: Driving skills, speed, and space", goal: "Know following distance, stopping distance, and triangle placement.",
      days: [["learn", 3], ["practice", 3], ["learn", 4], ["practice", 4], ["review", [1, 2, 3, 4]], ["catchup", [3, 4]]] },
    { title: "Week 3: Hazards and emergencies", goal: "Know mountain braking, railroad crossings, skids, and fires.",
      days: [["learn", 5], ["practice", 5], ["learn", 6], ["practice", 6], ["review", [1, 2, 3, 4, 5, 6]], ["catchup", [5, 6]]] },
    { title: "Week 4: Cargo and the General Knowledge test", goal: "Score 80 percent or better on the General Knowledge practice test twice.",
      days: [["learn", 7], ["practice", 7], ["test", [1, 2, 3, 4, 5, 6, 7]], ["weak", [1, 2, 3, 4, 5, 6, 7]], ["test", [1, 2, 3, 4, 5, 6, 7]], ["catchup", [7]]] },
    { title: "Week 5: Air brakes", goal: "Know every air brake number by heart.",
      days: [["learn", 8], ["learn2", 8], ["practice", 8], ["test", [8]], ["review", [1, 2, 3, 4, 5, 6, 7, 8]], ["catchup", [8]]] },
    { title: "Week 6: Combination vehicles and final review", goal: "Pass all three practice tests and feel ready for the DMV.",
      days: [["learn", 9], ["practice", 9], ["test", [9]], ["weak", [1, 2, 3, 4, 5, 6, 7, 8, 9]], ["final", [1, 2, 3, 4, 5, 6, 7, 8, 9]], ["catchup", [8, 9]]] }
  ]
};
