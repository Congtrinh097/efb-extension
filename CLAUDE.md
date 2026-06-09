# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chrome Browser Extension (Manifest v3) that helps English beginners learn vocabulary through an interactive new-tab replacement page with Carousel and FlipCard display modes. Built with React 18, TypeScript, and Webpack 5. Requires Node.js >= 18.

## Common Commands

```bash
npm install          # Install dependencies
npm start            # Development build with hot reload (served at localhost:3000)
npm run build        # Production build → outputs zip to /zip directory
npm run prettier     # Format all source files
```

There is no test framework configured in this project.

**Loading the extension in Chrome during development:**
1. Run `npm start`
2. Open `chrome://extensions`, enable Developer Mode
3. Click "Load unpacked" and select the `build/` folder

## Architecture

### Multi-Bundle Webpack Structure

Webpack produces 8 separate bundles, one per extension context. Each has its own HTML entry and JS bundle:

| Entry | Role |
|-------|------|
| `Background` | Service worker — registers context menus (Translate, Add to List, Read Text via TTS) |
| `Content` | Injected into every page at `document_start` |
| `Newtab` | **Main UI** — overrides the new tab page; hosts Carousel/FlipCard modes |
| `Popup` | Small popup shown when clicking the extension icon |
| `Options` | Extension settings page |
| `WordList` | Full-page word management table (sortable, paginated, selectable) |
| `Devtools` | DevTools integration entry |
| `Panel` | DevTools side panel |

### Service Layer

Two services in `src/services/` use static methods — no instantiation needed:

- **`DataStorageService`** — fetches the word dataset and wraps `LocalStorageService` reads/writes for word data
- **`LocalStorageService`** — thin wrapper around `window.localStorage`; all persistence goes through here

Word data currently lives statically in `src/services/data-storage-service/data-words.ts` — there is no backend or remote API.

### Data Model

The central `Word` interface (`src/models/word.model.ts`) is used throughout:

```ts
interface Word {
  id: string;
  text: string;
  meaning: string;
  description: string;
  imageUrl: string;
  addedDate: string;
  addedTimes: number;
  star: boolean;
}
```

`Order` (`src/models/order.model.ts`) is a simple `'asc' | 'desc'` type used for table sorting.

### Component Conventions

- Pages under `src/pages/` are React functional components with hooks (one legacy class component: `src/containers/Greetings/`)
- Material-UI 5 (`@mui/material`) is used for the `WordList` table and form elements
- `react-responsive-carousel` drives the Carousel mode in Newtab
- Sorting utilities shared across pages live in `src/utils/table.util.ts` (`stableSort`, `getComparator`)

## Code Style

- **Prettier**: single quotes, trailing commas (ES5), `arrowParens: "always"` — run `npm run prettier` before committing
- **ESLint**: extends `react-app`; Chrome globals (`chrome`) are allowed
- **TypeScript**: strict mode, target ES5, `src/` path alias configured in `tsconfig.json`
- Mixed `.jsx`/`.tsx` files are normal; new UI code should prefer `.tsx`

## Key Configuration Files

- `webpack.config.js` — defines all 8 entry points, loaders (ts-loader, babel-loader, sass-loader), plugins (CopyWebpack, HtmlWebpack, ZipWebpack), and dev server config
- `src/manifest.json` — Manifest v3; permissions: `activeTab, contextMenus, tabs, search, storage, tts`
- `.babelrc` — `@babel/preset-react` + React Refresh (dev only)
- `tsconfig.json` — strict TS, ESNext modules, JSX react
