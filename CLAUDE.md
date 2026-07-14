# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page marketing/catalog website for **Ramganga Jewellers** (Aligarh, UP). Pure static site — no build tools, no framework, no package manager, no tests. Vanilla HTML/CSS/JS served directly.

## Running it

Open `index.html` in a browser, or serve the folder statically:

```
python -m http.server 8000    # then visit http://localhost:8000
```

There is nothing to build, lint, or test. Changes are visible on browser refresh.

## Architecture

Three source files do all the work:

- **`index.html`** — Static section shells only (hero, stats, categories, featured, testimonials, collections, about, contact, footer). Product/category grids are **empty containers** (`#category-grid`, `#featured-grid`, `#products-grid`) filled by JS at runtime. Testimonials, contact info, and phone numbers are hardcoded here.
- **`js/products.js`** — The data layer. Two global arrays: `PRODUCTS` (each item: `id, name, description, category, image, material, gemstone, weight, featured`) and `CATEGORIES` (each: `slug, name, icon, description`). This is the single source of truth for the catalog — edit here to add/change products. No backend, no fetch; data ships in the page.
- **`js/app.js`** — All behavior. `DOMContentLoaded` calls a fixed list of `init*`/`render*`/`setup*` functions. Renders cards by mapping over `PRODUCTS`/`CATEGORIES` into template-literal HTML strings, wires filtering, modal, nav, and a large set of scroll/cursor/parallax/tilt effects.

`products.js` must load before `app.js` (it does, via script order in `index.html`) — `app.js` reads the globals directly.

### Key coupling points

- **Category `slug` is the join key.** A product's `category` must exactly match a `CATEGORIES.slug`, the `data-category` on a `.filter-btn` in `index.html`, and any `scrollToProducts('<slug>')` call. Adding a category = update all three places.
- **Filter buttons are hardcoded** in `index.html` (`.filter-bar`), not generated from `CATEGORIES`. Adding a category needs a matching button added by hand.
- **`featured: true`** flags a product into the Featured section (`renderFeatured`).
- **Product images** live in `product-images/`; `image` paths are relative. Missing images fall back to an inline SVG gem placeholder (see `onerror` in `productCard`).
- **`renderProducts` re-runs `initScrollReveal()`** after injecting cards so newly-rendered elements get observed.

### External dependencies (CDN, no local copies)

Google Fonts (Playfair Display, Poppins) and Font Awesome 6.5.1 are loaded from CDN in `index.html`. Category/product icons are Font Awesome class strings stored in the data (`CATEGORIES[].icon`).

### Contact / business info is duplicated

Phone number, WhatsApp link (`wa.me/...`), address, and hours appear in multiple hardcoded spots: navbar/hero CTAs, contact section, footer, floating WhatsApp button (`index.html`), and the modal's WhatsApp enquiry link (`app.js` `openModal`). Changing the number means updating all of them — recent commits show this is a recurring gotcha.

## Effects & mobile

`app.js` gates several effects behind `window.innerWidth < 768` (custom cursor, parallax, magnetic buttons, tilt cards) — they are desktop-only by design. Preserve these guards when editing; they exist for mobile scroll performance.