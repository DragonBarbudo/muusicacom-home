# MUUSICA Blog Post Creation Guide

This guide explains how to create rich, engaging blog posts for the MUUSICA website using MDX components.

## File Format

Blog posts use **MDX format** (`.mdx`) which allows embedding React/Astro components within Markdown content.

**Location:** `src/content/blog/`

**Naming convention:** `slug-of-the-post.mdx` (lowercase, hyphens, no spaces)

---

## Frontmatter (Required)

Every blog post must start with this frontmatter:

```yaml
---
title: "Your Post Title Here"
excerpt: "A brief 1-2 sentence summary for cards and SEO."
category: "Category Name"
categoryColor: "#HexColor"
readTime: "X min"
date: YYYY-MM-DD
dateFormatted: "DD Mon YYYY"
author:
  name: "Author Name"
  role: "Author Title/Role"
gradient: "from-color-1 to-color-2"
featured: true/false
---
```

### Available Categories & Colors

| Category | Slug | Color |
|----------|------|-------|
| Guías Legales | guias-legales | `#14B8A6` |
| Tips de Negocio | tips-negocio | `#3B82F6` |
| Música y Psicología | musica-psicologia | `#8B5CF6` |
| Casos de Éxito | casos-exito | `#F59E0B` |
| Industria Musical | industria | `#EC4899` |

### Available Gradients

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

---

## Component Imports

Add these imports at the top of your MDX file (after frontmatter):

```mdx
import AlertBox from '../../components/blog/AlertBox.astro';
import StatCard from '../../components/blog/StatCard.astro';
import StatsGrid from '../../components/blog/StatsGrid.astro';
import ComparisonTable from '../../components/blog/ComparisonTable.astro';
import FeatureList from '../../components/blog/FeatureList.astro';
import Quote from '../../components/blog/Quote.astro';
import CTABox from '../../components/blog/CTABox.astro';
import StepList from '../../components/blog/StepList.astro';
import InfoCard from '../../components/blog/InfoCard.astro';
import ProsCons from '../../components/blog/ProsCons.astro';
```

**Note:** Only import the components you actually use in the post.

---

## Available Components

### 1. AlertBox

Callout boxes for important information.

```mdx
<AlertBox type="info" title="Optional Title">
  Your content here. Supports **markdown** formatting.
</AlertBox>
```

**Props:**
- `type`: `"warning"` | `"info"` | `"success"` | `"danger"`
- `title`: Optional string

**Examples:**
```mdx
<AlertBox type="danger" title="Advertencia Legal">
  Usar Spotify en tu negocio puede resultar en multas.
</AlertBox>

<AlertBox type="success" title="Beneficio">
  Ahorra más de $12,000 MXN al año con MUUSICA.
</AlertBox>

<AlertBox type="warning">
  Content without title is also valid.
</AlertBox>
```

---

### 2. StatCard

Highlight key statistics with big numbers.

```mdx
<StatCard value="+23%" label="Aumento en ventas" icon="trending-up" color="teal" />
```

**Props:**
- `value`: String (the big number/stat)
- `label`: String (description below)
- `icon`: Optional Lucide icon name
- `color`: `"teal"` | `"blue"` | `"purple"` | `"amber"` | `"red"`

**Must be wrapped in StatsGrid:**
```mdx
<StatsGrid cols={3}>
  <StatCard value="$600" label="Ahorro mensual" icon="piggy-bank" color="teal" />
  <StatCard value="+38%" label="Más permanencia" icon="clock" color="blue" />
  <StatCard value="2,000+" label="Negocios activos" icon="building" color="purple" />
</StatsGrid>
```

---

### 3. StatsGrid

Container for StatCard components.

```mdx
<StatsGrid cols={3}>
  <!-- StatCards here -->
</StatsGrid>
```

**Props:**
- `cols`: `2` | `3` | `4`

---

### 4. ComparisonTable

Styled comparison tables with highlighting.

```mdx
<ComparisonTable
  title="Optional Table Title"
  headers={["Column 1", "Column 2", "Column 3"]}
  highlightColumn={2}
  rows={[
    { 
      label: "Row Label", 
      values: [
        { text: "Value 1", type: "neutral" }, 
        { text: "Value 2", type: "good" }
      ] 
    },
    { 
      label: "Another Row", 
      values: [
        { text: "Bad value", type: "bad" }, 
        { text: "Good value", type: "good" }
      ] 
    }
  ]}
/>
```

**Props:**
- `title`: Optional string
- `headers`: Array of column headers
- `highlightColumn`: Optional number (0-indexed) to highlight a column
- `rows`: Array of row objects
  - `label`: First column text
  - `values`: Array of `{ text, type }` objects
    - `type`: `"good"` (green + check) | `"bad"` (red + x) | `"neutral"` (gray)

---

### 5. FeatureList

Display features with icons.

```mdx
<FeatureList 
  variant="cards"
  title="Optional Section Title"
  items={[
    { icon: "shield-check", title: "Feature 1", description: "Description here" },
    { icon: "clock", title: "Feature 2", description: "Another description" }
  ]}
/>
```

**Props:**
- `variant`: `"cards"` | `"list"` | `"compact"`
- `title`: Optional string
- `items`: Array of feature objects
  - `icon`: Lucide icon name
  - `title`: Feature title
  - `description`: Optional description

**Variants:**
- `cards`: 2-column grid of cards with icons
- `list`: Vertical list with checkmarks in a box
- `compact`: Horizontal pill/tag style

---

### 6. Quote

Testimonials and blockquotes.

```mdx
<Quote variant="large" author="Name" role="Title">
  Quote text here.
</Quote>
```

**Props:**
- `variant`: `"default"` | `"large"` | `"card"`
- `author`: Optional string
- `role`: Optional string (author's title)

**Variants:**
- `default`: Left border, standard size
- `large`: Centered, large text, decorative quote mark
- `card`: Card style with 5-star rating

---

### 7. CTABox

Call-to-action boxes.

```mdx
<CTABox 
  variant="gradient"
  title="Ready to start?"
  description="Optional description text."
  buttonText="Get Started"
  buttonLink="https://play.muusica.com"
/>
```

**Props:**
- `variant`: `"default"` | `"gradient"` | `"minimal"`
- `title`: String (required)
- `description`: Optional string
- `buttonText`: Optional (default: "Empezar ahora")
- `buttonLink`: **REQUIRED** - Must always be `"https://play.muusica.com"`

**Variants:**
- `default`: Dark card, centered
- `gradient`: Colorful gradient background (best for main CTAs)
- `minimal`: Inline, side-by-side layout

---

### 8. StepList

Numbered step-by-step instructions.

```mdx
<StepList
  title="How to get started"
  steps={[
    { title: "Step 1", description: "Do this first" },
    { title: "Step 2", description: "Then do this" },
    { title: "Step 3", description: "Finally, this" }
  ]}
/>
```

**Props:**
- `title`: Optional section title
- `steps`: Array of step objects
  - `title`: Step title
  - `description`: Optional step description

---

### 9. InfoCard

Information boxes for highlighted content.

```mdx
<InfoCard title="Did you know?" icon="lightbulb" variant="highlight">
  Content with **markdown** support.
  
  - List items work
  - Multiple paragraphs too
</InfoCard>
```

**Props:**
- `title`: Optional string
- `icon`: Optional Lucide icon name
- `variant`: `"default"` | `"highlight"` | `"dark"`

---

### 10. ProsCons

Side-by-side pros and cons comparison.

```mdx
<ProsCons 
  prosTitle="Advantages"
  consTitle="Disadvantages"
  pros={[
    "Pro item 1",
    "Pro item 2",
    "Pro item 3"
  ]}
  cons={[
    "Con item 1",
    "Con item 2",
    "Con item 3"
  ]}
/>
```

**Props:**
- `prosTitle`: Optional (default: "Ventajas")
- `consTitle`: Optional (default: "Desventajas")
- `pros`: Array of strings
- `cons`: Array of strings

---

## Common Lucide Icons

Here are frequently used icons for the blog components:

**Business:** `building`, `store`, `briefcase`, `receipt`, `piggy-bank`, `credit-card`

**Legal:** `shield-check`, `scale`, `file-badge`, `gavel`, `alert-triangle`, `alert-octagon`

**Music:** `music`, `headphones`, `volume`, `volume-1`, `volume-2`, `radio`

**Time:** `clock`, `calendar`, `timer`, `hourglass`

**Actions:** `check`, `x`, `arrow-right`, `download`, `play`, `pause`

**Stats:** `trending-up`, `trending-down`, `bar-chart`, `pie-chart`

**General:** `info`, `lightbulb`, `star`, `heart`, `users`, `coffee`, `utensils`

**Weather/Time of day:** `sun`, `sunrise`, `sunset`, `moon`

Full icon list: https://lucide.dev/icons/

---

## Best Practices

### Content Structure

1. **Start with a hook** - Engaging opening paragraph
2. **Use AlertBox early** - Highlight the key problem or benefit
3. **Include statistics** - Use StatsGrid for credibility
4. **Break up text** - Use components every 2-3 paragraphs
5. **Add social proof** - Use Quote components for testimonials
6. **End with CTA** - Always include a CTABox at the end

### ⚠️ IMPORTANT: CTA Button Links

**All CTABox components MUST use this exact URL:**

```mdx
buttonLink="https://play.muusica.com"
```

Never use `/` or any other URL. Every call-to-action should direct users to the main MUUSICA platform at `https://play.muusica.com`.

### Component Usage

- **Don't overuse** - Max 2-3 AlertBoxes per post
- **Vary components** - Don't repeat the same component consecutively
- **Match colors** - Use consistent color schemes (teal for positive, red for warnings)
- **Keep it scannable** - Components should help readers skim the content

### Writing Style

- **Language:** Spanish (Mexico)
- **Tone:** Professional but approachable
- **Focus:** Benefits for business owners
- **CTAs:** Always relate back to MUUSICA's value proposition

---

## Example Post Structure

```mdx
---
[frontmatter]
---

import [components]

## Opening Section

Introductory paragraph...

<AlertBox type="danger" title="Key Problem">
  Problem statement
</AlertBox>

## Statistics Section

<StatsGrid cols={3}>
  <StatCard ... />
  <StatCard ... />
  <StatCard ... />
</StatsGrid>

## Solution Section

<FeatureList variant="cards" items={[...]} />

<Quote variant="large" author="...">
  Testimonial
</Quote>

## How-To Section

<StepList steps={[...]} />

## Comparison Section

<ComparisonTable ... />

## Conclusion

Final paragraph...

<CTABox 
  variant="gradient" 
  title="..." 
  buttonLink="https://play.muusica.com"
/>
```

---

## Converting Existing MD to MDX

1. Rename file from `.md` to `.mdx`
2. Add component imports after frontmatter
3. Replace simple blockquotes with `<Quote>` components
4. Replace comparison tables with `<ComparisonTable>`
5. Add `<AlertBox>` for important callouts
6. Wrap statistics in `<StatsGrid>` + `<StatCard>`
7. Add `<CTABox>` at the end
8. Test with `npm run build`

---

## Testing

After creating a new post:

```bash
npm run build
```

Check for:
- Frontmatter validation errors
- Component import errors
- Prop type errors

Preview locally:
```bash
npm run dev
```

Visit: `http://localhost:4321/blog/[your-slug]`
