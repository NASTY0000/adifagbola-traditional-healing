# Next.js scaffolding (not the live site)

The live product on Vercel is the static HTML pages (`index.html`, `about.html`, `services.html`, `contact.html`, `shop.html`). `vercel.json` and `package.json` lock the project to a static deploy (`npx serve .`).

`pages/`, `components/`, and `styles/` are a leftover partial Next.js migration. They are not built. Do not add a `next.config.js` or restore Next scripts in `package.json` until a real migration is complete (homepage, shared layout, images in `public/`, and a working `next build`).
