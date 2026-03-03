# The Cipher

Built a newspaper-style editorial web app with React 18 and TypeScript on a Vite build pipeline. Designed a fully responsive multi-column article layout using Tailwind CSS utility classes with seven custom local font families for authentic print typography. Integrated GSAP animation library via `@gsap/react` for timeline-based transitions and scroll effects. Implemented live time rendering with a React hooks-based Clock component and a CSS keyframe marquee banner with pause-on-hover. Structured the project with a composable component architecture separating layout wrappers, page sections, article blocks, and utility tools.

## Tech Stack

- **React 18** + **TypeScript** — component-based UI with strict type safety
- **Vite 5** — fast dev server and optimised production build
- **Tailwind CSS 3** — utility-first responsive styling
- **GSAP 3** + **@gsap/react** — animation timelines
- **react-icons** — scalable SVG icon set
- **Custom Fonts** — OldLondon, TimesNewRoman, Canopee, EditorialNew, Helvetica, Arial, Impact

## Getting Started

```bash
git clone https://github.com/yugalkaushik/thecipher.git
cd thecipher
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across all source files |

