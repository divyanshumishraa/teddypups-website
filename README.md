# TeddyPups U.A.E. — Website Assignment

A responsive React + Vite recreation of the supplied TeddyPups reference page.

## Requirements
- Node.js 18.0 or newer
- npm 9 or newer

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Included pages
- Home
- Available puppies (all 15 reference puppy listings, with breed filters)
- Puppy detail pages for each listed puppy
- Happy families (all 8 reference gallery photos)
- How it works
- FAQ
- Visit & contact
- Gone-home route redirects to the family gallery

## Images and contact details
The project includes an asset downloader that caches the 27 puppy/story/family photographs and the brand logo from the supplied reference host into `public/images/media/`. It runs automatically before `npm run dev` and `npm run build`; you can also run `npm run assets:download` manually. An internet connection is needed for the first download. If an image cannot be fetched, a local illustrated fallback is shown. Contact links use the endpoints found in the provided reference HTML; no fake form-success response or backend submission is claimed. The contact form opens the visitor's configured email application.

## Notes
- If the automatic photo download cannot reach the reference host, retry `npm run assets:download` while online before building.
- This is a front-end website recreation. No private customer database, payment processing, booking system, or server-side enquiry API is included.
- The contact form uses `mailto:` and therefore depends on the visitor having an email application configured.
