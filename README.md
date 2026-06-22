# Hope UI File Manager Image Gallery Clone

React/Vite dashboard clone for the Hope UI Pro File Manager Image Folder assignment.

## Tech Stack

- React with Vite
- React Router
- React built-in state: `useReducer`, `useMemo`, and Context API
- Tailwind CSS utilities for styling
- `react-icons`
- Local mock image data only, no backend

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To force the same URL used during development:

```bash
npm run dev -- --host 127.0.0.1 --port 5173
```

## State Management

The image list, search query, selected preview image, and modal state live in `ImageProvider` using `useReducer` and Context. Built-in React state is enough here because the app is read-only, has a small shared data model, and only needs derived views such as filtered images and recently viewed images.

## Implemented Requirements

- Sidebar with grouped navigation and active route highlight
- Top navbar with search, cart dropdown, notifications dropdown, profile dropdown, and menu dropdowns
- Image Folder page with header, Add Image button, Recently Viewed row, and All Images grid
- Reusable `ImageCard`
- Centralized image data in `src/data/images.js`
- Recently Viewed derived by sorting `lastOpenedAt`
- Search/filter by image file name
- Read-only preview modal
- Responsive layout for mobile, tablet, and desktop

## Known Limitations

- Add Image is visual only, as requested by the assignment scope.
- Edit, delete, upload, trash restore, and backend persistence are not implemented.
- Placeholder routes exist for Video, Document, All Files, and Trash.
- Deployment link should be added here after publishing to Vercel, Netlify, or GitHub Pages.
