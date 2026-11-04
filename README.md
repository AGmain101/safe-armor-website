# Safe Armor PPE Supplies UG Ltd — Website

A fast, static website (HTML, CSS, JavaScript; no build step), ready for Netlify.

## Pages
| File | Page |
|---|---|
| `public/index.html` | Home: hero with a torch effect, Protection Map, PPE range rail, how we work, values, sectors |
| `public/about.html` | Who we are, vision, mission, objectives, values, directors, company details |
| `public/products.html` | Full PPE range with search and the **quote list** |
| `public/contact.html` | Contact details, email directory, quote request and enquiry forms |
| `public/thank-you.html` | Shown after a form is sent |
| `public/404.html` | "Area restricted" page for broken links |

## Preview on your computer
Double-click `public/index.html`. Everything works locally; forms show a "preview mode" note and only send once the site is on Netlify.

## Update company details (one file)
Open `public/assets/js/config.js`: phone, WhatsApp, the five company email addresses, address, P.O. Box,
office hours, registration no., directors (names, titles, short profiles, company emails), areas served,
industries served and social links (add them when the accounts exist). Every page updates automatically.
Kept off the website on purpose: TIN, trading licence, directors' personal phones and personal emails
(the TIN and licence appear in the Business Profile only).

## Update the PPE range
Open `public/assets/js/catalog.js`. Each category has a name, description, photo and a list of items.
Delete items you do not stock, rename them, or add new ones (give each item a unique `id`).

## Photos
Website photos are in `public/assets/img/photos/` (optimised WebP copies of the images in this folder).
To swap one, replace the file with a new image of the same name.
**Before going live:** several of these images come from other companies' online posts
(their file names mention CAT Workwear, MB Industrial, Dentistry99 and Big Shine Worldwide).
Replace them with your own photos or properly licensed images.

## Publish updates (Netlify CLI, from VS Code)
Open this folder in VS Code → Terminal → New Terminal, then:
```
netlify deploy          # draft: gives a preview link to check first
netlify deploy --prod   # publish to the live site
```
The folder is already linked to the Netlify site (`.netlify/state.json`). There is no build step.
If you change CSS or JS files, bump the `?v=` number on their links in the HTML pages so phones load the new version.

## Put it online (Netlify)
- **Quickest (front end only):** go to app.netlify.com → *Add new site* → *Deploy manually* and drag in the **`public` folder**.
- **Recommended (keeps the backend option):** push this whole folder to GitHub and connect it in Netlify,
  or run `netlify deploy` from this folder with the Netlify CLI. Settings come from `netlify.toml`
  (publishes `public`, includes the function in `netlify/functions`).
- Then in Netlify: **Forms → Enable form detection**, and redeploy. Quote requests and enquiries appear under *Forms*;
  add email notifications there.
- Live address: https://safe-armor.netlify.app — used for link previews (WhatsApp, Facebook, X), canonical links,
  `public/robots.txt` and `public/sitemap.xml`. If you add a custom domain later, replace it in those places
  (VS Code: Ctrl+Shift+H, find `safe-armor.netlify.app`, replace all).

## Save to Git / GitHub
First time (in the VS Code terminal, inside this folder):
```
git init -b main
git add .
git commit -m "Safe Armor website: first version"
git remote add origin https://github.com/AGmain101/safe-armor-website.git
git push -u origin main
```
Every update after that:
```
git add .
git commit -m "Describe what changed"
git push
netlify deploy --prod
```

## Backend later (optional): send forms to Google Sheets
Already wired, switched off until you add two settings:
1. Follow the steps at the top of `backend/google-apps-script/Code.gs` (2 minutes in Google Sheets).
2. In Netlify → *Environment variables* add `SHEETS_WEBHOOK_URL` and `SHEETS_TOKEN`, then redeploy.
`netlify/functions/submission-created.js` then forwards every form submission to the sheet.

## Built with
GSAP + ScrollTrigger + SplitText (animation), Lenis (smooth scrolling), Barlow / Barlow Condensed / JetBrains Mono (self-hosted fonts).
Visitors who turn off animations in their device settings get a calm, fully readable version.
