# LengthHairCare Website

LengthHairCare is a small, multi-page website for a South African natural hair-care brand. It introduces the brand, shares a beginner-friendly guide to hair porosity, and lets visitors browse products and make enquiries. This project was built for the WEDE5020 Web Development POE.

## Pages

- `index.html` - brand introduction and featured products.
- `pages/products.html` - products rendered from a JavaScript list, with search, category filtering and an image lightbox.
- `pages/enquiry.html` - expandable porosity guide and a validated product recommendation form.
- `pages/about.html` - the brand story, mission and values.
- `pages/contact.html` - general contact form and an interactive South Africa service-area map.

## Features added for Part 3

- Product cards are created from a JavaScript array. Search is case-insensitive, category filters can be combined with search, and an empty message appears when there are no matches.
- Product images open in a responsive lightbox. It can be closed with the close button, by clicking the dark background or by pressing Escape. Focus returns to the image button after closing.
- The hair porosity guide uses keyboard-operable expandable cards.
- The enquiry form checks required fields, email format and message length before showing a personalised response. It identifies the selected product and explains that unlisted prices and availability are confirmed on enquiry.
- Product links pass their selection to the enquiry page.
- The contact form checks its fields and prepares an email addressed to `info@lengthhaircare.co.za` in the visitor's email application. The visitor must press Send; the static site cannot confirm that an email was delivered. A real server-side form service would be needed for confirmed sending.
- The MapLibre map uses OpenFreeMap vector tiles and shows the approximate centre of South Africa as a service-area marker. It does not represent a physical store address. The map requires an internet connection.
- Each page has its own title and search description. Important images have descriptive filenames and alt text. `robots.txt` and `sitemap.xml` are included.
- The shared stylesheet retains the botanical colours and responsive layout, and adds reduced-motion support, clear keyboard focus, form feedback and mobile map styling.

## Technology

HTML5, CSS3 and plain JavaScript. The contact map uses MapLibre GL JS with OpenFreeMap vector tiles and map attribution. No build step or API key is required.

## Run locally

Open `index.html` in a browser, or serve the project folder with a simple local web server. A local server is recommended for consistent browser behaviour. The search, gallery and forms run in the browser. The map needs an internet connection to load MapLibre and map tiles.

## Part 2 feedback and changelog

The notes carried over in the earlier README mention adding photos and comments, using semantic elements, adding detail to the README and making regular commits. The existing project already had a hero section and product photos; this update keeps them, adds meaningful image descriptions and comments around new behaviour, improves documentation, and records the Part 3 work below. There was no separate lecturer feedback sheet in the supplied files, so these are the notes visible in the existing README rather than a claim that every lecturer comment has been reviewed.

### 2026-10-29 - Part 3

- `pages/products.html`, `javascript/script.js`: added a data-driven product catalogue, combined search and category filter, live result count and no-results guidance. Product cards link to a preselected enquiry.
- `assets/`, `pages/products.html`, `javascript/script.js`: renamed images used by the site with descriptive filenames and added an accessible enlarged-image lightbox with close-button, background-click and Escape controls.
- `pages/enquiry.html`, `javascript/script.js`: added expandable porosity guidance and required, length-limited form controls with immediate browser validation and a product-specific response.
- `pages/contact.html`, `javascript/script.js`: clarified the distinction between general contact and product enquiries; added a validated email-draft workflow with truthful delivery wording.
- `pages/contact.html`, `javascript/script.js`, `css/style.css`: added a responsive MapLibre service-area map with OpenFreeMap tiles, a clearly explained approximate marker and a fallback message.
- `index.html`, `pages/about.html`, `pages/products.html`, `pages/enquiry.html`, `pages/contact.html`: added unique titles, descriptions and relevant keywords; improved navigation labels and image descriptions.
- `robots.txt`, `sitemap.xml`: added basic crawler guidance and a sitemap for the GitHub Pages address associated with this repository. Update the sitemap if the final deployment uses another domain.
- `README.md`: documented features, setup, dependencies, limitations and this changelog.

## Deployment

The repository is `ogundipetumbi/My-website-main2`. The expected GitHub Pages address is `https://ogundipetumbi.github.io/My-website-main2/`, but deployment status was not available in the supplied files and has not been confirmed. Enable GitHub Pages in the repository settings, then visit the published site and check every page, image path, map, form and search control. Update the canonical URL in `sitemap.xml` if the published address differs.

## Image and service credits

The product and design images are the assets supplied with this project. Their original creator/licence information was not included in the zip; confirm that you have permission to use them and add credits if required. MapLibre GL JS is provided under its open-source licence. OpenFreeMap serves map data based on OpenStreetMap and supplies map attribution.

## Folder structure

```text
assets/          Product and project images
css/style.css    Shared styling
javascript/      Browser interactions
pages/           Products, hair guide, about and contact pages
index.html       Home page
robots.txt       Crawler instructions
sitemap.xml      Page list for search engines
README.md        Project notes and changelog
```

## Known limitations

- The contact form opens a visitor's mail app; it is not a guaranteed server-side email service.
- The map is an online service-area illustration, not a business address. It depends on the MapLibre CDN and OpenFreeMap availability.
- Most product prices are intentionally shown as available on enquiry because no confirmed prices were supplied.
- GitHub Pages has not been confirmed as enabled. The site should be checked at its published URL before submission.
- Part 2 feedback is documented from the notes that were present in the supplied README. Add any additional lecturer comments and the specific corrections they require.

## References

- MapLibre GL JS, *Display a map*: https://maplibre.org/maplibre-gl-js/docs/examples/display-a-map/
- OpenFreeMap, *Quick Start Guide*: https://openfreemap.org/quick_start/
- MDN Web Docs: https://developer.mozilla.org/


### 2026-10-29 - Map tile correction

- `pages/contact.html`, `javascript/map.js`, `javascript/script.js`, `css/style.css`: replaced the OpenStreetMap raster tile requests after the browser returned HTTP 403 in local testing. The map now uses MapLibre GL JS with the OpenFreeMap Liberty vector style, retains the South Africa service-area marker, and keeps a fallback message for network failures.
