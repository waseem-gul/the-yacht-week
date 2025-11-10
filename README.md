# The Yacht Week - Guest Website

A simplified, guest-focused website for The Yacht Week built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Four Core Pages**: Front Page, About Us, How It Works, and Prices
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **CMS-Friendly**: All content stored in JSON files for easy updates
- **SEO Optimized**: Meta tags, descriptions, and semantic HTML
- **Fast Performance**: Optimized images and lightweight build
- **Modern Design**: Clean, spacious layout with nautical theme

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Front Page
│   ├── about/             # About Us page
│   ├── how-it-works/      # How It Works page
│   └── prices/            # Prices page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section component
│   ├── CTA.tsx            # Call-to-action button
│   └── PriceCard.tsx      # Pricing card component
├── data/                  # Content management (JSON files)
│   ├── content.json       # All text content
│   └── pricing.json       # Pricing data
└── public/                # Static assets
```

## Content Management

All content is stored in JSON files in the `/data` directory:

- **`content.json`**: Contains all text content for pages, navigation, and CTAs
- **`pricing.json`**: Contains package and add-on pricing information

To update content, simply edit these JSON files - no code changes required!

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

## Customization

### Colors

Brand colors are defined in `tailwind.config.ts`. The theme uses:
- Primary blues (nautical theme)
- Navy tones
- White and gray accents

### Images

Images are currently using Unsplash placeholders. To use your own images:
1. Add images to `/public/images/`
2. Update image URLs in page components or content.json

## License

Private project for The Yacht Week.

