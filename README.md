 News App (React + TypeScript + RTK Query)

A modern **News Application** built using **React, TypeScript, Redux Toolkit, and RTK Query**.  
This project demonstrates clean architecture, API data fetching, global state management, theme switching, and language support.

---

## Features

- 🗞️ Fetch news data using **RTK Query**
- 🌗 Dark / Light theme toggle
- 🌍 Multi-language support
- ⚡ Fast development with **Vite**
- 🧩 Clean and scalable folder structure
- 💀 Skeleton loaders for better UX
- 📄 News list and detailed news view

---

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- RTK Query
- React Router
- Vite
- Tailwind CSS

---

##  Project Structure
src/
├── app/
│ ├── store.ts
│ └── hooks.ts
├── Components/
│ ├── NewsCard.tsx
│ ├── ThemeToggle.tsx
│ ├── LanguageToggle.tsx
│ └── Skeleton.tsx
├── features/
│ ├── news/
│ ├── theme/
│ └── languages/
├── pages/
│ ├── NewsList.tsx
│ └── PostDetails.tsx
├── i18n/
│ ├── translations.ts
│ └── useTranslation.tsx
└── main.tsx

Demo API:
https://jsonplaceholder.typicode.com/posts


---

## Installation & Setup

```bash
git clone https://github.com/nabin739/Newsapp.git
cd newsapp
npm install
npm run dev

## App runs at
http://localhost:5173



