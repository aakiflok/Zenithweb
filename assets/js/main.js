(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ----------------------------------------------------------------
   * Icons — minimal line-style SVGs, single color via currentColor
   * -------------------------------------------------------------- */
  var ICONS = {
    "washing-machine":
      '<circle cx="12" cy="13" r="5.2"/><circle cx="12" cy="13" r="2.1"/><path d="M4.5 4.5h15a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z"/><path d="M7.2 7.1h.01M9.6 7.1h.01"/>',
    fridge:
      '<rect x="6" y="2.5" width="12" height="19" rx="1.4"/><line x1="6" y1="10.5" x2="18" y2="10.5"/><line x1="9" y1="5.2" x2="9" y2="7.6"/><line x1="9" y1="13.2" x2="9" y2="15.6"/>',
    ac: '<rect x="2.5" y="7" width="19" height="9" rx="1.6"/><path d="M6 16v2.2M10.3 16v3M13.7 16v3M18 16v2.2"/><path d="M6.5 10.5h11M6.5 13h7.5"/>',
    tv: '<rect x="3" y="4.5" width="18" height="12.2" rx="1.3"/><path d="M8.3 20.5h7.4M12 16.7v3.8"/>',
    oven:
      '<rect x="3.5" y="3" width="17" height="18" rx="1.4"/><circle cx="12" cy="13.5" r="4.3"/><line x1="6" y1="6.4" x2="9" y2="6.4"/><line x1="11.3" y1="6.4" x2="18" y2="6.4"/>',
    microwave:
      '<rect x="2.5" y="6" width="19" height="12" rx="1.4"/><rect x="5" y="8.3" width="9.6" height="7.4" rx="0.8"/><circle cx="18.3" cy="10" r="0.9"/><line x1="16.6" y1="13" x2="20" y2="13"/><line x1="16.6" y1="15" x2="20" y2="15"/>',
    geyser:
      '<rect x="7.5" y="2.5" width="9" height="19" rx="4.4"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="9.3" y1="9.3" x2="14.7" y2="14.7"/><line x1="14.7" y1="9.3" x2="9.3" y2="14.7"/>',
    "gas-stove":
      '<rect x="2.5" y="5" width="19" height="14" rx="1.4"/><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M8 10.3v3.4M6.3 12h3.4M16 10.3v3.4M14.3 12h3.4"/>',
    chimney:
      '<path d="M6 21V9.5l3.4-5h5.2l3.4 5V21"/><line x1="4.5" y1="21" x2="19.5" y2="21"/><line x1="6" y1="13" x2="18" y2="13"/>',
    kitchenware:
      '<path d="M5 3v6a3 3 0 0 0 3 3v9M8 3v6M11 3v6"/><path d="M17 3c-2 1.4-2.6 3.4-2.6 5.4 0 2 1 3 2.6 3.6V21"/>',
    other:
      '<circle cx="12" cy="12" r="9"/><path d="M9.2 9.4a2.8 2.8 0 1 1 3.8 2.6c-.9.4-1.4 1-1.4 2v.4"/><circle cx="12" cy="17" r="0.15" fill="currentColor" stroke="currentColor" stroke-width="1.6"/>',
  };

  function iconSvg(name) {
    var paths = ICONS[name] || ICONS.other;
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths +
      "</svg>"
    );
  }

  var GENERAL_MESSAGE =
    "Hello " +
    ZENITH.businessName +
    ", I need appliance repair service.\nAppliance: \nProblem: \nLocation: \nPlease let me know your visiting charges and earliest available service time.";

  /* ----------------------------------------------------------------
   * WhatsApp / call link helpers
   * -------------------------------------------------------------- */
  function buildWhatsAppUrl(rawMessage) {
    var text = rawMessage.replace(/\\n/g, "\n");
    return (
      "https://wa.me/" + ZENITH.whatsappNumber + "?text=" + encodeURIComponent(text)
    );
  }

  function wireGlobalCTAs() {
    document.querySelectorAll("[data-hours]").forEach(function (el) { el.textContent = ZENITH.hours[el.getAttribute("data-hours")]; });
    var els = document.querySelectorAll("[data-phone-href]");
    els.forEach(function (el) {
      el.setAttribute("href", ZENITH.phoneHref);
    });

    var phoneText = document.querySelectorAll("[data-phone-display]");
    phoneText.forEach(function (el) {
      el.textContent = ZENITH.phoneDisplay;
    });

    var generalWa = document.querySelectorAll("[data-wa-general]");
    generalWa.forEach(function (el) {
      el.setAttribute("href", buildWhatsAppUrl(GENERAL_MESSAGE));
    });

    var mapsLinks = document.querySelectorAll("[data-maps-link]");
    mapsLinks.forEach(function (el) {
      el.setAttribute("href", ZENITH.mapsUrl);
    });

    var addressEls = document.querySelectorAll("[data-address]");
    addressEls.forEach(function (el) {
      el.textContent = ZENITH.address.full;
    });
  }

  /* ----------------------------------------------------------------
   * Render: repair category cards (select one, then a single shared
   * Call/WhatsApp pair below the grid acts on the selection)
   * -------------------------------------------------------------- */
  function renderRepairCards() {
    var grid = document.getElementById("repair-grid");
    if (!grid) return;
    var html = REPAIR_CATEGORIES.map(function (cat, i) {
      return (
        '<label class="ticket-card" for="repair-opt-' +
        cat.id +
        '">' +
        '<input class="ticket-card__radio" type="radio" name="repair-category" id="repair-opt-' +
        cat.id +
        '" value="' +
        cat.id +
        '" />' +
        '<span class="ticket-card__icon">' +
        iconSvg(cat.icon) +
        "</span>" +
        '<span class="ticket-card__title">' +
        cat.name +
        "</span>" +
        '<span class="ticket-card__prompt">' +
        cat.prompt +
        "</span>" +
        '<span class="ticket-card__blurb">' +
        cat.blurb +
        "</span>" +
        '<span class="ticket-card__check" aria-hidden="true"></span>' +
        "</label>"
      );
    }).join("");
    grid.innerHTML = html;
    wireRepairSelection();
  }

  function wireRepairSelection() {
    var radios = document.querySelectorAll('input[name="repair-category"]');
    var callBtn = document.getElementById("repair-call");
    var waBtn = document.getElementById("repair-wa");
    var hint = document.getElementById("repair-cta-hint");
    if (!callBtn || !waBtn) return;

    function setSelection(cat) {
      if (callBtn) callBtn.setAttribute("href", ZENITH.phoneHref);
      if (cat) {
        waBtn.setAttribute("href", buildWhatsAppUrl(cat.whatsappMessage));
        if (hint) hint.textContent = "Selected: " + cat.name + " — reach us:";
      } else {
        waBtn.setAttribute("href", buildWhatsAppUrl(GENERAL_MESSAGE));
        if (hint) hint.textContent = "Select an appliance above, or send a general enquiry:";
      }
    }

    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        var cat = REPAIR_CATEGORIES.filter(function (c) {
          return c.id === radio.value;
        })[0];
        setSelection(cat);
      });
    });

    setSelection(null);
  }

  /* ----------------------------------------------------------------
   * Render: product category tiles — icon + name only.
   * Contact happens via the hero, header, or contact-section CTAs,
   * not a button on every tile.
   * -------------------------------------------------------------- */
  function renderProductCards() {
    var grid = document.getElementById("product-grid");
    if (!grid) return;
    var html = PRODUCT_CATEGORIES.map(function (cat) {
      return (
        '<div class="product-tile">' +
        '<span class="product-tile__icon">' +
        iconSvg(cat.icon) +
        "</span>" +
        '<span class="product-tile__title">' +
        cat.name +
        "</span>" +
        "</div>"
      );
    }).join("");
    grid.innerHTML = html;
  }

  /* ----------------------------------------------------------------
   * Render: FAQ
   * -------------------------------------------------------------- */
  function renderFAQ() {
    var list = document.getElementById("faq-list");
    if (!list) return;
    var html = FAQS.map(function (item, i) {
      return (
        '<details class="faq-item"' +
        (i === 0 ? " open" : "") +
        ">" +
        '<summary class="faq-item__q">' +
        item.q +
        '<span class="faq-item__icon" aria-hidden="true"></span>' +
        "</summary>" +
        '<div class="faq-item__a"><p>' +
        item.a +
        "</p></div>" +
        "</details>"
      );
    }).join("");
    list.innerHTML = html;
  }

  /* ----------------------------------------------------------------
   * Structured data (LocalBusiness) — built only from confirmed facts
   * -------------------------------------------------------------- */
  function injectStructuredData() {
    var data = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: ZENITH.businessName,
      alternateName: ZENITH.legalName,
      description:
        "Multi-brand appliance repair, servicing and sales of electronics, home appliances and kitchenware in Navsari, Gujarat.",
      address: {
        "@type": "PostalAddress",
        streetAddress: ZENITH.address.street,
        addressLocality: ZENITH.address.locality,
        addressRegion: ZENITH.address.region,
        postalCode: ZENITH.address.postalCode,
        addressCountry: ZENITH.address.country,
      },
      telephone: ZENITH.phoneDisplay,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: ZENITH.hours.weekdayOpens,
          closes: ZENITH.hours.weekdayCloses,
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: ZENITH.hours.sundayOpens,
          closes: ZENITH.hours.sundayCloses,
        },
      ],
      areaServed: "Navsari and nearby villages",
      hasMap: ZENITH.mapsUrl,
    };

    if (ZENITH.siteUrl && ZENITH.siteUrl.indexOf("REPLACE_WITH") !== 0) {
      data.url = ZENITH.siteUrl;
      data.image = ZENITH.siteUrl.replace(/\/$/, "") + "/assets/images/logo.png";
    }

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /* ----------------------------------------------------------------
   * Mobile nav toggle
   * -------------------------------------------------------------- */
  function wireMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus();
      }
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------------------------------
   * Smooth scroll for in-page anchors (respects reduced motion)
   * -------------------------------------------------------------- */
  function wireAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href").slice(1);
        var target = id && document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ----------------------------------------------------------------
   * Header shadow on scroll (purely cosmetic, cheap)
   * -------------------------------------------------------------- */
  function wireHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------------
   * Optional tracking hooks — inactive unless ZENITH.tracking.gtagId is set
   * -------------------------------------------------------------- */
  function wireOptionalTracking() {
    document.querySelectorAll("[data-track]").forEach(function (el) {
      el.addEventListener("click", function () {
        var label = el.getAttribute("data-track");
        if (ZENITH.tracking.gtagId && typeof window.gtag === "function") {
          window.gtag("event", "click", { event_category: "contact", event_label: label });
        }
        // No third-party tracking runs unless you wire it up yourself. See README.
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireGlobalCTAs();
    renderRepairCards();
    renderProductCards();
    renderFAQ();
    injectStructuredData();
    wireMobileNav();
    wireAnchorScroll();
    wireHeaderScroll();
    wireOptionalTracking();
    document.getElementById("year").textContent = new Date().getFullYear();
  });
})();
