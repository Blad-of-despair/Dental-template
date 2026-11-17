# Yashoda Dental Clinic

A modern, single-page dental clinic website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## About

Yashoda Dental Clinic is a trusted neighborhood dental clinic in Surya Nagar, Lucknow. This website showcases the clinic's services, team, testimonials, and provides an appointment booking form.

## Tech Stack

- [React 19](https://react.dev/) with TypeScript
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons
- [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) — class name utilities
- [Oxlint](https://oxc.rs/docs/guide/usage/linter/rules) — linting

## Getting Started

### Prerequisites

- Node.js (v20+) and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

Production output goes to `dist/`.

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
nova-dental/
├── index.html
├── public/
│   ├── assets/
│   │   └── hero.jpeg
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css          # Tailwind + custom theme
│   ├── App.css            # (empty, unused)
│   ├── data/
│   │   └── yashoda.ts     # All clinic content & config
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Booking.tsx
│   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── index.ts
│   │       ├── MixedHeading.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── TextButton.tsx
│   │       └── FadeUp.tsx
│   └── assets/
│       └── hero.png
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .oxlintrc.json
├── .gitignore
├── LICENSE
└── README.md
```

## Customization

All clinic content lives in `src/data/yashoda.ts`. To adapt this template for another clinic, edit:

- `clinic` — name, phone, email, address, hours, WhatsApp, map URL, ratings
- `hero` — headline, badge, subhead, CTA, image
- `about`, `services`, `whyUs`, `team`, `testimonials`, `faqs`, `booking`, `footer` — section content

Images are loaded from Unsplash by default. Replace URLs with your own photos as needed.

## Sections

1. **Hero** — clinic branding, CTA, WhatsApp booking
2. **About** — clinic story, stats, doctor info
3. **Services** — expandable treatment cards
4. **Why Us?** — feature highlights with icons
5. **Team** — doctor profiles
6. **Testimonials** — patient reviews with ratings
7. **FAQ** — accordion-style questions
8. **Booking** — appointment request form
9. **Footer** — links, contact, copyright

## License

[MIT](LICENSE)

## Deployment

Build the project (`npm run build`) and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
