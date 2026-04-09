# Eric Rhodes' Personal Website

The codebase for my personal website — a digital sandbox to build in public, share works-in-progress, and archive past projects.

It's built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com)

## About

I'm Eric Rhodes (@secondrealm), I'm an artist, designer, and researcher. This site is the home for my writing, projects, research, and other public-facing work.


## Project Structure

```text
/
├── public/            # Static assets (images, fonts, favicon)
├── src/
│   ├── assets/        # Icons and images used in components
│   ├── components/    # UI components
│   ├── content/       # Main site content
│   │   └── writing/   # Historiacal rchive of writing with cannonical links
│   ├── layouts/       # Page layouts and templates
│   ├── pages/         # Site pages
│   └── styles/        # Global styles and CSS
├── package.json       # Dependencies and scripts
└── astro.config.mjs   # Astro configuration
└── LICENSE            # Dual license (CC BY 4.0 + MIT)
```

## Commands

All commands are run from the root of the project:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build locally |

## Content

Writing is stored in `src/content/writing/` as Markdown files.

The site uses Astro content collections to organize and render posts.

## Licensing

Code in this repository is licensed under the MIT License.

Written content is licensed under CC BY 4.0 unless otherwise noted.

## Notes

This repository contains the website source code and published site content.
