# YatriSathi (Smart Tourist Safety & Incident Response System)

> **Safe Travels. Zero Uncertainty.**  
> A next-generation smart tourist safety platform engineered for dynamic hazard tracking, instantaneous emergency response, offline resilience, and automated incident triage.

---

## 🏗️ Architecture & Workspace Structure

```text
yatrisathi/
├── .gitignore
├── .gitattributes
├── README.md
├── package.json               # Root scripts ("dev": "npm --prefix client run dev")
├── backend/                   # Empty placeholder directory for future Node/Express API
├── frontend/                  # Documentation & design references
└── client/                    # Primary active React 18 + Vite frontend application
    ├── index.html
    ├── package.json           # React 18, Vite, Tailwind CSS v4, Lucide-React
    ├── vite.config.js
    └── src/
        ├── index.css          # Tailwind imports + Captain America heroic typography + glow animations
        ├── main.jsx
        ├── App.jsx            # Shell with state management for sidebars & active categories
        ├── components/
        │   ├── TopHeader.jsx           # Thin top bar: completely blank center, only Left Hamburger + Right Bell
        │   ├── NavigationDrawer.jsx    # Hamburger overlay (Home, Profile, Settings, About, Privacy)
        │   ├── BlueFeatureSidebar.jsx  # Collapsible blue left drawer for feature selection
        │   ├── FeatureCard.jsx         # Card with floating physics & glowing hover detail popup
        │   └── NotificationModal.jsx   # Transparent alert panel triggered by bell icon
        ├── data/
        │   └── featuresData.js         # Hierarchical safety features & sub-features
        └── pages/
            └── LandingPage.jsx         # Main scrollable canvas displaying dynamic sub-features
```

---

## 🚀 Quickstart

### 1. Root Dev Command
From the `yatrisathi` directory:
```bash
npm run dev
```

### 2. Client Directly
```bash
cd client
npm install
npm run dev
```

---

## 🎨 Visual System & Core Mechanics

- **Palette:** Crisp White (`#ffffff`), Cold Slate (`#f8fafc`), Royal Navy (`#0f172a` to `#1e3a8a`), Electric Cobalt (`#2563eb`), Cyan Sky (`#38bdf8`), and Safety Status Accents (Emerald, Amber, Crimson).
- **Heroic Typography:** *Bebas Neue* display headers coupled with *Plus Jakarta Sans* micro-copy.
- **Hardware-Accelerated Physics:** Zero WebGL overhead — strict GPU CSS transforms (`translateY`, `will-change: transform`).
- **Low-Bandwidth Glowing Tooltips:** Zero textual clutter on standard cards; glowing neon aura tooltips reveal explainable intelligence on hover/tap.
