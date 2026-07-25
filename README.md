# FitFat Fitness — Website

A single-page bilingual (English / Arabic) site for FitFat Fitness, a ladies-only gym in Hamad Town, Bahrain.

## Files

- `index.html` — page structure and content
- `style.css` — all styling, including the fonts and background photos embedded directly in the file (no separate asset files or external requests)
- `script.js` — the language switcher (EN/AR with RTL layout) and the live "open now" hours status
- `README.md` — this file

Everything the site needs is in these three files. There's nothing to build or install.

## Publish it with GitHub Pages (free hosting)

1. Create a new repository on GitHub (public repos get free Pages hosting).
2. Add these three files to the repository, either:
   - **Via the GitHub website:** open the repo → **Add file → Upload files** → drag in `index.html`, `style.css`, and `script.js` → commit.
   - **Via git on your computer:**
     ```bash
     git init
     git add index.html style.css script.js README.md
     git commit -m "Add FitFat Fitness website"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-repo>.git
     git push -u origin main
     ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. GitHub will publish the site at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## Editing content

- **Text (English & Arabic):** open `script.js` — every piece of copy lives in the `STRINGS.en` and `STRINGS.ar` objects near the top of the file, as `'key': 'text'` pairs. Edit the text between the quotes.
- **Membership prices:** search `script.js` for `plan.pm1` through `plan.pm5` (the per-month rates) and `plan.d1` through `plan.d5` (the durations). The prices displayed as big numbers ("30", "55", "80"...) are in `index.html`, in the `.price` spans inside the `.plans` section.
- **Phone number / address / hours:** these appear in both `index.html` (as fallback/default text) and `script.js` (as the English and Arabic translations) — update both so the two stay in sync.
- **Colors:** open `style.css` and edit the `:root { ... }` block near the top — `--rose-500`, `--umber-900`, etc. are the palette variables used throughout.

## Notes

- The page has no server, database, or build step — it's plain HTML/CSS/JS and works from any static host (GitHub Pages, Netlify, Vercel, or just opening `index.html` directly in a browser).
- The three background photos (from Pexels, free to use) and all fonts are embedded as data directly inside `style.css`, so the site has zero external network requests and will never break due to a missing image or font file.
- "Call to Join" and phone links use `tel:` links, which open the phone app on mobile devices. On desktop they typically prompt to open a calling app.
