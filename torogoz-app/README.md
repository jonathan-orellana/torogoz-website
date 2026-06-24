# Torogoz Chapter — Lambda Sigma Upsilon

Website for the Torogoz Chapter of Lambda Sigma Upsilon Latino Fraternity, Inc. at the University of Virginia. Built with React 19 + Vite 8.

## Stack

- **React 19** + **Vite 8** — component-based SPA with fast HMR
- **React Router DOM** — client-side routing, no full page reloads
- **Plain CSS** — component-scoped stylesheets, CSS custom properties for design tokens
- **Google Fonts** — Barlow Condensed (display) + Hanken Grotesk (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/our-history` | Our History |
| `/chapter-history` | Chapter History |
| `/leadership` | Leadership |
| `/philanthropy` | Philanthropy |
| `/resources` | Resources |

## Project structure

```
src/
├── main.jsx                    # App entry — mounts root, imports global styles
├── App.jsx                     # BrowserRouter + all routes + ScrollToTop
│
├── styles/
│   ├── variables.css           # Design tokens (colors, fonts, spacing) + global reset
│   └── utilities.css           # Shared classes: .btn, .wrap, .section, .kicker, .reveal
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx          # Sticky nav, mobile burger, About dropdown
│   │   └── header.css
│   ├── Footer/
│   │   ├── Footer.jsx          # Site-wide footer with nav + social links
│   │   └── footer.css
│   ├── shared/
│   │   └── JoinSection.jsx     # Sky-blue CTA band — reused on Home, Chapter History
│   └── ui/
│       ├── CompactHero.jsx     # Centered navy hero (ΛΣΥ glyph + title + subtitle)
│       ├── compact-hero.css    #   used by Leadership, Philanthropy, Resources
│       ├── PageHero.jsx        # Split-grid navy hero with stats + image
│       ├── page-hero.css       #   used by Our History, Chapter History
│       ├── EventCard.jsx       # Event card with Google Calendar + ICS download
│       └── StatCounter.jsx     # Animated count-up on scroll (IntersectionObserver)
│
├── data/                       # All page content — keeps UI components data-free
│   ├── homeData.js             # Nav links, pillars, stats, events, Instagram posts
│   ├── ourHistoryData.jsx      # LSU timeline, founding fathers, quick facts
│   ├── chapterHistoryData.js   # Chapter hero stats, founding brothers, UVA stats
│   ├── leadershipData.js       # Board members (name, role, photo, email)
│   ├── philanthropyData.js     # Intro text, feature sections, CTA copy
│   └── resourcesData.js        # Resource cards, emergency contacts
│
├── hooks/
│   └── useScrollReveal.js      # IntersectionObserver — adds .in to .reveal elements
│
├── utils/
│   ├── animateCountUp.js       # Count-up animation logic (pure, no DOM querying)
│   └── calendarUtils.js        # Google Calendar URL builder + ICS file generator
│
└── pages/
    ├── Home/
    │   ├── Home.jsx
    │   ├── home.css
    │   └── sections/
    │       ├── HeroSection.jsx
    │       ├── PurposeSection.jsx
    │       ├── PillarsSection.jsx
    │       ├── HistorySection.jsx
    │       ├── NamesakeSect.jsx
    │       ├── EventsSection.jsx
    │       └── JoinSection.jsx     # Re-exports from components/shared/JoinSection
    ├── OurHistory/
    │   ├── OurHistory.jsx
    │   ├── our-history.css
    │   └── sections/
    │       ├── TimelineSection.jsx
    │       ├── FoundingFathersSection.jsx
    │       └── QuickFactsSection.jsx
    ├── ChapterHistory/
    │   ├── ChapterHistory.jsx
    │   ├── chapter-history.css
    │   └── sections/
    │       ├── FoundingBrothersSection.jsx
    │       ├── OnGroundsSection.jsx
    │       └── TorogozMeaningSection.jsx
    ├── Leadership/
    │   ├── Leadership.jsx
    │   ├── leadership.css
    │   └── sections/
    │       └── BoardSection.jsx
    ├── Philanthropy/
    │   ├── Philanthropy.jsx
    │   ├── philanthropy.css
    │   └── sections/
    │       ├── IntroSection.jsx
    │       ├── FeatureSection.jsx  # Reusable split-grid block (navy or paper variant)
    │       └── PhilCTASection.jsx
    └── Resources/
        ├── Resources.jsx
        ├── resources.css
        └── sections/
            ├── ResourceGridSection.jsx
            └── EmergencyBandSection.jsx
```

## Assets

Static assets live in `public/assets/` and are referenced as `/assets/...` in JSX and CSS:

```
public/assets/
├── images/      # Member photos, event photos, chapter photography
├── logos/       # LSU crest, Torogoz seal, chapter marks
└── docs/        # Policy PDFs linked from the Resources page
```

## Conventions

- **Data / UI separation** — all page content lives in `src/data/`. Components receive data as props or import from data files directly; no hardcoded strings in JSX.
- **Component-scoped CSS** — each component or page imports its own `.css` file. No CSS Modules; plain class names following BEM-like conventions.
- **Shared styles** — design tokens in `variables.css`, utility classes in `utilities.css`. Both are imported once in `main.jsx`.
- **Scroll reveal** — add `className="reveal"` to any element; `useScrollReveal()` (called once per page) wires up the IntersectionObserver that adds `.in` on entry.
- **CSS variable names** — `--font-display`, `--font-body`, `--page-padding`, `--navy-text` (not the shorthand originals from the static version).
