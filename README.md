# YatriSathi - Smart Tourist Safety Monitoring and Incident Response System

## 1. Project Overview and The Core Problem
Traditional tourist platforms provide static travel recommendations but lack dynamic situational awareness. When emergencies or environmental hazards occur, critical information is fragmented across disconnected sources, local reporting is slow, and language barriers impede assistance. Furthermore, remote travel destinations frequently suffer from weak or nonexistent cellular connectivity, rendering heavy cloud-based platforms unusable.

YatriSathi resolves these systemic vulnerabilities by integrating real-time hazard intelligence, crowd-sourced incident reporting, automated triage, and authority dispatch management into a synchronized operational pipeline:

PREVENT -> DETECT -> PRIORITIZE -> RESPOND -> RESOLVE

The primary pilot destination is calibrated for Sambalpur and the Hirakud reservoir region, designed with an extensible architecture for destination-by-destination expansion.

---

## 2. Product Feel and Design Principles
The platform avoids generic corporate SaaS layouts in favor of a crisp, tactical, low-latency interface:
* High-Contrast Palette: Clean white base canvas paired with deep navy and electric cobalt blue accents for clear visibility in bright outdoor environments.
* Heroic Condensed Typography: Bebas Neue for primary headlines, emergency telemetry, and numerical metrics, combined with Plus Jakarta Sans for readable body copy.
* Hardware-Accelerated Floating Dynamics: Feature cards and interactive modules utilize lightweight CSS transitions (transform: translateY) to produce subtle floating elevations on user hover without consuming device processing power.
* Zero Text Bloat with Glowing Aura Popovers: Base feature cards contain only an icon, uppercase category title, and a compact tag. Comprehensive operational details appear inside an elevated neon-glow popover only upon user hover or focus, maintaining a clutter-free interface.
* Low-Bandwidth Optimization: Zero reliance on heavy WebGL or client-side canvas dependencies, ensuring rapid rendering on low-tier mobile hardware and restricted network bandwidth.

---

## 3. Technology Stack

### Monorepo Architecture
* Pattern: Multi-tier structure containing client, backend, and frontend documentation.
* Execution Root: Orchestrated development workflows executing via client/ (cd client && npm run dev).

### Client Application
* Framework: React 18 with Vite for optimized hot module replacement.
* Styling: Tailwind CSS v4 using @tailwindcss/vite.
* Mapping: Leaflet and React-Leaflet with OpenStreetMap layers.
* Iconography: Lucide-React.
* Network Client: Axios HTTP client with request interceptors.

### Backend API and Persistence
* Runtime: Node.js with Express.js REST framework.
* Database: MongoDB Atlas with Mongoose ODM.
* Spatial Indexing: MongoDB 2dsphere indexes for coordinate lookups and geofencing.
* Intelligence Layer: Modular AI classification engine with a deterministic mock fallback.

---

## 4. UI and UX Reference Architecture

* Top Utility Header: A fixed 56px ultra-thin banner with backdrop-filter blur. The central area remains completely blank to minimize distraction. The leftmost anchor contains a 3-bar hamburger navigation trigger; the rightmost anchor houses a transparent notification bell with an active alert status dot.
* Navigation Drawer: An off-canvas drawer triggered by the hamburger icon. Contains global account and application routes: Home, Tourist Safety Profile, Offline Sync and Settings, About YatriSathi, Privacy and Legal Policies, and Emergency 112 Gateway.
* Collapsible Blue Feature Navigation Sidebar: Positioned on the left side in dark blue gradient styling with white text. Features can be selected sequentially, dynamically updating the primary home canvas with all sub-features belonging to that module. The sidebar can be retracted into the left margin to maximize screen space.
* Scrollable Feature Canvas: A vertically scrollable surface rendering responsive grids of sub-features corresponding to the active module. Each card features floating hover dynamics and glowing popover panels for situational details.

---

## 5. Monorepo Directory Structure

```text
yatrisathi/
├── .gitignore
├── .gitattributes
├── README.md
├── package.json
├── client/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── components/
│       │   ├── TopHeader.jsx
│       │   ├── NavigationDrawer.jsx
│       │   ├── BlueFeatureSidebar.jsx
│       │   ├── FeatureCard.jsx
│       │   └── NotificationModal.jsx
│       ├── data/
│       │   └── featuresData.js
│       ├── pages/
│       │   ├── LandingPage.jsx
│       │   ├── MapPage.jsx
│       │   ├── IncidentsPage.jsx
│       │   ├── SafetyPage.jsx
│       │   └── AuthorityDashboardPage.jsx
│       ├── services/
│       │   ├── api.js
│       │   ├── incidentService.js
│       │   └── riskZoneService.js
│       └── utils/
│           └── constants.js
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── services/
└── frontend/
    └── documentation/
```

---

## 6. Core Systems and Incident Intelligence

### Dynamic Hazard Zone Engine
* Computes weighted risk ratings (Green, Yellow, Orange, Red) across monitored travel zones.
* Ingests active environmental inputs: IMD weather feeds, localized rainfall surges, and Hirakud Dam spillway gate discharge status.
* Processes historical incident records using exponential time-decay models, preventing obsolete historical events from artificially inflating present threat ratings.

### Incident Reporting and AI Classification
* Tourist submission pipeline supporting text details, image capture, and automated browser geolocation.
* AI classification evaluates reports into categories (Medical Emergency, Natural Hazard, Accident, Security, Infrastructure), determines severity, and assigns an initial response priority.

### Spatio-Temporal Duplicate Clustering
* Prevents authority notification overload by aggregating individual reports originating from the same real-world incident.
* Evaluates spatial proximity, time windows, and lexical similarity to merge incoming alerts (e.g., consolidating 7 distinct tourist reports into 1 response cluster).

### Capability-Aware Responder Matching
* Assigns emergency responders based on specialized unit capability rather than nearest proximity alone.
* Evaluates incident requirements against unit profiles (e.g., routing water rescue equipment to reservoir hazards and trauma ambulances to severe road accidents) alongside verified availability and transit distance.

### Weak Network and Offline Safety Protocol
* Detects transitions into weak-network zones and persists the tourist's last-known geographic coordinate and timestamp.
* Pre-caches critical emergency safety numbers, local instructions, and digital emergency passes directly in local persistence.

### Inclusive and Accessible Tourism
* Tracks verified accessibility infrastructure (wheelchair-accessible paths, medical post proximity, and sanitary facilities) to generate customized safety guidance for elderly and disabled travelers.

---

## 7. Delivery and Engineering Standards

* Explainable Risk Architecture: Risk scores must remain transparent and explainable, citing active environmental inputs rather than opaque values.
* Complementary Emergency Integration: YatriSathi acts as an intelligence layer designed to assist official emergency dispatchers (such as 112) without claiming unauthorized direct intervention.
* Persistent Data Integrity: Core user profiles, incidents, and responder logs reside permanently in MongoDB Atlas rather than volatile browser memory.
* Zero Build and Runtime Errors: All builds across client and backend must compile cleanly with graceful error boundaries.
