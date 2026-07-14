# ConsultWizard

A React + Vite single-page app for managing consultants and teams (Finnish-language UI). It's a front-end-only demo/prototype: all data (consultants, teams, login state) lives in React component state and resets on page reload — there is no backend or database yet.

<img width="1344" height="1237" alt="Screenshot 2026-07-14 at 11-59-16 Vite React" src="https://github.com/user-attachments/assets/629c9998-5a45-49f5-b811-652f8d7ff8a0" />


## Tech stack

- [React 18](https://react.dev/) with [React Router 7](https://reactrouter.com/)
- [Vite 5](https://vitejs.dev/) for dev server and builds
- [html2canvas](https://github.com/niklasvh/html2canvas) + [jsPDF](https://github.com/parallax/jsPDF) for exporting consultant profiles as PDF
- ESLint 9 (flat config) for linting


## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |

## Project structure

```
src/
  components/
    cards/      # ConsultantCard, ProfileCard, TeamCard
    layout/     # Navbar, Footer
    ui/         # Button, SearchBar, Table, Spinner
    ProtectedRoute.jsx
  context/
    AuthContext.jsx   # simple client-side auth state
  pages/
    HomePage, ConsultantsPage, TeamManagementPage,
    UserManagementPage, ConsultantProfile
```

## Routes

| Path | Page | Notes |
| --- | --- | --- |
| `/` | Home | |
| `/consultants` | Consultant management | Requires login |
| `/teams` | Team management | Requires login |
| `/admin` | Admin login | |

## Demo login

The `/admin` login is a hardcoded client-side check (`admin` / `password123`) meant only for demoing the protected routes — **do not use this pattern in production**; it does not provide real authentication or authorization.

## Known limitations

- No backend/persistence — all data resets on refresh.
- `npm run build` currently emits a "chunk larger than 500 kB" warning; consider code-splitting with dynamic `import()` if the app grows.
