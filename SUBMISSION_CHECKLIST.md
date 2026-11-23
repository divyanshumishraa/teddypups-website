# Submission checklist

1. Extract this ZIP.
2. Open the `teddypups-react` folder in VS Code.
3. Run `npm install`.
4. Run `npm run assets:download` (also runs automatically before dev/build) and check that the puppy and family photos are saved under `public/images/media/`.
5. Run `npm run dev` and review the home page, all 15 puppy cards, all 8 family photos, detail pages, navigation, mobile layout, and enquiry links.
6. Run `npm run build`. Submit the generated `dist/` folder only if the build succeeds.
7. Push the complete source folder to GitHub and deploy the production build.
8. Record the requested Loom walkthrough showing the live site, repository, and code structure.

The asset downloader needs an internet connection to fetch the original reference photographs. If the reference host is unavailable, the site uses its bundled illustrated fallback for missing photos; retry the downloader before submitting if any fallback remains visible.
