# Thar Digital Services - Next.js Website

Modern, SEO-optimized website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (already set)
- yarn

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Run the development server:
```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── lib/                   # Utilities and constants
├── public/               # Static assets
│   └── images/          # Images and logos
├── types/                # TypeScript types
└── styles/               # Global styles
```

## 🛠 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Type check without emitting

## 🎨 Design System

The design follows the PRD requirements:
- **Colors**: Deep navy, slate, charcoal with muted red accents
- **Typography**: Inter (modern enterprise sans-serif)
- **Style**: Minimal, clean, tech-forward

## 📝 Content Management

Content is managed through:
- Constants in `lib/constants.ts`
- Page components in `app/`
- Reusable components in `components/`

## 🔧 Configuration

- **Next.js Config**: `next.config.js`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.ts`
- **ESLint**: `.eslintrc.json`

## 📦 Dependencies

### Core
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### Additional
- next-seo (SEO)
- react-hook-form (Forms)
- zod (Validation)
- framer-motion (Animations)
- react-icons (Icons)

## 🚢 Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

Or deploy manually:
```bash
yarn build
yarn start
```

## 📊 SEO

- Automatic sitemap generation
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card support
- Optimized metadata

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Proprietary - Thar Digital Services

---

**Status**: 🟡 In Development

For questions or issues, contact: tech@thardigital.in
