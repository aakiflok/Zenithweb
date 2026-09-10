# Zenith Navsari

Static website for appliance repair, service and sales in Navsari.

Live website: https://zenithweb-gold.vercel.app/

## Files

- `index.html`: page content
- `assets/css/styles.css`: styling and responsive layout
- `assets/js/site-config.js`: business details, opening hours, categories and FAQs
- `assets/js/main.js`: contact links, cards, navigation and contact click hooks
- `assets/images/`: logos and supplied shop photos
- `robots.txt` and `sitemap.xml`: search discovery

## Editing and publishing

Keep the assets folder structure intact when uploading or deploying. No framework, dependency installation or build command is needed. Serve this repository root as a static website.

Opening hours use display labels and 24-hour structured-data fields in site-config.js; update both together. Contact links include working HTML fallbacks. If the phone or WhatsApp number changes, update those fallback links in index.html too.

The primary website is hosted on Vercel. The production branch is main; confirm the Vercel deployment after merging. The older Sites publication is a separate deployment.

If moving to another domain, update the canonical and Open Graph URLs in index.html, siteUrl in site-config.js, robots.txt and sitemap.xml.

Analytics is off by default. To enable it, install your Google tag and configure tracking.gtagId. Contact events count clicks, not confirmed bookings.

## Local search pages

The homepage targets appliance repair in Navsari. Dedicated pages cover washing machine repair, refrigerator/fridge repair, other appliance services and contact enquiries. Each directory contains a static index.html with its own canonical URL. Keep sitemap.xml aligned with these routes.

LocalBusiness JSON-LD is embedded in each page, so it is available without JavaScript. When business details change, update that data and visible contact details across all pages as well as site-config.js. Do not add ratings, guarantees, prices or service areas without verified business information.

## Google account follow-up

Verify the Vercel URL-prefix property in Search Console and submit /sitemap.xml. Check URL Inspection after deployment; do not assume submission guarantees indexing. Set the same primary website address on the verified Business Profile and relevant Ads landing pages.

Analytics remains off until a real Google tag and conversion configuration are supplied. Existing contact hooks record clicks only when configured; do not label these as confirmed leads or bookings. The new pages provide separate landing URLs for washing-machine and refrigerator campaigns.