/* =========================================================================
   SAFE ARMOR — SITE CONFIGURATION
   -------------------------------------------------------------------------
   Every company detail shown on the website lives in this one file.
   Replace the placeholder values (marked TODO) and every page updates.
   Leave a value as "" to hide it where the site supports hiding.
   ========================================================================= */
window.SAFE_ARMOR = {
  company: {
    name: "Safe Armor PPE Supplies UG Ltd",
    shortName: "Safe Armor",
    tagline: "Your Safety, Our Priority",
    established: "20XX",                 // TODO: year of incorporation
    registrationNo: "XXXXXXXXXXXX",      // TODO: certificate of incorporation no.
    tin: "XXXXXXXXXX",                   // TODO: Tax Identification Number
    headOffice: "Town / City, Uganda"    // TODO
  },

  contact: {
    phone: "+256 700 000 000",           // TODO: office telephone (display)
    phoneHref: "+256700000000",          // TODO: same number, no spaces
    mobile: "+256 700 000 000",          // TODO: mobile / WhatsApp (display)
    whatsapp: "256700000000",            // TODO: WhatsApp number, digits only, with country code
    email: "info@yourdomain.com",        // TODO: main email
    address: "Plot No. 00, Street Name, Town / City, Uganda", // TODO
    postal: "P.O. Box 0000, City, Uganda",                    // TODO
    hours: "Monday – Friday · Hours to be confirmed",         // TODO
    mapLink: ""                          // TODO: Google Maps share link (optional)
  },

  /* Five email addresses (Contact page directory). Rename labels freely. */
  emails: [
    { label: "General Enquiries",    address: "info@yourdomain.com" },
    { label: "Sales & Quotations",   address: "sales@yourdomain.com" },
    { label: "Orders & Procurement", address: "orders@yourdomain.com" },
    { label: "Accounts & Finance",   address: "accounts@yourdomain.com" },
    { label: "Directors’ Office",    address: "directors@yourdomain.com" }
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
    { name: "Director’s Full Name", title: "Director", bio: "Profile to follow: qualifications, experience and role in the company." },
    { name: "Director’s Full Name", title: "Director", bio: "Profile to follow: qualifications, experience and role in the company." }
  ],

  /* Industries served (Home & About). Leave empty to hide the list. */
  industries: []
};
