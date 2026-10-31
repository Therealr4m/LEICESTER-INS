# Eco Leicester Loft insulation

Upload the contents of this folder directly to your GitHub branch root. No build step is required.

## Requested pages

- `index.html` — supplied Leicester homepage H1, H2, introduction and five core services
- `contact.html` — quote request / contact page
- `services/loft-insulation-top-ups.html` — supplied top-ups page
- `locations/oadby.html` — supplied Oadby location page

Additional support files: `privacy.html`, `404.html`, CSS, JavaScript, images, branding assets, favicon files, robots.txt, sitemap.xml and CNAME. `blogs/` is reserved for later content. No additional dedicated service pages have been built for this brief; those navigation items lead to the relevant contact enquiry.

## Domain

All canonical tags, structured data, Open Graph URLs and sitemap entries use https://ecoleicesterloftinsulation.co.uk. CNAME contains ecoleicesterloftinsulation.co.uk. The domain still needs to be configured at your hosting provider and in DNS; including CNAME does not do that automatically.

## Before launch

The phone number, email and live form endpoint have not been supplied. The contact form previews locally only and sends nothing. Confirm those details, connect the endpoint with server validation/spam handling, update the privacy information and remove review notices before launch.

The 14 years of experience and local service claims were supplied by the client. The 270mm wording is qualified for mineral wool; it does not apply to rigid PIR boards. Competitor rankings remain research notes and are not published as website copy.

## Existing repository cleanup

If replacing the earlier draft, remove obsolete website files so visitors and search engines do not see the wrong branding or old pages. Previous extra pages include about.html, gallery.html, faqs.html, services/loft-insulation.html, services/loft-boarding.html, services/loft-insulation-removal.html, locations/index.html, locations/leicester.html and the old blog HTML pages. Keep unrelated repository files and Git configuration. The new navigation and sitemap reference only the new brief.

## Preview

Open index.html locally, or run `python -m http.server 8000` in this folder. Styles are in styles.css and interactive behaviour is in nav.js. Nested pages use ../ paths. Each page has its own header/footer; keep navigation consistent when editing.
