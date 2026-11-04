/* =========================================================================
   SAFE ARMOR — PPE CATALOGUE
   -------------------------------------------------------------------------
   Categories and items shown on the PPE Range page, the Protection Map and
   the home page. Items follow the Company Profile Information Form.
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
      { id: "bump-caps", name: "Bump Caps", desc: "Lightweight caps against bumps and minor knocks." }
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
      { id: "face-shields", name: "Face Shields", desc: "Full-face visors against splashes and flying particles." }
    ]
  },
  {
    id: "hearing", no: "03", name: "Hearing Protection", zone: "Ears",
    protects: "Protection against harmful noise levels.",
    image: "assets/img/photos/gloves-eyewear-earmuffs.webp", focus: "82% 36%", zoom: 1.9,
    art: "assets/img/illustrations/ppe-earmuffs.svg",
    items: [
      { id: "ear-muffs", name: "Ear Muffs", desc: "Over-ear defenders for high-noise environments." },
      { id: "ear-plugs", name: "Ear Plugs", desc: "In-ear protection against harmful noise." }
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
      { id: "filters", name: "Filters", desc: "Replacement filters for respirators." }
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
      { id: "cut-gloves", name: "Cut-Resistant Gloves", desc: "Gloves that protect against cuts from sharp edges." }
    ]
  },
  {
    id: "foot", no: "06", name: "Foot Protection", zone: "Feet",
    protects: "Protection against crushing, punctures and slips.",
    image: "assets/img/photos/ppe-store-shelves.webp", focus: "62% 72%", zoom: 2.6,
    art: "assets/img/illustrations/ppe-boot.svg", artFirst: true,
    items: [
      { id: "safety-shoes", name: "Safety Shoes", desc: "Protective footwear for site and industrial work." },
      { id: "gumboots", name: "Gumboots", desc: "Waterproof boots for wet and muddy conditions." }
    ]
  },
  {
    id: "hivis", no: "07", name: "Hi-Vis & Workwear", zone: "Body",
    protects: "Keeps workers visible and their clothing protected on the job.",
    image: "assets/img/photos/worker-hivis.webp", focus: "42% 46%", zoom: 1.35,
    art: "assets/img/illustrations/ppe-vest.svg",
    items: [
      { id: "vests", name: "Reflective Vests", desc: "Hi-vis vests with reflective strips." },
      { id: "overalls", name: "Overalls", desc: "Full-body workwear for site and industrial use." },
      { id: "overcoats", name: "Overcoats", desc: "Work coats worn over clothing to keep it clean and protected." }
    ]
  },
  {
    id: "fall", no: "08", name: "Fall Protection", zone: "Working at height",
    protects: "Protection for people working at height.",
    image: "assets/img/photos/worker-harness.webp", focus: "70% 56%", zoom: 1.5,
    art: "assets/img/illustrations/ppe-fall.svg",
    items: [
      { id: "harnesses", name: "Safety Harnesses", desc: "Full-body harnesses for work at height." },
      { id: "lanyards", name: "Lanyards", desc: "Connectors that link the harness to an anchor point." }
    ]
  },
  {
    id: "fire", no: "09", name: "Fire Safety", zone: null,
    protects: "Equipment to detect and fight fire in the workplace.",
    image: null,
    art: "assets/img/illustrations/fire-extinguisher.svg", artFirst: true,
    items: [
      { id: "fire-extinguishers", name: "Fire Extinguishers", desc: "Portable extinguishers for workplaces and facilities." },
      { id: "fire-alarms", name: "Fire Alarms", desc: "Alarms that warn people of fire so they can get out safely." }
    ]
  }
];
