# Maintenance Guide

## Adding a Page

1. Add the HTML file to the project root using a lowercase, hyphenated name.
2. Link shared styles with `css/home.css`.
3. Place page-specific styles in `css/`.
4. Update the navigation and footer links on every page.

## Adding Assets

- Put photographs and general artwork in `assets/images/`.
- Put SVG interface icons in `assets/icons/`.
- Put chapter and fraternity marks in `assets/logos/`.
- From a root HTML page, reference an image as `assets/images/file.jpg`.
- From a stylesheet in `css/`, reference it as `../assets/images/file.jpg`.

## JavaScript

Place shared scripts in `js/` and load them from root HTML pages with a path
such as `js/main.js`.

After moving or renaming anything, check all local `href`, `src`, and CSS
`url()` references.
