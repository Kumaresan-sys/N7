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

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd N7
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available npm Commands

Here is a list of all available npm scripts in the project:

- **`npm run dev`**: Starts the Next.js development server on `localhost:3000` with hot-module replacement.
- **`npm run build`**: Creates an optimized production build of your application.
- **`npm run start`**: Starts a Node.js server to serve your built application in production mode.
- **`npm run lint`**: Runs ESLint to catch and report potential issues in the codebase.

## Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

### Steps to Deploy:

1. **Push your code to a Git provider**: Push your repository to GitHub, GitLab, or Bitbucket.
2. **Import your project on Vercel**: 
   - Sign up or log in to [Vercel](https://vercel.com/).
   - Click on "Add New..." and select "Project".
   - Import your Git repository.
3. **Configure Project Settings**:
   - Vercel will automatically detect that you are using Next.js and configure the build settings accordingly:
     - **Framework Preset**: Next.js
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
   - If you have any environment variables, add them in the "Environment Variables" section.
4. **Deploy**: Click the "Deploy" button. Vercel will build and deploy your application.

Once deployed, you will get a live URL where your application is hosted. Subsequent pushes to your main branch will automatically trigger new deployments on Vercel.
