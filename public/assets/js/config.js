/* =========================================================================
   SAFE ARMOR — SITE CONFIGURATION
   -------------------------------------------------------------------------
   Every company detail shown on the website lives in this one file.
   Change a value here and every page updates.
   Leave a value as "" to hide it where the site supports hiding.

   Public details only. Kept OFF the website on purpose:
   - TIN and the trading licence (Business Profile only)
   - directors' personal phone numbers and personal email addresses
   ========================================================================= */
window.SAFE_ARMOR = {
  company: {
    name: "Safe Armor PPE Supplies UG Ltd",
    shortName: "Safe Armor",
    tagline: "Your Safety, Our Priority",
    established: "2024",
    incorporated: "18 October 2024",
    registrationNo: "80034866229437",
    headOffice: "Bugolobi, Kampala, Uganda",
    market: "Public, private and NGO sectors",
    areasServed: "Kampala, Jinja, Mbarara, Gulu and Lira"
  },

  contact: {
    phone: "+256 774 025 481",           // office telephone (display)
    phoneHref: "+256774025481",          // same number, no spaces
    mobile: "+256 774 025 481",          // WhatsApp (display)
    whatsapp: "256774025481",            // WhatsApp number, digits only, with country code
    email: "info@safearmorug.com",       // main email
    address: "Bugolobi, near Silver Springs Hotel, Kampala, Uganda",
    postal: "P.O. Box 173721, Kampala, Uganda",
    hours: "Monday – Saturday · 8:00 am – 6:00 pm",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Silver+Springs+Hotel+Bugolobi+Kampala"
  },

  /* Five company email addresses (Contact page directory). */
  emails: [
    { label: "General Enquiries",                   address: "info@safearmorug.com" },
    { label: "Sales & Quotations",                  address: "sales@safearmorug.com" },
    { label: "Accounts & Finance",                  address: "finance@safearmorug.com" },
    { label: "Managing Director · Omara Daniel",    address: "omara.daniel@safearmorug.com" },
    { label: "Client Relations · Nakabonye Fridah", address: "nakabonye.fridah@safearmorug.com" }
  ],

  /* Social links: leave "" to hide an icon. */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    x: "",
    tiktok: ""
  },

  /* Board of Directors (About page). No photographs are used. */
  directors: [
    {
      name: "Omara Daniel",
      title: "Managing Director",
      bio: "Holds a Bachelor’s degree in Business Administration and brings over five years of experience across sales, finance and marketing.",
      email: "omara.daniel@safearmorug.com"
    },
    {
      name: "Nakabonye Fridah",
      title: "Director & Secretary",
      bio: "Relationship Manager, responsible for developing and maintaining long-term partnerships with clients through excellent customer service and support.",
      email: "nakabonye.fridah@safearmorug.com"
    }
  ],

  /* Towns served (Home page). Leave empty to hide. */
  areas: ["Kampala", "Jinja", "Mbarara", "Gulu", "Lira"],

  /* Industries served (Home page). Leave empty to hide the list. */
  industries: [
    "Construction",
    "Manufacturing",
    "Mining & quarrying",
    "Oil & gas",
    "Energy & utilities",
    "Agriculture & agro-processing",
    "Transport & logistics",
    "Security services",
    "Government ministries & agencies"
  ]
};
