# Zenith Navsari

Static website for appliance repair, service and sales in Navsari.

Live website: https://zenith-navsari.aakiflok52-al.chatgpt.site/

## Files

- `index.html`: page content
- `assets/css/styles.css`: styling and responsive layout
- `assets/js/site-config.js`: business details, opening hours, categories and FAQs
- `assets/js/main.js`: contact links, cards, navigation and structured data
- `assets/images/`: logos and supplied shop photos
- `robots.txt` and `sitemap.xml`: search discovery

## Editing and publishing

Keep the assets folder structure intact when uploading or deploying. No framework, dependency installation or build command is needed. Serve this repository root as a static website.

Opening hours use display labels and 24-hour structured-data fields in site-config.js; update both together. Contact links include working HTML fallbacks. If the phone or WhatsApp number changes, update those fallback links in index.html too.

The current public site is hosted with Sites. Pushing to this GitHub repository does not automatically republish that deployment. Publish through the connected Sites project after validating changes.

If moving to another domain, update the canonical and Open Graph URLs in index.html, siteUrl in site-config.js, robots.txt and sitemap.xml.

Analytics is off by default. To enable it, install your Google tag and configure tracking.gtagId. Contact events count clicks, not confirmed bookings.
