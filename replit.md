# Love Space

A private, local-first Expo app for couples to collect shared activities, places, memories, and friendly match results.

## Run & Operate

- `pnpm --filter @workspace/our-space run dev` — run the Expo mobile app
- `pnpm --filter @workspace/our-space run typecheck` — typecheck the mobile app
- `pnpm run typecheck` — typecheck all workspace packages
- `pnpm run build` — typecheck and build all packages that expose a build script
- `pnpm --filter @workspace/api-server run dev` — run the API server when backend work is needed

## Stack

- pnpm workspaces, Node.js 24, TypeScript
- Mobile: Expo SDK 54, Expo Router, React Native
- Persistence: AsyncStorage for local-first device storage
- Photos: `expo-image-picker`
- Location: `expo-location`
- Map: `react-native-maps` on native, a web-safe fallback in browser preview
- API foundation: Express, OpenAPI, Zod, Drizzle packages are available for future backend work

## Where things live

- `artifacts/our-space/app/` — Expo Router screens and tabs
- `artifacts/our-space/context/SpaceContext.tsx` — shared local state and persistence
- `artifacts/our-space/components/MapSurface*` — native map and web fallback
- `artifacts/our-space/constants/colors.ts` — warm light/dark color palette
- `artifacts/our-space/app.json` — Expo app configuration
- `artifacts/api-server/` — API service foundation
- `lib/` — shared API, database, and generated type packages

## Architecture decisions

- The first release is local-first so the app remains useful without account setup or a backend.
- Relationship data is kept in shared context and persisted through AsyncStorage rather than duplicated across screens.
- Native-only map code is isolated behind platform-specific files so the web preview can bundle safely.
- User-created content is shown throughout the app; demo relationship data is intentionally avoided.

## Product

The mobile app lets two people create their own shared space: add ideas for things to do, record places with photos and coordinates, save photo memories, and keep score in friendly matches. The interface is intentionally warm, simple, and private by default.

## Gotchas

- `react-native-maps` is pinned to `1.18.0` for the Expo setup.
- Do not import native map internals directly from screens; use the `MapSurface` wrapper.
- The current storage is device-local. Do not describe it as cloud sync or secure account storage.

## Pointers

- The public project documentation is in `README.md`.
- The main product is in `artifacts/our-space`.
