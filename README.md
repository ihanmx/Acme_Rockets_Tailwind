# 🚀 Acme Rockets

A simple responsive website built with **Tailwind CSS v4**, featuring dark mode, animated mobile navigation, and smooth UI interactions.

**Live site:** https://acmerockettailwind.netlify.app

---

## Features

- Responsive layout — mobile, tablet, and desktop
- Dark / light mode toggle with localStorage persistence (respects OS preference)
- Custom Tailwind v4 variants: `widescreen`, `tallscreen`, `dark`
- Smooth mobile menu open animation
- Sections: Hero, Rockets, Testimonials, Contact, Footer

---

## Tech Stack

- [Tailwind CSS v4](https://tailwindcss.com)
- Vanilla JavaScript
- HTML5
- Deployed on [Netlify](https://netlify.com)

---

## Project Structure

```
├── build/               # Static output (deployed to Netlify)
│   ├── index.html
│   ├── js/
│   │   └── main.js
│   ├── style/
│   │   └── output.css
│   └── image/
├── src/
│   └── input.css        # Tailwind source with custom variants and utilities
├── package.json
└── README.md
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run Tailwind in watch mode (development)

```bash
npm run tailwind
```

### Build for production

```bash
npm run build
```

---

## Deployment

The site is deployed on Netlify directly from the `build/` folder with no build step required — the compiled CSS is committed to the repository.

**Netlify settings:**
- Build command: *(empty)*
- Publish directory: `build`

---

## Custom Tailwind Variants

Defined in `src/input.css`:

| Variant | Condition |
|---|---|
| `widescreen` | `min-aspect-ratio: 3/2` |
| `tallscreen` | `max-aspect-ratio: 9/16` |
| `dark` | `.dark` class on `<html>` (class-based) |
