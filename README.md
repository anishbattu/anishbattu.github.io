# Anish Battu — Portfolio

A single-page, no-build portfolio site (plain HTML/CSS/JS). Free to host on GitHub Pages.

## Files
- `index.html` — content and structure
- `style.css` — theme
- `script.js` — hero typing effect, expandable work-log entries, and the skill-tag "trace" filter

## Host it free on GitHub Pages (5 minutes)

1. Create a new GitHub repo, e.g. `anishbattu.github.io` (using exactly `<your-github-username>.github.io` gives you a clean root URL) — or any repo name if you're fine with a `/reponame` suffix in the URL.
2. Upload these three files (`index.html`, `style.css`, `script.js`) to the repo root — drag-and-drop on github.com works, or:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings** → **Pages** → under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)` → **Save**.
4. Wait 1–2 minutes. Your site is live at:
   - `https://<your-username>.github.io/` (if you named the repo `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` (any other repo name)

## Before you publish

- In `index.html`, find the `#contact` section and replace the four `data-placeholder` links (LinkedIn, GitHub, Medium) with your real profile URLs — search for `href="#" data-placeholder`.
- Your email is already wired up as a `mailto:` link.
- No phone number is included on the public page by design — add one in the contact section only if you're comfortable with it being public.

## Editing content later

All resume content — experience entries, bullet points, skill tags — lives in `script.js` at the top, in the `SKILL_GROUPS` and `EXPERIENCE` arrays. Edit the text there; the page re-renders from that data automatically, no HTML editing needed. Each bullet has a `tags` array — keep those in sync with the skill tag slugs so the "click a skill to trace it through the log" filter keeps working correctly.
