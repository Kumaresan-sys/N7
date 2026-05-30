# N7 Landing Page

Responsive Next.js implementation of the central N7 banking landing page. Refactored into a scalable Clean Architecture.

## Architecture & Structure

This project follows a strict domain-driven, feature-separated component architecture to ensure maintainability and separation of concerns.

```
src/
├── app/                          # Next.js App Router (routes & layouts)
│   ├── layout.tsx                
│   ├── page.tsx                  # Slim aggregator of section components
│   └── globals.css               # Only Tailwind & style imports
│
├── components/                   # React components
│   ├── layout/                   # Structural (Header, Footer)
│   ├── sections/                 # Landing page content sections
│   └── ui/                       # Shared, reusable primitives (Button, TextLink)
│
├── data/                         # Static content & configuration
│   └── solutions, insights, navigation, site-config
│
├── lib/                          # Non-React utilities & logic
│   ├── animations/               # GSAP orchestrators
│   ├── hooks/                    # Custom hooks (e.g., useMagneticCursor)
│   └── providers/                # Context providers (e.g., Lenis)
│
├── styles/                       # Modular CSS architecture
│   ├── base.css                  # Custom properties & reset
│   ├── components/               # Scoped styles per component
│   └── responsive.css            # Consolidated media queries
│
└── types/                        # Shared TypeScript interfaces
```

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP (ScrollTrigger & animations)
- Lenis (Smooth scrolling)
- lucide-react icons

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run lint     # Lint the codebase
npm run build    # Build for production
npm run start    # Start production server
```

## Styling Approach

The project uses modular CSS files aggregated in `globals.css` rather than inline Tailwind classes for complex components. This keeps the JSX clean while maintaining the high-fidelity design aesthetics required for the landing page.
