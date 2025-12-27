# Kasparro Frontend

Kasparro is an AI-native SEO intelligence platform built for the AI-first search era.  
It helps brands understand how they are interpreted, cited, and trusted inside AI-generated answers across modern search experiences.

This repository contains the frontend application for Kasparro, implemented as a production-style SaaS interface.

---
## 🌐 Live Demo

The application is deployed on Vercel and available here:

https://kasparro-frontend-o35c.vercel.app

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React
- State Management: React Context and local component state
- Build Tooling: Turbopack (Next.js)
- Deployment: Vercel-ready

---

## Folder Structure

kasparro-frontend/
app/
- page.tsx                  Main landing page
- platform/page.tsx         Platform overview and pipeline flow
- app/dashboard/page.tsx    Brand dashboard overview
- app/audit/page.tsx        Detailed AI-SEO audit modules
- app/architecture/page.tsx System architecture view
- layout.tsx                Global layout wrapper

components/
- Header.tsx                Global header with KASPARRO logo
- ui/                       Reusable UI components
- dashboard/                Dashboard-specific components
- audit/                    Audit module components

data/
- audit-modules.json        Static mock data for audit modules

public/                     Static assets
package.json
tailwind.config.ts
tsconfig.json
README.md

---

## Architectural Decisions

### Next.js App Router
The App Router was used to follow modern Next.js best practices.  
It enables clean routing, shared layouts, and scalability as the application grows.

### Component-Based Architecture
The UI is structured using reusable components such as Card, Button, and Badge.  
A shared Header component ensures consistent branding and navigation across all pages.

### State Management
React Context is used for managing shared UI state such as selected brand and audit module.  
This avoids unnecessary complexity while keeping state predictable and maintainable.

### Static Mock Data
Audit data is stored in static JSON files.  
This allows the UI to be developed independently of a backend and keeps the application deterministic.

### Styling Approach
Tailwind CSS was chosen for fast development, consistent styling, and a clean dark-mode SaaS interface.

---

## Tradeoffs Made

### Static Data Instead of APIs
No backend or API integration is included in this version.  
The focus was on frontend architecture, UI clarity, and product thinking.

### Context API Instead of External State Libraries
React Context was preferred over Redux or Zustand due to limited state complexity.  
This keeps the codebase simple and readable.

### Minimal Animations
Animations were kept minimal to prioritize performance and clarity over visual effects.

---

## Key Features

- AI-first SEO landing experience
- Platform overview with audit pipeline flow
- Interactive dashboard for AI-SEO visibility
- Detailed audit modules with insights and recommendations
- Consistent global navigation and branding
- Fully responsive, dark-mode-first UI

---

## Running the Project Locally

1. Install dependencies:
npm install

2. Start the development server:
npm run dev

3. Open the browser:
http://localhost:3000

---

## Notes

This project represents a frontend MVP focused on clarity, scalability, and AI-native product design.  
It is intended for evaluation and educational purposes.

---

## License

This project is intended for educational and evaluation purposes only.
