# LSU Torogoz Chapter — Website

Static website for the Torogoz Chapter of Lambda Sigma Upsilon Latino Fraternity, Inc. at the University of Virginia.

## Pages

| File                   | Page                                     |
| ---------------------- | ---------------------------------------- |
| `index.html`           | Home                                     |
| `our-history.html`     | Our History (national LSU history)       |
| `chapter-history.html` | Chapter History (Torogoz founding story) |
| `leadership.html`      | Leadership / Executive Board             |
| `philanthropy.html`    | Philanthropy                             |
| `resources.html`       | Chapter Resources                        |

## Structure

```
lsu-torogoz-website/
├── index.html
├── our-history.html
├── chapter-history.html
├── leadership.html
├── philanthropy.html
├── resources.html
├── assets/
│   ├── images/   — photos used across the site
│   ├── icons/    — SVG icon files
│   └── logos/    — logo files
├── css/          — one stylesheet per page (all import home.css base)
├── js/           — countup.js and any future scripts
└── docs/         — project documentation
```

## Development

Open any `.html` file in a browser — no build step required.

Open `index.html` in a browser to view the site locally. Keep HTML pages in
the project root so their shared relative links remain consistent.

See `docs/maintenance-guide.md` before adding or moving pages and assets.
