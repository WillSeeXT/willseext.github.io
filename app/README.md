# Eleventy Docker Simple Site

This is a minimal Eleventy setup meant to work with the provided `docker-compose.yml` at the repo root.

## Structure
```
app/
  .eleventy.js          # Eleventy configuration
  src/
    index.njk           # Home page (Hello World)
    _includes/
      layouts/
        base.njk        # Base layout template
  public/               # Static assets copied as-is
```

## Running (with Docker Compose)
From the repository root run:
```bash
# Start (builds image if needed)
docker compose up

# Or in detached mode
docker compose up -d
```
Then open: http://localhost:8010

Eleventy will rebuild automatically when you edit files under `app/`.

## Stopping
```bash
docker compose down
```

## Adding Pages
Create new `.njk` or `.md` files in `app/src/` with front matter:
```njk
---
layout: base.njk
title: About
---
<h1>About</h1>
<p>More content...</p>
```
