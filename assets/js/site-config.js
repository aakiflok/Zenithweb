/**
 * ============================================================
 * ZENITH NAVSARI — SITE CONFIG
 * ============================================================
 * This is the ONE place to update core business details.
 * Everything else on the page (phone links, WhatsApp links,
 * structured data) is generated from these values by main.js.
 *
 * After editing this file, just refresh the page — no other
 * file needs to change for phone number / hours / address edits.
 * ============================================================
 */

const ZENITH = {
  businessName: "Zenith Navsari",
  // Shown only in structured data (schema.org), not in visible page text —
  // your store signage/registration name, in case it differs from the display name above.
  legalName: "Zenith Enterprise",

  // Phone
  phoneDisplay: "+91 94277 15253",
  phoneHref: "tel:+919427715253",

  // WhatsApp — digits only, country code first, no + or spaces
  whatsappNumber: "919427715253",

  // Address
  address: {
    street: "Opp. Islampura, Junathana, Kaliawadi",
    locality: "Navsari",
    region: "Gujarat",
    postalCode: "396445",
    country: "IN",
    full: "Opp. Islampura, Junathana, Kaliawadi, Navsari, Gujarat – 396445",
  },

  // Paste a verified Google Maps / Business Profile link here any time
  mapsUrl: "https://share.google/sqLTxxwGvnfLqPRpV",

  // Hours
  hours: {
    weekdayLabel: "Monday – Saturday",
    weekdayTime: "9:00 AM – 9:00 PM",
    sundayLabel: "Sunday",
    sundayTime: "9:00 AM – 2:00 PM",
    timezone: "Asia/Kolkata",
    weekdayOpens: "09:00", weekdayCloses: "21:00",
    sundayOpens: "09:00", sundayCloses: "14:00",
  },

  // TODO: set this to your live domain before launch, e.g. "https://www.zenithenterprise.in"
  // Used for the canonical link tag and structured data "url" field.
  siteUrl: "https://zenithweb-gold.vercel.app",

  // Optional analytics hooks — leave blank to keep tracking OFF by default.
  // See README "Tracking (optional)" section before filling these in.
  tracking: {
    gtagId: "", // e.g. "G-XXXXXXX" — leave empty to disable Google tag
  },
};

/**
 * Repair & service categories.
 * Order matters — washing machines and refrigerators are the strongest
 * categories and should stay first. Add/remove/edit entries freely;
 * the page rebuilds the cards and WhatsApp links from this list.
 *
 * WhatsApp enquiry text is built from the selected category name in main.js.
 */
const REPAIR_CATEGORIES = [
  {
    id: "washing-machine",
    name: "Washing Machines",
    icon: "washing-machine",
    blurb: "Drum, motor and drainage repairs for front-load and top-load machines.",
  },
  {
    id: "refrigerator",
    name: "Refrigerators & Fridges",
    icon: "fridge",
    blurb: "Cooling, compressor and noise issues, assessed by our technicians.",
  },
  {
    id: "ac",
    name: "Air Conditioners",
    icon: "ac",
    blurb: "Cooling, drainage and servicing for split and window units.",
  },
  {
    id: "tv",
    name: "Televisions",
    icon: "tv",
    blurb: "Display, sound and power repairs across multiple brands.",
  },
  {
    id: "oven",
    name: "Ovens",
    icon: "oven",
    blurb: "Heating element, timer and control repairs for home ovens.",
  },
  {
    id: "microwave",
    name: "Microwaves",
    icon: "microwave",
    blurb: "Heating, turntable and control-panel repairs.",
  },
  {
    id: "geyser",
    name: "Geysers & Water Heaters",
    icon: "geyser",
    blurb: "Heating element, thermostat and leakage repairs.",
  },
  {
    id: "gas-stove",
    name: "Gas Stoves",
    icon: "gas-stove",
    blurb: "Ignition, burner and valve servicing.",
  },
  {
    id: "chimney",
    name: "Chimneys",
    icon: "chimney",
    blurb: "Suction, motor and filter servicing.",
  },
  {
    id: "other",
    name: "Other Appliances & Electronics",
    icon: "other",
    blurb: "Tell us about your appliance. Repairs subject to confirmation.",
  },
];

/**
 * Products for sale. Order and copy can be edited freely.
 */
const PRODUCT_CATEGORIES = [
  { id: "refrigerators", name: "Refrigerators", icon: "fridge" },
  { id: "air-conditioners", name: "Air Conditioners", icon: "ac" },
  { id: "tvs", name: "TVs", icon: "tv" },
  { id: "washing-machines", name: "Washing Machines", icon: "washing-machine" },
  { id: "ovens", name: "Ovens", icon: "oven" },
  { id: "gas-stoves", name: "Gas Stoves", icon: "gas-stove" },
  { id: "chimneys", name: "Chimneys", icon: "chimney" },
  { id: "geysers", name: "Geysers & Water Heaters", icon: "geyser" },
  { id: "kitchenware", name: "Kitchenware", icon: "kitchenware" },
  { id: "other-electronics", name: "Other Electronics & Appliances", icon: "other" },
];

/**
 * FAQ — answers only reflect confirmed facts. Edit copy freely,
 * but keep claims to what the business has confirmed.
 */
const FAQS = [
  {
    q: "Which appliances do you repair?",
    a: "We repair washing machines, refrigerators, air conditioners, TVs, ovens, microwaves, geysers and water heaters, gas stoves, chimneys, and other home appliances and electronics, subject to confirmation. Washing machines and refrigerators are our strongest repair categories.",
  },
  {
    q: "Do you provide home visits?",
    a: "Yes. Our technicians carry out home visits, and repairs can also be done at our store/workshop depending on the appliance and issue.",
  },
  {
    q: "Is there a visiting or inspection charge?",
    a: "Visiting/inspection charges apply. Contact us for details.",
  },
  {
    q: "How soon can service be arranged?",
    a: "We aim to arrange service within approximately 1–2 days, depending on technician availability, your location and the problem. Earlier service may sometimes be possible, but we don't guarantee same-day service.",
  },
  {
    q: "Are you an authorized brand service centre?",
    a: "We are a multi-brand repair business and are not an authorized service centre for any particular brand.",
  },
  {
    q: "Can I enquire about buying a new appliance?",
    a: "Yes. Contact our store for available brands, models, current prices and availability of refrigerators, air conditioners, TVs, washing machines, ovens, gas stoves, chimneys, geysers, kitchenware and more.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve Navsari city and nearby villages.",
  },
  {
    q: "What are your opening hours?",
    a: ZENITH.hours.weekdayLabel + ", " + ZENITH.hours.weekdayTime + "; " + ZENITH.hours.sundayLabel + ", " + ZENITH.hours.sundayTime + " (" + ZENITH.hours.timezone + ").",
  },
];
