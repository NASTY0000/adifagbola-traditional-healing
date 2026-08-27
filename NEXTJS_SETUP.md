# Next.js scaffolding (not the live site)

The live product on Vercel is the static HTML pages (`index.html`, `about.html`, `services.html`, `contact.html`, `shop.html`). `vercel.json` locks the project to a static deploy so Vercel does not treat `package.json` as a Next.js app.

`pages/`, `components/`, `styles/`, and `package.json` are a partial Next.js migration. Do not add a `next.config.js` or flip the Vercel framework to Next until that migration is complete (homepage, shared layout, images in `public/`, and a working `next build`).

To run the Next about page locally:

```bash
npm install
npm run dev
```

Then visit http://localhost:3000/about
