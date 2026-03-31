# MUUSICA Website

Sitio web corporativo de MUUSICA - Música legal para negocios.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3
- **Icons**: [Lucide](https://lucide.dev/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
npm run build
```

The built site will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Astro components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── BusinessTypes.astro
│   ├── Blog.astro
│   └── ...
├── layouts/          # Page layouts
│   └── Layout.astro
├── pages/            # File-based routing
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── negocios/
│       └── [slug].astro
└── styles/           # Global styles
    └── global.css
```

## Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
3. Create a new project and connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`

### Option 2: Direct Upload

1. Build the project: `npm run build`
2. Go to Cloudflare Pages dashboard
3. Create a new project with "Direct Upload"
4. Upload the `dist/` folder

### Option 3: Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

## Features

- **Same-page navigation**: Main menu uses smooth scroll to sections
- **Business type pages**: `/negocios/[slug]` - Individual pages for each business type
- **Blog section**: `/blog` - Blog listing with individual post pages
- **Animations**: Intersection Observer based reveal animations
- **Responsive**: Mobile-first design
- **Performance**: Static site generation for fast loading

## Design Tokens

Design tokens are extracted from the Pencil design file and defined in `src/styles/global.css`:

```css
:root {
  --accent: #00D4AA;
  --primary-blue: #3B82F6;
  --primary-teal: #14B8A6;
  --primary-purple: #8B5CF6;
  --bg-page: #050508;
  /* ... */
}
```

## License

Proprietary - MUUSICA
