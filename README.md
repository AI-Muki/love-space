# Love Space

**A private, playful space for two people to keep their shared life in one place.**

Love Space is an Expo mobile app for couples. It helps you collect the small things that make a relationship feel like yours: ideas for dates, places you have visited, photo memories, match results, and the details of your shared story.

The product is currently called **Our Space** inside the app, while this repository is named **Love Space**.

## What is included

- Couple profile with names and relationship start date
- “Together for” day counter
- Shared activity and date-idea list
- Place log with notes, photos, and saved GPS coordinates
- Map of places you have visited
- Photo-based memory gallery
- Match and score tracking for friendly competition
- Local-first persistence on the device
- Empty states that guide the first entry instead of using sample relationship data

## Project structure

```text
artifacts/
  our-space/       Expo mobile app
  api-server/      Workspace API service
  mockup-sandbox/  Component preview workspace
lib/               Shared API, database, and generated types
scripts/           Workspace utilities
```

The main product lives in [`artifacts/our-space`](./artifacts/our-space).

## Run locally

Requirements:

- Node.js 24+
- pnpm
- Expo-compatible browser, simulator, or device

Install dependencies from the repository root:

```bash
pnpm install
```

Start the mobile app:

```bash
pnpm --filter @workspace/our-space run dev
```

Run the checks:

```bash
pnpm --filter @workspace/our-space run typecheck
pnpm run typecheck
pnpm run build
```

## Data and privacy

The first version is local-first. Couple details, activities, places, memories, photos, and match results are stored on the device with `AsyncStorage`.

Secure accounts, partner invites, private cloud synchronization, and cloud photo storage are not part of this version yet. Photos are selected from the device and are not uploaded to a server by the app.

## Technical notes

- Expo SDK 54
- Expo Router
- React Native and React Native Web
- `expo-image-picker` for memory and place photos
- `expo-location` for saved place coordinates
- `react-native-maps` for the native map
- TypeScript
- pnpm workspace

## Product direction

Love Space is designed to stay warm and personal without turning a relationship into a productivity dashboard. Future work can build on the local-first foundation with optional secure sync, partner collaboration, richer timeline views, and more ways to revisit shared memories.