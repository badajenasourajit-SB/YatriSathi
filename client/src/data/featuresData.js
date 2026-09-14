export const safetyCategories = [
  {
    id: "hazard-zones",
    name: "Dynamic Hazard Zones",
    shortName: "Hazard Zones",
    icon: "Compass",
    tagline: "Hirakud/Sambalpur telemetry & active water discharge surveillance",
    status: "Live Feeds Active",
    badgeColor: "emerald",
    subFeatures: [
      {
        id: "gate-release",
        icon: "Waves",
        title: "Gate Release Telemetry",
        tag: "Hirakud Spillway",
        status: "Normal Flow (12k cfs)",
        statusTier: "emerald",
        badge: "Telemetry",
        detail: {
          summary: "Real-time telemetry from Hirakud Dam spillway gates with discharge velocity tracking.",
          latency: "<1.2s sensor sync",
          specs: "Hydraulic gauge sensors linked to Sambalpur district disaster command unit.",
          actionHint: "Auto-alerts riverside tourists 45 minutes ahead of scheduled gate lifts."
        }
      },
      {
        id: "weather-surge",
        icon: "CloudRain",
        title: "Weather & Rain Surge",
        tag: "Doppler Radar",
        status: "Precipitation 2.4mm/h",
        statusTier: "emerald",
        badge: "Radar",
        detail: {
          summary: "High-resolution localized Doppler precipitation & flash-flood vulnerability indexes.",
          latency: "5 min cycle",
          specs: "Micro-climate meteorological feeds calibrated for Mahanadi basin topographies.",
          actionHint: "Dynamic safe zone rerouting during monsoon surges."
        }
      },
      {
        id: "risk-rating",
        icon: "ShieldAlert",
        title: "Explainable Risk Rating",
        tag: "4-Tier Matrix",
        status: "Level 1 (Safe)",
        statusTier: "emerald",
        badge: "AI Risk",
        detail: {
          summary: "Green / Yellow / Orange / Red dynamic geofenced risk envelopes calculated in real-time.",
          latency: "Instantaneous",
          specs: "Multi-factor heuristic fusing crowd density, water velocity, and slope gradient.",
          actionHint: "Zero ambiguity: clear perimeter warnings before entering high-risk zones."
        }
      },
      {
        id: "historical-density",
        icon: "Activity",
        title: "Time-Decay Incident Density",
        tag: "10-Year Heatmap",
        status: "Low Historical Risk",
        statusTier: "blue",
        badge: "Predictive",
        detail: {
          summary: "Spatiotemporal decay algorithms weighting historical incident clusters by season and hour.",
          latency: "Batch trained daily",
          specs: "Filters out outdated hazards while amplifying seasonal tourist hazards.",
          actionHint: "Guides route planners with historical safety benchmarks."
        }
      }
    ]
  },
  {
    id: "incident-reporting",
    name: "Instant Incident Reporting",
    shortName: "Incident Report",
    icon: "FileText",
    tagline: "Rapid multi-modal AI classification & precision geotagging",
    status: "AI Classifier Ready",
    badgeColor: "blue",
    subFeatures: [
      {
        id: "auto-geotag",
        icon: "MapPin",
        title: "Auto Geotagging & GPS Fix",
        tag: "Accuracy ±2.4m",
        status: "Satellite Locked",
        statusTier: "emerald",
        badge: "GNSS",
        detail: {
          summary: "Sub-3-meter GPS/NavIC hardware lock with automatic elevation & terrain tagging.",
          latency: "Instant lock",
          specs: "Fuses browser geolocation API, cellular tri-angulation, and cached map tiles.",
          actionHint: "Pins incident coordinates with zero manual entry required."
        }
      },
      {
        id: "ai-classifier",
        icon: "Cpu",
        title: "Multi-Modal AI Classifier",
        tag: "Edge Inference",
        status: "Model v4.2 Active",
        statusTier: "blue",
        badge: "Computer Vision",
        detail: {
          summary: "Lightweight computer vision model detects hazard types (water, fire, medical, slip) on-device.",
          latency: "<350ms inference",
          specs: "Quantized neural network designed for low-power mobile browsers.",
          actionHint: "Categorizes urgency and routes to correct municipal department."
        }
      },
      {
        id: "voice-dispatch",
        icon: "Mic",
        title: "Voice-To-Text Dispatch",
        tag: "12 Languages",
        status: "Odia/Hindi/Eng Ready",
        statusTier: "emerald",
        badge: "Speech AI",
        detail: {
          summary: "Speak naturally in regional dialects; automatically transcribed and translated for responders.",
          latency: "Streamed audio",
          specs: "Whisper-tiny edge model tuned for tourism vocabulary and urgent phrases.",
          actionHint: "Enables hands-free emergency reporting while moving."
        }
      },
      {
        id: "witness-mode",
        icon: "EyeOff",
        title: "Anonymous Witness Reporting",
        tag: "Zero-Trace Crypt",
        status: "Encrypted E2EE",
        statusTier: "blue",
        badge: "Privacy",
        detail: {
          summary: "Report harassment, scams, or ecological hazards without revealing personal identity.",
          latency: "Real-time relay",
          specs: "Zero-knowledge cryptographic hashing strips device fingerprints.",
          actionHint: "Encourages transparent tourist community safety contributions."
        }
      }
    ]
  },
  {
    id: "emergency-sos",
    name: "1-Tap Emergency SOS",
    shortName: "Emergency SOS",
    icon: "AlertTriangle",
    tagline: "Instant dispatch integration with local first responders & 112",
    status: "Priority Line Active",
    badgeColor: "crimson",
    subFeatures: [
      {
        id: "direct-112",
        icon: "Radio",
        title: "Zero-Latency 112 Gateway",
        tag: "National Helpline",
        status: "Emergency Trunk Ready",
        statusTier: "crimson",
        badge: "Direct Line",
        detail: {
          summary: "Direct API conduit to Odisha State Disaster Management & Police Control Rooms.",
          latency: "<180ms dispatch",
          specs: "Pre-authenticated emergency trunk sending telemetry payload and caller location.",
          actionHint: "Eliminates call center queue delays during critical incidents."
        }
      },
      {
        id: "live-responders",
        icon: "Navigation",
        title: "Live Responder Radar",
        tag: "Nearest Unit: 2.1km",
        status: "3 Units Patroling",
        statusTier: "emerald",
        badge: "Telemetry",
        detail: {
          summary: "Tracks closest tourist police units, lifeguards, and forest rangers with dynamic ETA.",
          latency: "3s telemetry ping",
          specs: "GPS transponder network attached to emergency patrol boats and patrol vehicles.",
          actionHint: "Shows real-time arrival vector to alleviate victim panic."
        }
      },
      {
        id: "sms-whatsapp-ping",
        icon: "Send",
        title: "Emergency Contact Ping",
        tag: "SMS + WhatsApp",
        status: "3 Guardians Synced",
        statusTier: "blue",
        badge: "Guardian Sync",
        detail: {
          summary: "Sends live tracking link and distress message to pre-registered family guardians.",
          latency: "Concurrent send",
          specs: "Dual-carrier fallback SMS gateway with WhatsApp Cloud API webhook.",
          actionHint: "Guardian sees exact coordinates and real-time battery level."
        }
      },
      {
        id: "siren-beacon",
        icon: "Volume2",
        title: "Siren & Distress Beacon",
        tag: "105 dB Pulsing",
        status: "Strobe Ready",
        statusTier: "amber",
        badge: "Hardware",
        detail: {
          summary: "High-frequency audio beacon coupled with screen optical distress strobe.",
          latency: "Immediate",
          specs: "Maximizes acoustic penetration through river rushing noise and dense canopy.",
          actionHint: "Helps rescue dogs and search boats pinpoint lost tourists in fog/dark."
        }
      }
    ]
  },
  {
    id: "offline-safety",
    name: "Zero-Network / Offline Safety",
    shortName: "Offline Safety",
    icon: "WifiOff",
    tagline: "Resilient safety mechanics when deep inside zero-cellular valleys",
    status: "Local Cache Armed",
    badgeColor: "emerald",
    subFeatures: [
      {
        id: "cached-safety-point",
        icon: "Anchor",
        title: "Last-Known Safety Cache",
        tag: "Offline Storage",
        status: "Cached 100m ago",
        statusTier: "emerald",
        badge: "PWA Storage",
        detail: {
          summary: "Persistent indexedDB safety breadcrumb cached locally before cellular drop-off.",
          latency: "Local zero-latency",
          specs: "Records last confirmed tower ping, altitude, battery life, and trajectory heading.",
          actionHint: "Search and rescue uses heading vector if traveler goes dark."
        }
      },
      {
        id: "mesh-nearby",
        icon: "Share2",
        title: "Mesh P2P Bluetooth Alert",
        tag: "Range ~80m",
        status: "BLE Beacon Active",
        statusTier: "blue",
        badge: "BLE Mesh",
        detail: {
          summary: "Hops emergency packets peer-to-peer across other nearby tourist phones via BLE.",
          latency: "Hop-based",
          specs: "Ultralow power Bluetooth Low Energy background beaconing protocol.",
          actionHint: "Dispatches SOS through neighboring tourists once someone gains signal."
        }
      },
      {
        id: "offline-guidebook",
        icon: "BookOpen",
        title: "Compressed Emergency Guide",
        tag: "1.4 MB Package",
        status: "Fully Downloaded",
        statusTier: "emerald",
        badge: "Self-Sufficient",
        detail: {
          summary: "First-aid, snakebite triage, river crossing guidelines, and survival tactics offline.",
          latency: "0ms local",
          specs: "High-compression visual vector schematics readable under direct sunlight.",
          actionHint: "Empowers immediate self-rescue and buddy stabilization."
        }
      },
      {
        id: "sms-fallback",
        icon: "MessageSquare",
        title: "SMS Fallback Gateway",
        tag: "2G GSM Only",
        status: "Zero-Data Capable",
        statusTier: "amber",
        badge: "Protocol",
        detail: {
          summary: "Encodes incident type and GPS into a compressed 80-character binary SMS payload.",
          latency: "GSM dependent",
          specs: "Bypasses 4G/5G data requirement; works over fringe 1-bar cellular voice towers.",
          actionHint: "Transmits distress calls when Internet packet data completely fails."
        }
      }
    ]
  },
  {
    id: "duplicate-triage",
    name: "Duplicate Detection & Triage",
    shortName: "Duplicate Triage",
    icon: "Layers",
    tagline: "Intelligent spatio-temporal clustering: 7 tourist reports → 1 real dispatch",
    status: "Clustering Active",
    badgeColor: "blue",
    subFeatures: [
      {
        id: "dbscan-clustering",
        icon: "Boxes",
        title: "Spatio-Temporal DBSCAN",
        tag: "Radius 150m / 20m",
        status: "7 Reports → 1 Incident",
        statusTier: "blue",
        badge: "Clustering",
        detail: {
          summary: "Mathematical density clustering aggregates overlapping public crowd reports instantly.",
          latency: "<200ms cluster",
          specs: "Haversine geo-distance + temporal decay prevents duplicate dispatch fatigue.",
          actionHint: "Prevents dispatching 10 ambulances to the same minor roadside incident."
        }
      },
      {
        id: "nlp-dedup",
        icon: "Sparkles",
        title: "Semantic Deduplication",
        tag: "Cosine Similarity 94%",
        status: "Embedding Engine",
        statusTier: "emerald",
        badge: "Vector Match",
        detail: {
          summary: "Compares caller descriptions across different languages using semantic text embeddings.",
          latency: "<90ms embedding",
          specs: "Identifies whether 'broken bridge' and 'collapsed wooden walkway' refer to identical spot.",
          actionHint: "Synthesizes multi-caller inputs into a unified comprehensive incident brief."
        }
      },
      {
        id: "priority-matrix",
        icon: "GitPullRequest",
        title: "Priority Dispatch Matrix",
        tag: "Triage Score 9.2/10",
        status: "Dynamic Queue",
        statusTier: "crimson",
        badge: "Algorithm",
        detail: {
          summary: "Weights life-safety risks over property damage or general inquiries dynamically.",
          latency: "Continuous rank",
          specs: "Calculates injury probability, vulnerable group tags (elderly/kids), and weather factors.",
          actionHint: "Guarantees critical human rescue teams are never held up in queue."
        }
      },
      {
        id: "feedback-loop",
        icon: "CheckCircle2",
        title: "Verified Authority Feedback",
        tag: "Police / NDRF Verified",
        status: "Audit Trail Signed",
        statusTier: "emerald",
        badge: "Governance",
        detail: {
          summary: "First responder on scene taps confirmation, updating all 7 reporting tourists in real-time.",
          latency: "Push notification",
          specs: "Cryptographically signed timestamp by on-site officer with badge number ID.",
          actionHint: "Reassures tourists that help has arrived, stopping duplicate frantic calls."
        }
      }
    ]
  },
  {
    id: "inclusive-care",
    name: "Inclusive Care & Accessibility",
    shortName: "Inclusive Care",
    icon: "HeartHandshake",
    tagline: "Dedicated safe corridors, ramp grades, and sensory accessibility for all",
    status: "Accessibility A11y",
    badgeColor: "emerald",
    subFeatures: [
      {
        id: "wheelchair-nav",
        icon: "Accessibility",
        title: "Wheelchair & Grade Routing",
        tag: "Slope ≤ 1:12 Max",
        status: "Steep Slopes Avoided",
        statusTier: "emerald",
        badge: "A11y Routing",
        detail: {
          summary: "Navigates paths strictly featuring paved surfaces, elevators, and certified ADA ramps.",
          latency: "Dynamic reroute",
          specs: "LIDAR elevation profiles integrated into Sambalpur heritage promenade maps.",
          actionHint: "Flags stairs and unpaved mud embankments well ahead of approach."
        }
      },
      {
        id: "high-contrast",
        icon: "SunMedium",
        title: "High-Contrast Solar Mode",
        tag: "WCAG AAA 7:1",
        status: "Ultra-Readable",
        statusTier: "blue",
        badge: "Visual A11y",
        detail: {
          summary: "Optimized for extreme outdoor daylight glare and low-vision senior travelers.",
          latency: "Instant switch",
          specs: "Monochrome high-gamut tokens meeting strictest WCAG AAA contrast ratios.",
          actionHint: "Ensures critical emergency instructions remain legible under blinding sun."
        }
      },
      {
        id: "senior-corridors",
        icon: "Footprints",
        title: "Senior Slow-Pace Corridors",
        tag: "Rest Benches <120m",
        status: "Hydration Points Mapped",
        statusTier: "emerald",
        badge: "Senior Safe",
        detail: {
          summary: "Recommends shaded walking trails with frequent benches, drinking water, and medical kiosks.",
          latency: "Pre-computed",
          specs: "Avoids high-crowd surge gates and uneven cobblestones.",
          actionHint: "Provides estimated walking times adjusted for gentle, measured walking speeds."
        }
      },
      {
        id: "tactile-audio",
        icon: "VolumeCheck",
        title: "Tactile & Audio Wayfinding",
        tag: "Haptic Pulses",
        status: "Audio Beacons On",
        statusTier: "blue",
        badge: "Sensory",
        detail: {
          summary: "Directional vibration rhythms and screen-reader audio cues for visually impaired visitors.",
          latency: "Device haptic",
          specs: "Uses standard web vibration API combined with ARIA live announcer regions.",
          actionHint: "Vibrates twice when approaching a safe pedestrian crossing."
        }
      }
    ]
  }
];

export const liveAlertsData = [
  {
    id: "alert-1",
    time: "2 mins ago",
    severity: "warning",
    title: "Hirakud Gate Alert: Gates 7 & 8 Scheduled Lift",
    description: "Water Resources Dept will open 2 sluice gates at 14:00 hrs. Mahanadi downstream riverbed evacuation in progress.",
    location: "Burla / Hirakud Downstream",
    badge: "Discharge Telemetry"
  },
  {
    id: "alert-2",
    time: "18 mins ago",
    severity: "info",
    title: "Eco-Retreat Sambalpur Safe Corridor Open",
    description: "Dedicated tourist police patrol station active. Zero congestion reported along Debrigarh approach road.",
    location: "Debrigarh Wildlife Sanctuary",
    badge: "Patrol Radar"
  },
  {
    id: "alert-3",
    time: "1 hour ago",
    severity: "success",
    title: "Samaleswari Temple Accessibility Ramp Cleared",
    description: "Wheelchair assistance golf carts available at North Gate entry with zero waiting time.",
    location: "Samaleswari Temple Complex",
    badge: "Inclusive Care"
  }
];
