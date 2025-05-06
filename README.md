# flowerlani-portfolio

Personal portfolio site for Leilani (aka flowerlani).

Built with Astro + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Deployment to GitHub Pages

1. Ensure `base` and `outDir` are set in `astro.config.mjs`:
   ```js
   base: '/flowerlani-portfolio/',
   outDir: 'docs',
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Commit and push the `docs/` directory to the `main` branch:
   ```bash
   git add docs
   git commit -m "chore: deploy to GitHub Pages"
   git push origin main
   ```

4. In your GitHub repository settings under **Pages**, select **main branch** and `/docs` folder as the source and save.

5. Visit `https://<your-username>.github.io/flowerlani-portfolio/` (replace `<your-username>` with your GitHub username) to see your live site.