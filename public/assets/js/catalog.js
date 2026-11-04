/* =========================================================================
   SAFE ARMOR — PPE CATALOGUE
   -------------------------------------------------------------------------
   Categories and items shown on the PPE Range page, the Protection Map and
   the home page. Edit names/descriptions, delete items you do not stock,
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
      { id: "helmet-visor", name: "Helmet & Visor Combinations", desc: "Safety helmets fitted with face visors and ear defenders." }
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
      { id: "helmet-ear-muffs", name: "Helmet-Mounted Ear Muffs", desc: "Ear defenders that attach to safety helmets." },
      { id: "ear-plugs", name: "Ear Plugs", desc: "Disposable and reusable in-ear protection." }
    ]
  },
  {
    id: "respiratory", no: "04", name: "Respiratory Protection", zone: "Lungs",
    protects: "Protection against dust, fumes and airborne particles.",
    image: "assets/img/photos/ppe-flatlay.webp", focus: "74% 54%", zoom: 2.4,
    art: "assets/img/illustrations/ppe-respirator.svg",
    items: [
      { id: "dust-masks", name: "Disposable Dust Masks", desc: "Single-use masks against dust and airborne particles." },
      { id: "half-mask", name: "Half-Mask Respirators", desc: "Reusable respirators with replaceable filter cartridges." },
      { id: "filters", name: "Replacement Filters & Cartridges", desc: "Filters for reusable respirators." }
    ]
  },
  {
    id: "hand", no: "05", name: "Hand Protection", zone: "Hands",
    protects: "Protection against cuts, abrasion and handling hazards.",
    image: "assets/img/photos/gloves-eyewear-earmuffs.webp", focus: "50% 72%", zoom: 1.5,
    art: "assets/img/illustrations/ppe-gloves.svg",
    items: [
      { id: "leather-gloves", name: "Leather Work Gloves", desc: "Durable gloves for handling and general site work." },
      { id: "coated-gloves", name: "Coated Grip Gloves", desc: "Rubber- or nitrile-coated gloves for a secure grip." },
      { id: "hivis-gloves", name: "High-Visibility Gloves", desc: "Bright gloves that keep hand signals visible." }
    ]
  },
  {
    id: "foot", no: "06", name: "Foot Protection", zone: "Feet",
    protects: "Protection against crushing, punctures and slips.",
    image: "assets/img/photos/ppe-store-shelves.webp", focus: "62% 72%", zoom: 2.6,
    art: "assets/img/illustrations/ppe-boot.svg", artFirst: true,
    items: [
      { id: "safety-boots", name: "Safety Boots", desc: "Protective boots for site and industrial work." },
      { id: "gumboots", name: "Gumboots", desc: "Waterproof boots for wet and muddy conditions." }
    ]
  },
  {
    id: "hivis", no: "07", name: "High-Visibility Clothing", zone: "Body",
    protects: "Keeps workers visible in low light and around moving vehicles.",
    image: "assets/img/photos/worker-hivis.webp", focus: "42% 46%", zoom: 1.35,
    art: "assets/img/illustrations/ppe-vest.svg",
    items: [
      { id: "vests", name: "Reflective Safety Vests", desc: "Hi-vis vests with reflective strips." },
      { id: "hivis-jackets", name: "Hi-Vis Jackets & Shirts", desc: "High-visibility outerwear for site and road work." },
      { id: "coveralls", name: "Coveralls & Overalls", desc: "Full-body workwear for site and industrial use." },
      { id: "disposable-coveralls", name: "Disposable Protective Coveralls", desc: "Single-use suits against dust and contamination." }
    ]
  },
  {
    id: "fall", no: "08", name: "Fall Protection", zone: "Working at height",
    protects: "Protection for people working at height.",
    image: "assets/img/photos/worker-harness.webp", focus: "70% 56%", zoom: 1.5,
    art: "assets/img/illustrations/ppe-fall.svg",
    items: [
      { id: "harnesses", name: "Full-Body Harnesses", desc: "Harnesses that spread fall-arrest forces across the body." },
      { id: "lanyards", name: "Lanyards & Snap Hooks", desc: "Connectors that link the harness to an anchor point." }
    ]
  },
  {
    id: "healthcare", no: "09", name: "Healthcare & Hygiene PPE", zone: null,
    protects: "Protection for clinical, laboratory and hygiene settings.",
    image: "assets/img/photos/healthcare-ppe.webp", focus: "55% 50%", zoom: 1.15,
    art: null,
    items: [
      { id: "surgical-masks", name: "Surgical Face Masks", desc: "Disposable masks for clinical and hygiene use." },
      { id: "exam-gloves", name: "Nitrile Examination Gloves", desc: "Disposable gloves for clinical and food-handling tasks." },
      { id: "isolation-gowns", name: "Isolation Gowns", desc: "Disposable gowns for barrier protection." }
    ]
  }
];
