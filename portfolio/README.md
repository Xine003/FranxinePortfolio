# Postman Portfolio — Vite + React + Tailwind

## Project Structure

```
src/
├── data/
│   └── portfolioData.js       ← All your content lives here. Edit this file only.
├── components/
│   ├── Sidebar.jsx             ← Left panel: collections + endpoint list
│   ├── RequestBar.jsx          ← URL bar + Send button + status bar
│   ├── ResponsePanel.jsx       ← Right panel: renders active endpoint response
│   └── panels/
│       ├── AboutPanel.jsx
│       ├── SkillsPanel.jsx
│       ├── ExperiencePanel.jsx
│       ├── ProjectsPanel.jsx
│       ├── ProjectDetailPanel.jsx
│       ├── BlogsPanel.jsx
│       ├── BlogDetailPanel.jsx
│       ├── CvPanel.jsx
│       ├── CertificatesPanel.jsx
│       ├── SocialsPanel.jsx
│       └── ContactPanel.jsx
├── App.jsx                     ← Root layout + routing state
├── main.jsx
└── index.css                   ← Tailwind directives + custom CSS variables
```

## Setup

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then copy all files from this project into your `src/` folder.

## Customizing

Open `src/data/portfolioData.js` and replace all placeholder content with your real info.
You never need to touch the component files unless you want to change layout or add new endpoints.