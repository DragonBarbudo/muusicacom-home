# MUUSICA Website - Agent Instructions

This is an **Astro 4.x** static website with TypeScript and Tailwind CSS. The project was initially an SST v3 monorepo but has been migrated to a simple Astro static site.

## Project Structure

```
├── src/
│   ├── components/          # Astro components
│   │   ├── blog/           # Blog-specific components (AlertBox, StatCard, etc.)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro      # Homepage hero with audio visualizer
│   │   └── ...
│   ├── content/            # Astro Content Collections
│   │   └── blog/          # Blog posts (MDX files)
│   ├── data/              # Data helpers (blog.js)
│   ├── layouts/           # Astro layouts
│   ├── pages/             # Page routes
│   │   ├── blog/         # Blog listing and individual posts
│   │   ├── negocios/     # Business type pages
│   │   └── index.astro   # Homepage
│   └── styles/           # Global styles (globals.css)
├── docs/                 # Documentation
│   └── BLOG_GUIDE.md    # Guide for creating blog posts
├── dist/                # Build output (gitignored)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json
```

## Tech Stack

- **Framework**: Astro 4.x (Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX via @astrojs/mdx
- **Icons**: Lucide (via data-lucide attributes)
- **Package Manager**: npm

## Blog System (Content Collections)

Blog posts are in `src/content/blog/` as **MDX files** (not .md).

### Key Points:
1. **File format**: Use `.mdx` extension, not `.md`
2. **Components**: Import components at the top of each MDX file
3. **Frontmatter**: Required fields include title, excerpt, category, date, author, gradient, featured
4. **Components available**:
   - `AlertBox` (warning/info/success/danger)
   - `StatCard` + `StatsGrid` (statistics)
   - `ComparisonTable` (comparisons with highlighting)
   - `FeatureList` (cards/list/compact variants)
   - `Quote` (testimonials)
   - `CTABox` (call-to-actions)
   - `StepList` (numbered steps)
   - `InfoCard` (highlighted info boxes)
   - `ProsCons` (side-by-side comparison)

### **CRITICAL**: CTA Button Links
All `CTABox` components **MUST** use:
```mdx
buttonLink="https://play.muusica.com"
```
Never use `/` or any other URL.

### Color Values for StatCard
Valid colors: `teal`, `blue`, `purple`, `amber`, `red`
- Invalid: `orange`, `green`, `indigo`, `pink`

### See full guide:
**docs/BLOG_GUIDE.md** - Complete guide for creating blog posts

## Available Gradients for Blog Posts

```
from-primary-blue to-primary-purple
from-primary-teal to-primary-blue
from-primary-purple to-pink-500
from-red-500 to-orange-500
from-amber-500 to-yellow-500
from-indigo-500 to-purple-500
from-orange-500 to-red-500
from-pink-500 to-rose-500
```

## Common Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Lucide Icons

Icons are rendered via `data-lucide` attributes. Example:
```html
<i data-lucide="check" class="w-5 h-5 text-primary-teal"></i>
```

Icons are automatically initialized by Lucide on page load.

## Styling Conventions

- **Colors**: Use Tailwind classes with custom colors:
  - `primary-teal` (#14B8A6)
  - `primary-blue` (#3B82F6)
  - `primary-purple` (#8B5CF6)
  - `bg-page` (dark background)
  - `bg-surface` (card backgrounds)
  - `text-secondary`, `text-tertiary`, `text-muted`

- **Responsive**: Use standard Tailwind breakpoints:
  - `sm:` (640px)
  - `md:` (768px)
  - `lg:` (1024px)
  - `xl:` (1280px)

- **Spacing**: Use consistent spacing (4, 6, 8, 12, 16, etc.)

## Audio Visualizer

The homepage has an audio visualization canvas in `Hero.astro`.
- Canvas ID: `heroAudioViz`
- Uses requestAnimationFrame for smooth animation
- Animation pauses when not in viewport (IntersectionObserver)

## Build Output

- Static files are generated in `dist/`
- All blog posts are pre-rendered as static HTML
- No server-side rendering (output: 'static')

## Mobile Optimization

The site is fully responsive:
- Header adapts with smaller buttons on mobile
- Hero section uses responsive font sizes and spacing
- Music player card scales down on mobile
- All components use responsive Tailwind classes

## TODO

- [ ] Add real audio MP3 files to the homepage as examples of music
  - Current implementation only shows a visual simulation
  - Need actual audio samples for each business type (Restaurante, Cafetería, Gimnasio, Spa, Tienda)
  - Audio should be playable via the music player interface
  - Consider using HTML5 Audio API with actual MP3 files
  - Files should be optimized for web (compressed, short samples)
  - May need to add `/public/audio/` directory for audio assets

## Known Issues / Tips

1. **MDX Lists Inside Components**: Markdown lists don't work inside Astro component slots. Use HTML `<ul><li>` instead.

2. **Build Errors with Colors**: If build fails with "Cannot read properties of undefined (reading 'split')", check StatCard color values - must be one of: teal, blue, purple, amber, red.

3. **Component Imports**: Always import all components used in an MDX file at the top.

4. **File Watching**: Sometimes Astro doesn't pick up new MDX files. Restart dev server if needed.

## Original SST Context

This was originally an SST v3 monorepo (see git history). It has been simplified to a standard Astro static site for easier deployment and maintenance. The original SST configuration files have been removed.
