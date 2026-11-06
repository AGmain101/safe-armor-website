/* =========================================================================
   SAFE ARMOR — PPE CATALOGUE
   -------------------------------------------------------------------------
   Categories and items shown on the PPE Range page, the Protection Map and
   the home page. Items follow the Company Profile Information Form and the
   2026 product list.
   Edit names/descriptions, delete items you do not stock,
   or add new ones (give each item a unique id).
   image / focus / zoom choose which part of a photo is shown for a category.
   ========================================================================= */
window.SA_CATALOG = [
  {
    id: "head", no: "01", name: "Head Protection", zone: "Head",
    protects: "Protection against falling objects and head impact.",
    image: "assets/img/photos/ppe-flatlay.webp", focus: "54% 50%", zoom: 2.1,
    art: "assets/img/illustrations/ppe-helmet.svg",
    items: [
      { id: "helmets", name: "Safety Helmets", desc: "Hard hats for construction, industrial and site work." },
      { id: "hats", name: "Hats", desc: "Work hats for outdoor and site work." },
      { id: "bump-caps", name: "Bump Caps", desc: "Lightweight caps against bumps and minor knocks." },
      { id: "standard-helmet", name: "Standard Quality Helmet", desc: "Everyday hard hat for general site work." },
      { id: "panda-std-helmet", name: "Panda Standard Quality Helmet", desc: "Panda hard hat for general site use." },
      { id: "panda-hq-helmet", name: "Panda High Quality Helmet", desc: "Panda's higher-grade hard hat." },
      { id: "vaultex-helmet", name: "Vaultex Helmet", desc: "Vaultex safety helmet." },
      { id: "nile-helmet", name: "Nile Helmet", desc: "Nile safety helmet." },
      { id: "safety-boy-helmet", name: "Safety Boy Helmet", desc: "Safety Boy safety helmet." },
      { id: "kak-swear-helmet", name: "Kak Swear High Quality Helmet", desc: "Kak Swear higher-grade safety helmet." },
      { id: "jsp-helmet", name: "JSP Helmet", desc: "JSP safety helmet." },
      { id: "tyson-helmet", name: "High Quality Tyson Helmet", desc: "Tyson higher-grade safety helmet." },
      { id: "engineering-hat", name: "Engineering Safety Hat", desc: "Cap-style bump hat for light knocks." },
      { id: "climbing-helmet", name: "Climbing Helmet", desc: "Lightweight helmet for climbing and rope work." },
      { id: "hat-neck-cover", name: "Hat Mesh and Neck Cover", desc: "Neck shade that fits on a helmet." },
      { id: "hairnets", name: "Hairnets (packet of 100)", desc: "Disposable hair covers for hygiene areas." },
      { id: "cloth-hair-cover", name: "Cloth Hair Cover", desc: "Reusable fabric hair cover." },
      { id: "hs2-helmet", name: "HS2 Helmet", desc: "Full-face riding helmet." },
      { id: "kevla-helmet", name: "Kevla Helmet", desc: "Full-face riding helmet." },
      { id: "vega-helmet", name: "Vega Helmet", desc: "Full-face riding helmet." }
    ]
  },
  {
    id: "eye", no: "02", name: "Eye & Face Protection", zone: "Eyes & face",
    protects: "Protection against flying particles, dust and splashes.",
    image: "assets/img/photos/healthcare-ppe.webp", focus: "24% 56%", zoom: 2.2,
    art: "assets/img/illustrations/ppe-goggles.svg",
    items: [
      { id: "goggles", name: "Safety Goggles", desc: "Sealed goggles for dust, debris and splash protection." },
      { id: "spectacles", name: "Safety Spectacles", desc: "Lightweight safety glasses for everyday site tasks." },
      { id: "face-shields", name: "Face Shields", desc: "Full-face visors against splashes and flying particles." },
      { id: "face-shield-foam", name: "Face Shield with Foam", desc: "Clear visor with a foam headband." },
      { id: "face-shield-goggles", name: "Face Shield with Goggles", desc: "Clear visor combined with goggles." },
      { id: "heavy-face-shield", name: "Heavy-Duty Clear Face Shield", desc: "Clear visor on a heavy-duty head mount." },
      { id: "head-shield", name: "Head-Held Shield", desc: "Welding shield worn on the head." },
      { id: "hand-shield", name: "Hand-Held Face Shield", desc: "Welding shield held by hand." },
      { id: "electronic-welding-shield", name: "Electronic Welding Face Shield", desc: "Auto-darkening welding helmet." },
      { id: "clear-goggles", name: "Clear Safety Goggles", desc: "Clear lenses against dust and debris." },
      { id: "dark-goggles", name: "Dark Safety Goggles", desc: "Tinted lenses for bright outdoor work." },
      { id: "hq-clear-goggles", name: "High Quality Clear Goggles", desc: "Higher-grade clear safety glasses." },
      { id: "hq-dark-goggles", name: "High Quality Dark Goggles (Vaultex)", desc: "Higher-grade tinted safety glasses." },
      { id: "ultrasonic-goggles", name: "Ultrasonic Goggles", desc: "Sealed goggles for splash protection." },
      { id: "big-frame-goggles", name: "Big Frame Goggles", desc: "Wide-frame clear safety glasses." },
      { id: "sb-clear-goggles", name: "Safety Boy Clear Goggles", desc: "Safety Boy clear safety glasses." },
      { id: "sb-dark-goggles", name: "Safety Boy Dark Goggles", desc: "Safety Boy tinted safety glasses." },
      { id: "welding-goggles", name: "Welding Goggles", desc: "Dark lenses for welding work." },
      { id: "welding-glasses", name: "Welding Glasses", desc: "Welding glasses with dark lenses." }
    ]
  },
  {
    id: "hearing", no: "03", name: "Hearing Protection", zone: "Ears",
    protects: "Protection against harmful noise levels.",
    image: "assets/img/photos/gloves-eyewear-earmuffs.webp", focus: "82% 36%", zoom: 1.9,
    art: "assets/img/illustrations/ppe-earmuffs.svg",
    items: [
      { id: "ear-muffs", name: "Ear Muffs", desc: "Over-ear defenders for high-noise environments." },
      { id: "ear-plugs", name: "Ear Plugs", desc: "In-ear protection against harmful noise." },
      { id: "std-ear-muffs", name: "Standard Quality Ear Muffs", desc: "Everyday over-ear defenders." },
      { id: "3m-ear-muffs", name: "3M High Quality Ear Muffs", desc: "3M higher-grade ear defenders." },
      { id: "3m-detachable-muffs", name: "3M Detachable Ear Muffs", desc: "3M ear muffs that clip onto safety helmets." },
      { id: "sb-ear-muffs", name: "Safety Boy Ear Muffs", desc: "Safety Boy ear defenders." },
      { id: "sb-detachable-muffs", name: "Safety Boy Detachable Ear Muffs", desc: "Safety Boy helmet-mounted ear muffs." },
      { id: "3m-ear-plugs", name: "3M Ear Plugs", desc: "3M corded ear plugs." }
    ]
  },
  {
    id: "respiratory", no: "04", name: "Respiratory Protection", zone: "Lungs",
    protects: "Protection against dust, fumes and airborne particles.",
    image: "assets/img/photos/ppe-flatlay.webp", focus: "74% 54%", zoom: 2.4,
    art: "assets/img/illustrations/ppe-respirator.svg",
    items: [
      { id: "dust-masks", name: "Dust Masks", desc: "Masks against dust and airborne particles." },
      { id: "respirators", name: "Respirators", desc: "Respirators against dust, fumes and airborne particles." },
      { id: "filters", name: "Filters", desc: "Replacement filters for respirators." },
      { id: "plastic-mask", name: "Plastic Mask", desc: "Reusable plastic dust mask." },
      { id: "n05-mask", name: "N05 Mask", desc: "Single-cartridge half mask." },
      { id: "3ply-masks", name: "3-Ply Masks (box of 50)", desc: "Disposable three-layer face masks." },
      { id: "light-afton-mask", name: "Light Afton Mask", desc: "Light disposable dust mask." },
      { id: "heavy-afton-mask", name: "Heavy Afton Mask", desc: "Heavier disposable dust mask." },
      { id: "3m-disposable-masks", name: "3M Disposable Masks without Filter (box of 20)", desc: "3M disposable particulate masks." },
      { id: "kn95-pack-5", name: "KN95 Masks with or without Filter (packet of 5)", desc: "Folded KN95 particulate masks." },
      { id: "kn95-box-20", name: "KN95 Masks without Filter (box of 20)", desc: "Folded KN95 particulate masks." },
      { id: "ffp2-mask", name: "FFP2 Mask with or without Filter", desc: "Moulded FFP2 particulate mask." },
      { id: "3m-respiratory-mask", name: "3M Respiratory Mask", desc: "3M reusable twin-cartridge half mask." },
      { id: "3m-full-face", name: "3M Full Face Gas Mask", desc: "3M full-face mask with twin cartridges." },
      { id: "cartridge-6001", name: "Cartridge 6001", desc: "Replacement cartridge for 3M respirators." },
      { id: "double-protection-mask", name: "Double Protection Mask", desc: "Twin-filter half mask." },
      { id: "double-nose-mask", name: "Double Nose Mask", desc: "Twin-filter respirator mask." }
    ]
  },
  {
    id: "hand", no: "05", name: "Hand Protection", zone: "Hands",
    protects: "Protection against cuts, chemicals and handling hazards.",
    image: "assets/img/photos/gloves-eyewear-earmuffs.webp", focus: "50% 72%", zoom: 1.5,
    art: "assets/img/illustrations/ppe-gloves.svg",
    items: [
      { id: "chemical-gloves", name: "Chemical-Resistant Gloves", desc: "Gloves for handling chemicals and liquids." },
      { id: "heavy-duty-gloves", name: "Heavy-Duty Gloves", desc: "Tough gloves for handling and general site work." },
      { id: "cut-gloves", name: "Cut-Resistant Gloves", desc: "Gloves that protect against cuts from sharp edges." },
      { id: "cotton-gloves", name: "Cotton Gloves", desc: "Light knitted gloves for general handling." },
      { id: "cotton-dotted-gloves", name: "Cotton Dotted Gloves", desc: "Knitted gloves with grip dots." },
      { id: "textile-rubber-gloves", name: "Textile Rubber Gloves", desc: "Fabric gloves with a rubber coating." },
      { id: "textile-gloves-hq", name: "Textile Gloves (high quality)", desc: "Higher-grade coated textile gloves." },
      { id: "tyson-leather-gloves", name: "Tyson Leather Gloves (12 cm)", desc: "Tyson leather gloves with a 12 cm cuff." },
      { id: "short-leather-gloves", name: "Short Leather Gloves (10 cm)", desc: "Leather work gloves with a 10 cm cuff." },
      { id: "tyson-long-leather-gloves", name: "Yellow Tyson Long Leather Gloves", desc: "Tyson long-cuff leather gloves." },
      { id: "black-soft-rubber-gloves", name: "Black Soft Rubber Gloves", desc: "Soft black rubber gloves." },
      { id: "yellow-rubber-gloves", name: "Yellow Rubber Gloves", desc: "Rubber gloves for cleaning and wet work." },
      { id: "nitrile-heavy-gloves", name: "Nitrile Heavy-Duty Gloves", desc: "Heavy-duty nitrile gloves." },
      { id: "black-chemical-gloves", name: "Black Chemical Gloves", desc: "Long black chemical gloves." },
      { id: "double-dip-gloves", name: "Double-Dip Chemical Gloves", desc: "Double-dipped chemical gloves." },
      { id: "green-double-dip-gloves", name: "Green Double-Dip Gloves", desc: "Green double-dipped gloves." },
      { id: "sb-anti-cut-gloves", name: "Safety Boy Anti-Cut Gloves", desc: "Safety Boy cut-resistant gloves." },
      { id: "impact-gloves", name: "Impact Gloves", desc: "Gloves with back-of-hand impact protection." },
      { id: "riding-gloves", name: "Riding Gloves", desc: "Protective gloves for motorcycle riders." },
      { id: "exam-gloves", name: "Medical Examination Gloves", desc: "Disposable examination gloves." }
    ]
  },
  {
    id: "foot", no: "06", name: "Foot Protection", zone: "Feet",
    protects: "Protection against crushing, punctures and slips.",
    image: "assets/img/photos/ppe-store-shelves.webp", focus: "62% 72%", zoom: 2.6,
    art: "assets/img/illustrations/ppe-boot.svg", artFirst: true,
    items: [
      { id: "safety-shoes", name: "Safety Shoes", desc: "Protective footwear for site and industrial work." },
      { id: "gumboots", name: "Gumboots", desc: "Waterproof boots for wet and muddy conditions." },
      { id: "zgh-shoes", name: "ZGH Safety Shoes", desc: "ZGH safety boots." },
      { id: "zgh-hq-shoes", name: "High Quality ZGH Shoes", desc: "ZGH higher-grade safety boots." },
      { id: "engineering-shoes", name: "Engineering Safety Shoes", desc: "Safety boots for engineering work." },
      { id: "panda-shoes", name: "Panda Safety Shoes", desc: "Panda safety boots." },
      { id: "panda-hq-shoes", name: "Panda High Quality Shoes", desc: "Panda higher-grade safety boots." },
      { id: "jogger-original", name: "Safety Jogger Shoes (original)", desc: "Original Safety Jogger boots." },
      { id: "jogger-hq", name: "High Quality Safety Jogger", desc: "Safety Jogger higher-grade boots." },
      { id: "sb-shoes", name: "Safety Boy Shoes", desc: "Safety Boy safety boots." },
      { id: "sb-hq-shoes", name: "High Quality Safety Boy Shoes", desc: "Safety Boy higher-grade safety boots." },
      { id: "kak-swear-shoes", name: "Kak Swear Safety Shoes", desc: "Kak Swear safety boots." },
      { id: "kak-swear-short", name: "Short Neck Kak Swear Shoes", desc: "Kak Swear low-cut safety shoes." },
      { id: "prime-captain", name: "Prime Captain Shoes", desc: "Prime Captain safety boots." },
      { id: "nile-gumboots", name: "Nile Gumboots", desc: "Nile rubber gumboots." },
      { id: "black-hippo-gumboots", name: "Black Hippo Gumboots", desc: "Hippo gumboots in black." },
      { id: "green-hippo-gumboots", name: "Green Hippo Gumboots", desc: "Hippo gumboots in green." },
      { id: "white-hippo-gumboots", name: "White Hippo Rubber Gumboots", desc: "Hippo rubber gumboots in white." },
      { id: "white-hq-gumboots", name: "White High Quality Rubber Gumboots", desc: "Higher-grade white rubber gumboots." },
      { id: "aaa-gumboots", name: "AAA Gumboots", desc: "AAA rubber gumboots." },
      { id: "zgh-steel-gumboots", name: "ZGH Gumboots with Steel Toe", desc: "ZGH gumboots with a steel toe." },
      { id: "steel-cap-gumboots", name: "Gumboots with Steel Cap", desc: "Gumboots with a steel toe cap." },
      { id: "sb-gumboots", name: "Safety Boy Gumboots", desc: "Safety Boy rubber gumboots." },
      { id: "tyson-gumboots", name: "Tyson Gumboots", desc: "Tyson rubber gumboots." },
      { id: "shoe-covers", name: "Shoe Covers", desc: "Disposable covers for clean areas." }
    ]
  },
  {
    id: "hivis", no: "07", name: "Hi-Vis & Workwear", zone: "Body",
    protects: "Keeps workers visible and their clothing protected on the job.",
    image: "assets/img/photos/worker-hivis.webp", focus: "42% 46%", zoom: 1.35,
    art: "assets/img/illustrations/ppe-vest.svg",
    items: [
      { id: "vests", name: "Reflective Vests", desc: "Hi-vis vests with reflective strips." },
      { id: "overalls", name: "Overalls", desc: "Full-body workwear for site and industrial use, with or without reflectors." },
      { id: "overcoats", name: "Overcoats", desc: "Work coats worn over clothing to keep it clean and protected, with or without reflectors, in PV or khaki." },
      { id: "ordinary-vest", name: "Ordinary Reflector Vest", desc: "Basic hi-vis vest in a range of colours." },
      { id: "mixed-colour-vest", name: "Mixed Colour Ordinary Vest", desc: "Two-tone hi-vis vest." },
      { id: "mesh-vest", name: "Mesh Reflector Vest", desc: "Breathable mesh hi-vis vest." },
      { id: "engineer-vest", name: "Engineer Reflector Vest", desc: "Hi-vis vest with pockets." },
      { id: "coloured-engineer-vest", name: "Coloured Engineer Reflector Vest", desc: "Two-tone engineer vest with pockets." },
      { id: "zip-vest", name: "Ordinary Reflector Vest with Zip (no pockets)", desc: "Zip-front hi-vis vest." },
      { id: "reflective-tshirt", name: "Reflective T-Shirt", desc: "Hi-vis T-shirt with reflective strips." },
      { id: "tshirts", name: "T-Shirts", desc: "Work shirts in a range of colours." },
      { id: "lab-coat", name: "Lab Coat", desc: "White coat for laboratory and clinic use." },
      { id: "scrubs", name: "Scrubs", desc: "Two-piece medical scrubs." },
      { id: "panda-overall", name: "Panda Overall", desc: "Panda one-piece overall." },
      { id: "sb-overall-reflector", name: "Safety Boy Overall with Reflector", desc: "Safety Boy overall with reflective strips." },
      { id: "sb-overall", name: "Safety Boy Overall without Reflector", desc: "Safety Boy plain overall." },
      { id: "uniforms", name: "Uniforms (shirt & trouser)", desc: "Two-piece work uniforms in a range of colours." },
      { id: "uniforms-reflector", name: "Uniforms with Reflector (shirt & trouser)", desc: "Two-piece work uniforms with reflective strips." },
      { id: "imported-uniform", name: "Imported Uniform", desc: "Imported two-piece work uniform." }
    ]
  },
  {
    id: "fall", no: "08", name: "Fall Protection", zone: "Working at height",
    protects: "Protection for people working at height.",
    image: "assets/img/photos/worker-harness.webp", focus: "70% 56%", zoom: 1.5,
    art: "assets/img/illustrations/ppe-fall.svg",
    items: [
      { id: "harnesses", name: "Safety Harnesses", desc: "Full-body harnesses for work at height." },
      { id: "lanyards", name: "Lanyards", desc: "Connectors that link the harness to an anchor point." },
      { id: "single-hook-harness", name: "Single Hook Safety Harness", desc: "Harness with a single-hook lanyard." },
      { id: "tyson-double-hook-harness", name: "Tyson Double Hook Safety Harness", desc: "Tyson harness with a double-hook lanyard." },
      { id: "fbo-double-hook-harness", name: "FBO Double Hook Safety Harness", desc: "FBO harness with a double-hook lanyard." },
      { id: "padded-leg-harness", name: "Safety Harness with Soft Padded Legs", desc: "Harness with padded leg straps (black)." },
      { id: "position-lanyards", name: "Position Lanyards", desc: "Adjustable lanyards for work positioning." },
      { id: "lifting-belt", name: "Lifting Belt", desc: "Work belt with rope." },
      { id: "pole-climbing-shoes", name: "Pole Climbing Shoes", desc: "Climbers for pole work." },
      { id: "foldable-ladder", name: "Foldable Ladder", desc: "Multi-position ladder in 4×2, 4×3, 4×4, 4×5 and 4×6." },
      { id: "aluminium-ladder", name: "Aluminium Ladder (5.4 m)", desc: "Telescopic aluminium ladder." }
    ]
  },
  {
    id: "fire", no: "09", name: "Fire Safety", zone: null,
    protects: "Equipment to detect and fight fire in the workplace.",
    image: null,
    art: "assets/img/illustrations/fire-extinguisher.svg", artFirst: true,
    items: [
      { id: "fire-extinguishers", name: "Fire Extinguishers", desc: "Portable extinguishers for workplaces and facilities, in 1, 2, 4, 6, 9, 25 and 50 kg." },
      { id: "fire-alarms", name: "Fire Alarms", desc: "Alarms that warn people of fire so they can get out safely." },
      { id: "co2-extinguishers", name: "CO₂ (Carbonated) Fire Extinguishers", desc: "Carbon dioxide extinguishers in 5 kg and 10 kg." },
      { id: "fire-blanket", name: "Fire Blanket", desc: "Blanket for smothering small fires." },
      { id: "fire-hose-reel", name: "Fire Hose Reel (30 m)", desc: "Wall-mounted 30 m hose reel." },
      { id: "fire-hose-reel-cabinet", name: "Fire Hose Reel and Cabinet (720 × 280)", desc: "Hose reel supplied in a wall cabinet." },
      { id: "automatic-fire-balls", name: "Automatic Fire Balls", desc: "Automatic extinguishers in 1.3, 4, 6, 10 and 12 kg." }
    ]
  },
  {
    id: "protective", no: "10", name: "Protective Clothing & Rainwear", zone: null,
    protects: "Protection from rain, water, chemicals, heat and riding hazards.",
    image: null,
    art: "assets/img/illustrations/ppe-rainwear.svg", artFirst: true,
    items: [
      { id: "rain-coat", name: "Rain Coat", desc: "Long rain coat." },
      { id: "light-rain-suit", name: "Light Rain Suit", desc: "Lightweight rain jacket and trousers." },
      { id: "double-layer-rain-suit", name: "Double Layer Rain Suit", desc: "Two-layer rain jacket and trousers." },
      { id: "riding-suit", name: "Riding Suit", desc: "Rain suit with reflective strips for riders." },
      { id: "umbrella", name: "Umbrella", desc: "Large umbrella." },
      { id: "tyvek-coverall", name: "Tyvek Coverall", desc: "Disposable coverall against dust and splashes." },
      { id: "chemical-suit", name: "Chemical Suit", desc: "Full-body suit for chemical handling." },
      { id: "bee-suit", name: "Bee Suit", desc: "Beekeeping suit with veil." },
      { id: "chest-waders", name: "Chest Waders (fisher gumboot)", desc: "Waterproof waders with built-in boots." },
      { id: "life-jacket", name: "Life Jacket", desc: "Buoyancy jacket for work on or near water." },
      { id: "leather-arm-sleeves", name: "Leather Arm Sleeves", desc: "Leather sleeves for welding." },
      { id: "leather-leg-sleeves", name: "Leather Leg Sleeves", desc: "Leather leg guards for welding." },
      { id: "leather-welding-apron", name: "Leather Welding Apron", desc: "Leather apron for welding." },
      { id: "pvc-apron", name: "PVC Apron", desc: "Waterproof apron for wet and chemical work." },
      { id: "pv-apron", name: "PV Apron", desc: "Fabric work apron." },
      { id: "elbow-knee-caps", name: "Elbow and Knee Caps", desc: "Protective elbow and knee guards." }
    ]
  },
  {
    id: "first-aid", no: "11", name: "First Aid & Emergency", zone: null,
    protects: "Kits and equipment to respond quickly when someone is hurt or exposed.",
    image: null,
    art: "assets/img/illustrations/ppe-first-aid.svg", artFirst: true,
    items: [
      { id: "panda-first-aid-kit", name: "Panda First Aid Kit", desc: "First aid kit in a carry bag." },
      { id: "standard-kit-25", name: "Standard First Aid Kit (25 people)", desc: "First aid kit for up to 25 people." },
      { id: "silver-first-aid-kit", name: "Standard Silver First Aid Kit", desc: "First aid kit in a metal case." },
      { id: "european-kit-25", name: "European Standard First Aid Kit (25 people)", desc: "European standard kit for up to 25 people." },
      { id: "european-kit-50", name: "European Standard First Aid Kit (50 people)", desc: "European standard kit for up to 50 people." },
      { id: "european-kit-100", name: "European Standard First Aid Kit (100 people)", desc: "European standard kit for up to 100 people." },
      { id: "car-first-aid-kit", name: "Car First Aid Kit", desc: "First aid kit for vehicles." },
      { id: "first-aid-accessories", name: "First Aid Kit Accessories", desc: "Supplies for stocking first aid kits." },
      { id: "eye-wash-station", name: "Eye Wash Station", desc: "Standing station for flushing the eyes." },
      { id: "spill-kits", name: "Spill Kits", desc: "Kits in 30, 40, 80, 120 and 240 litres." },
      { id: "infrared-thermometer", name: "Infrared Thermometer", desc: "Non-contact temperature checks." },
      { id: "alcohol-detectors", name: "Alcohol Detectors", desc: "Breath alcohol testers." }
    ]
  },
  {
    id: "road", no: "12", name: "Road, Site & Security", zone: null,
    protects: "Equipment to mark hazards, guide traffic and secure sites.",
    image: null,
    art: "assets/img/illustrations/ppe-cone.svg", artFirst: true,
    items: [
      { id: "traffic-cones", name: "Traffic Cones", desc: "Cones for marking lanes and hazards." },
      { id: "adjustable-cone", name: "Adjustable Cone", desc: "Collapsible cone with a warning light." },
      { id: "reflecting-triangle", name: "Reflecting Triangle", desc: "Warning triangle for vehicles." },
      { id: "rotating-light", name: "Rotating Light", desc: "Rotating warning beacon." },
      { id: "traffic-flags", name: "Traffic Flags", desc: "Hand flags for directing traffic." },
      { id: "lighting-stick", name: "Lighting Stick", desc: "Light-up traffic baton." },
      { id: "caution-tape", name: "Caution Tape", desc: "Yellow and black barrier tape." },
      { id: "warning-tape", name: "Warning Tape", desc: "Red and white barrier tape." },
      { id: "reflective-tape", name: "Reflective Tape (50 m)", desc: "Reflective tape in red or yellow." },
      { id: "double-colour-reflective-tape", name: "Double Colour Reflective Tape", desc: "Two-colour reflective tape." },
      { id: "reflector-lr", name: "Reflector L-R", desc: "Left and right chevron reflector panels." },
      { id: "wet-floor-sign", name: "Caution Wet Floor Sign", desc: "Free-standing warning sign." },
      { id: "metal-detector", name: "Hand-Held Metal Detector", desc: "Hand-held detector for security checks." },
      { id: "security-belt", name: "Security Belt", desc: "Duty belt for security staff." }
    ]
  },
  {
    id: "tools", no: "13", name: "Tools & Equipment", zone: null,
    protects: "Tools and equipment for site, workshop and facility teams.",
    image: null,
    art: "assets/img/illustrations/ppe-tools.svg", artFirst: true,
    items: [
      { id: "tape-measures", name: "Tape Measures", desc: "3 m, 5 m and 7.5 m, with a plastic or rubber casing." },
      { id: "fibre-tape", name: "Fibre Tape", desc: "Long fibre measuring tape on a reel." },
      { id: "steel-measuring-tape", name: "Steel Measuring Tape", desc: "Long steel measuring tape on a reel." },
      { id: "clamp-meter", name: "Clamp Meter", desc: "Digital clamp meter for electrical checks." },
      { id: "hammer", name: "Hammer", desc: "Claw hammer." },
      { id: "mekilda-blower", name: "Mekilda Blower", desc: "Electric air blower." },
      { id: "mekilda-600w", name: "Mekilda 600 W Blower", desc: "600 W electric air blower." },
      { id: "power-guard", name: "Power Guard", desc: "Plug-in power protector." },
      { id: "spray-pump", name: "Spray Pump", desc: "Knapsack spray pump." },
      { id: "jerry-can", name: "Jerry Can", desc: "Plastic jerry can." },
      { id: "waste-bin", name: "Waste Bin", desc: "Wheeled waste bin." },
      { id: "ratchet-strap", name: "Ratchet Strap / Cargo Belt (50 mm)", desc: "50 mm strap for securing loads." }
    ]
  }
];
