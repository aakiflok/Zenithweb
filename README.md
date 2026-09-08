# Zenith Navsari — Landing Page

A single-page, static website (plain HTML/CSS/JS — no build step, no framework, no server needed) built for Google Search ads and general local traffic.

## What's here

```
index.html               The whole page
assets/css/styles.css    All styling
assets/js/site-config.js EDIT THIS for business details, categories, FAQ
assets/js/main.js        Page behavior (renders cards/FAQ, builds call & WhatsApp links)
assets/images/           Logo + your supplied photos, already compressed for web
robots.txt, sitemap.xml  Basic SEO files (need your domain filled in — see below)
```

## Editing content (the one place that matters)

Almost everything you'll ever want to change lives in **`assets/js/site-config.js`**:

- Phone number, WhatsApp number
- Address
- Google Maps link
- Opening hours
- The list of repair categories (name, prompt, description, WhatsApp message)
- The list of products for sale
- The FAQ questions and answers

Change a value there, save, refresh the page — done. You don't need to touch the HTML for any of that.

To change photos, drop a new file into `assets/images/` and update the filename in `index.html` (search for the old filename).

## Before you launch — 3 things still needed

1. **Domain name.** Once you have one, replace `REPLACE_WITH_YOUR_DOMAIN` in:
   - `index.html` (the commented-out `<link rel="canonical">` near the top — uncomment it and fill in your domain)
   - `assets/js/site-config.js` (`siteUrl` field)
   - `robots.txt` and `sitemap.xml`

2. **Verified Google Business Profile link (optional but recommended).** The Maps link currently in `site-config.js` (`mapsUrl`) is the one you shared. If you later get a verified Google Business Profile listing with its own link, swap it in there — it's used for both the "Get Directions" button and the site's structured data.

3. **Visiting/inspection charge amount**, if you ever want to publish it. Right now the site intentionally says "contact us for details" everywhere, per your instructions.

## Deploying to Netlify or Vercel

Both work the same way for a static site like this — no build command needed.

**Netlify (drag-and-drop, easiest):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `zenith-site` folder onto the page
3. Netlify gives you a live URL immediately (like `random-name-123.netlify.app`)
4. In Site settings → Domain management, you can add your own domain later, or keep the free one to start

**Netlify or Vercel via Git (recommended once you're ready to iterate):**
1. Create a new GitHub repository and push this folder to it
2. On Netlify: "Add new site" → "Import an existing project" → pick the repo → **Build command: leave blank, Publish directory: `/`** → Deploy
3. On Vercel: "Add New Project" → import the repo → Framework preset: **Other** → **Build command: none, Output directory: `./`** → Deploy
4. Every time you push a change to GitHub, the site updates automatically

Either way, once deployed, come back and fill in the domain steps above.

## Tracking (optional, off by default)

Every Call/WhatsApp button has a `data-track="..."` attribute so you can wire up analytics later without touching the HTML again. Right now nothing is tracked — `site-config.js` has an empty `tracking.gtagId`. If you want Google Analytics/Ads conversion tracking:
1. Add your Google tag `<script>` snippet to `index.html`'s `<head>`
2. Set `tracking.gtagId` in `site-config.js`
3. `main.js` will start firing a `gtag('event', 'click', ...)` call on every Call/WhatsApp button automatically

This only counts as a *button click*, not a completed call or a qualified lead — worth keeping in mind when you look at the numbers.

## Notes on what was intentionally left out

- No prices, stock, brand list, or visiting-charge amount are shown anywhere — none were supplied, and the copy is written to avoid implying any.
- No testimonials, ratings, or "authorized service centre" claims — none were confirmed.
- No online checkout, accounts, or contact forms — Call and WhatsApp are the only conversion paths, as requested.

## Still to send my way (optional)

- The close-up shop-front photo you mentioned as "Image 2" didn't come through in the upload — happy to drop it into the hero once you resend it.
- Any more staff/customer photos, if you'd like a bigger gallery — I used one of the four you sent (the counter handshake photo) to keep the About section uncluttered; the others are easy to swap in.
