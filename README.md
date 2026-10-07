# Next.js Comic Web Application

A comic catalog and reading interface built with Next.js.

This project was created as a prototype for exploring the structure and UI of a comic-reading web application, including catalog browsing, dynamic comic routes, reusable UI components, and simple client-side user interactions.

> **Project Status:** This project is no longer under active development. It is preserved as an incomplete prototype and portfolio project.

## Features

- Comic catalog with cover artwork
- Dynamic routes for comic pages
- Reusable UI components
- Like and save interactions using local storage
- Basic login state using React Context
- Responsive navigation and interface components

## Tech Stack

- Next.js
- React
- JavaScript
- CSS Modules
- Local Storage

## Project Structure

```text
app/
├── (pages)/
│   ├── about/
│   ├── account/
│   ├── comic/
│   └── login/
├── components/
│   ├── actions/
│   ├── auth/
│   ├── layout/
│   ├── navigation/
│   └── ui/
├── context/
├── layout.tsx
└── page.jsx
```

The application uses reusable components for common UI elements and separates authentication state, navigation, actions, and general UI components into their respective modules.

## Running Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

For a production build:

```bash
npm run build
```

## Notes

The project was intentionally left incomplete and does not represent a production-ready comic platform. Some functionality uses hard-coded data and browser storage rather than a backend or persistent database.
