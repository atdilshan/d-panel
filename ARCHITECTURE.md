# Architecture

## Stack

- **Next.js (App Router)**
- **TypeScript**
- **Material UI (MUI)**

## Folder structure (high level)

- `app/` - Routes and API: `page.tsx`, `dashboard/`, `api/tiles/`, and shared layout under `_utils/`.
- `app/dashboard/_utils/` - Dashboard only components & types: tile components, modal, sheet, skeletons, types.
- `app/_utils/`  Shared layout components: Sidebar, Bottombar, layout wrapper.
- `src/utils/`  Shared helpers and types:API state, colors.

## Why these MUI components

- **Drawer (sidebar)** - The left nav is a permanent Drawer so it stays fixed and doesn’t overlay the main content. Only hide it on small screens with `display: { xs: 'none', md: 'block' }` instead of using a temporary overlay, which fits a “always visible on desktop” nav.

- **BottomNavigation** - For mobile need a compact bar at the bottom with a few primary actions. MUI’s BottomNavigation gives that pattern with icons and labels and handles selected state.

- **Modal (desktop detail)** - For the tile detail on desktop want a centered overlay that focuses the user and dims the rest of the page. Modal does that and handles focus and escape/backdrop close, so it fits for view one thing without leaving the page.

- **Drawer anchor bottom (mobile detail)** - On mobile, a bottom sheet (Drawer with `anchor="bottom"`). Used the same data and layout as the modal, just in a sheet.

- **Grid** — The tile layout needs responsive columns (e.g. 3 on desktop, 1 on mobile). MUI Grid with the `size` prop and breakpoints (`xs`, `sm`, `lg`) handles that without custom media queries.

- **Skeleton** — MUI Skeleton matches the theme and gives a simple loading state.

- **Card / Paper** — Tiles and modal/sheet content use Card and Paper for clear boundaries and a bit of elevation.

### Note

A 2-second delay is added to the API routes on purpose so you can see the loading skeletons.
