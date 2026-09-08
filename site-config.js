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
  },

  // TODO: set this to your live domain before launch, e.g. "https://www.zenithenterprise.in"
  // Used for the canonical link tag and structured data "url" field.
  siteUrl: "REPLACE_WITH_YOUR_DOMAIN",

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
 * whatsappMessage supports \n for line breaks.
 */
const REPAIR_CATEGORIES = [
  {
    id: "washing-machine",
    name: "Washing Machines",
    icon: "washing-machine",
    prompt: "Washing machine not spinning or draining?",
    blurb:
      "Front-load and top-load, multiple brands. Drum, motor, drainage and control issues assessed at your home or our workshop.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Washing Machine\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "refrigerator",
    name: "Refrigerators & Fridges",
    icon: "fridge",
    prompt: "Fridge not cooling?",
    blurb:
      "Cooling problems, unusual noise, gas and compressor issues. One of our strongest repair categories, handled by our own technicians.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Refrigerator\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "ac",
    name: "Air Conditioners",
    icon: "ac",
    prompt: "AC not cooling properly?",
    blurb:
      "Split and window units. Gas, cooling, drainage and servicing, at your home or our workshop.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Air Conditioner\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "tv",
    name: "Televisions",
    icon: "tv",
    prompt: "TV picture or sound problems?",
    blurb:
      "Display, sound and power issues across multiple brands, assessed by our technicians.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: TV\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "oven",
    name: "Ovens",
    icon: "oven",
    prompt: "Oven not heating evenly?",
    blurb:
      "Heating element, timer and control issues on OTG and other home ovens.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Oven\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "microwave",
    name: "Microwaves",
    icon: "microwave",
    prompt: "Microwave or oven not heating?",
    blurb:
      "Heating, turntable and control-panel issues, assessed at your home or our workshop.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Microwave\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "geyser",
    name: "Geysers & Water Heaters",
    icon: "geyser",
    prompt: "Geyser not heating water?",
    blurb:
      "Heating element, thermostat and leakage issues on electric water heaters.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Geyser / Water Heater\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "gas-stove",
    name: "Gas Stoves",
    icon: "gas-stove",
    prompt: "Burner not igniting evenly?",
    blurb:
      "Ignition, burner and valve issues on gas stoves, checked and serviced by our technicians.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Gas Stove\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "chimney",
    name: "Chimneys",
    icon: "chimney",
    prompt: "Kitchen chimney suction weak or noisy?",
    blurb:
      "Suction, motor and filter issues on kitchen chimneys, assessed at home or in our workshop.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: Chimney\nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
  },
  {
    id: "other",
    name: "Other Appliances & Electronics",
    icon: "other",
    prompt: "Something else acting up?",
    blurb:
      "We repair a wide range of home appliances and electronics beyond the categories above — subject to confirmation. Tell us what you have.",
    whatsappMessage:
      "Hello " + ZENITH.businessName + ", I need appliance repair service.\nAppliance: \nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.",
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
    a: "Monday–Saturday, 9:00 AM–9:00 PM, and Sunday, 9:00 AM–2:00 PM (Asia/Kolkata).",
  },
];
