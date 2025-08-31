# willseext.github.io

Static site built with Eleventy and deployed to GitHub Pages.
TEST TEST TEST
## Local development (Docker)
```fish
# from repository root
docker compose up
# open http://localhost:8010
```

## Build & deploy with GitHub Actions
- Workflow: `.github/workflows/deploy.yml`
- Builds `app/` with Eleventy (Node 20) and uploads `app/_site` to GitHub Pages.
- Triggers on pushes to `main`, `master`, or `features/first_draft`, or manual dispatch.

## First-time setup on GitHub
1. Push this repository to GitHub.
2. In the repo: Settings → Pages → Build and deployment → Source: GitHub Actions.
3. Run the workflow (push or manual run). After success, the site is served at:
   - User/Org site: `https://<username>.github.io/`
   - Project site: `https://<username>.github.io/<repo>/` (if repo name differs)

## Project layout
```
app/
  .eleventy.js
  package.json
  src/
    index.md
    _includes/layouts/base.njk
  public/
```
