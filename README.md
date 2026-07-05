# The Recipe Box

A simple, mobile-friendly recipe site. No build tools, no server — just static HTML/CSS/JS, ready for GitHub Pages.

## What's in here

```
index.html              the recipe grid (home page)
recipe/index.html        the recipe detail page (reads ?id=... from the URL)
assets/style.css         all styling
assets/recipes-data.js   your recipes live here
assets/app.js            small shared helpers
```

## Adding a new recipe

Open `assets/recipes-data.js` and copy one of the existing recipe objects inside the `RECIPES` array, then edit it. Each recipe needs:

- `id` — unique, lowercase, hyphens instead of spaces (this becomes part of the URL)
- `number` — just the next number in sequence
- `category` — one of `"Breakfast"`, `"Mains"`, `"Sweets"`, `"Sides"` (or add a new category name + a matching color in `CATEGORY_COLORS` at the top of the same file)
- `servingsBase` — the serving count your ingredient amounts below are written for
- `ingredients` — array of `{ amount, unit, name }`. Use `unit: null` for countable things like "2 large eggs"
- `steps` — array of strings, one per step
- `notes` — optional, shown at the bottom of the recipe

Save the file — that's it, no rebuild step needed.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (public, so Pages can serve it for free).
2. Push these files to it. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial recipe site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two — your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO/
   ```

Share that link with anyone — it works on phone or desktop, no login needed.

## Updating later

Any time you add or edit a recipe in `assets/recipes-data.js`, just commit and push again:
```
git add .
git commit -m "Add grandma's soup recipe"
git push
```
GitHub Pages picks up the change automatically within a minute or so.
