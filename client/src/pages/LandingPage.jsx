import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { 
  ShieldCheck, 
  Activity, 
  Radio, 
  Sparkles, 
  MapPin, 
  AlertOctagon, 
  Zap,
  ArrowRight
} from 'lucide-react';

export default function LandingPage({ activeCategory, onQuickSos }) {
  return (
    <main className="min-h-screen pt-14 pb-44 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-start">
      {/* 
        Hero Strip: Single-column centered vertical stack
        YATRI SATHI Title -> Tagline -> Sector Badge -> Live Telemetry Stats
      */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 flex flex-col items-center text-center w-full">
        {/* Brand Title with Interactive Floating & Neon Glow */}
        <div className="group inline-flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
          <h1 className="flex items-center justify-center gap-2 sm:gap-3 leading-none">
            <span className="font-hero text-6xl sm:text-7xl lg:text-8xl tracking-wider text-slate-950">
              YATRI
            </span>
            <span className="font-hero text-6xl sm:text-7xl lg:text-8xl tracking-wider text-blue-600 transition-all duration-300 group-hover:glow-blue-text group-hover:text-blue-500">
              SATHI
            </span>
          </h1>

          {/* Animated Vector Doodle Underline */}
          <svg
            className="w-48 sm:w-64 h-4 mt-[-6px] overflow-visible"
            viewBox="0 0 250 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 14C50 4 150 18 247 6C180 18 90 20 15 16"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-doodle"
            />
          </svg>
        </div>

        {/* Cinematic Two-Tone Tagline directly beneath doodle */}
        <div className="mt-2 sm:mt-2.5 flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-sans">
          <span className="text-slate-900">Lost in wonder.</span>
          <span className="text-blue-600 font-extrabold drop-shadow-sm">Never in the dark.</span>
        </div>

        {/* Active Sector Telemetry Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-blue-800 text-xs font-semibold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span>Active Sector: Sambalpur & Hirakud Reservoir Corridor</span>
        </div>

        {/* Live Quick Stats Strip */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
            <div className="font-hero text-3xl sm:text-4xl text-blue-700 leading-none">
              500+
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Monitored Zones
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
            <div className="font-hero text-3xl sm:text-4xl text-emerald-600 leading-none">
              &lt; 3 MIN
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              SOS Response ETA
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
            <div className="font-hero text-3xl sm:text-4xl text-sky-600 leading-none">
              24/7
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Dam Telemetry
            </div>
          </div>
        </div>
      </section>

      {/* 
        Active Category Header & Status Bar 
      */}
      <section className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-hero text-3xl sm:text-4xl text-slate-900 uppercase tracking-wide">
              {activeCategory.name}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
              {activeCategory.status}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {activeCategory.tagline}
          </p>
        </div>

        {/* Emergency Trigger Shortcut */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onQuickSos}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <AlertOctagon className="w-4 h-4" />
            Instant SOS
          </button>
        </div>
      </section>

      {/* 
        Sub-Feature Bento Grid (2 to 3 columns)
        Each card uses floating physics with glowing hover popover 
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative">
        {activeCategory.subFeatures.map((sub, idx) => (
          <FeatureCard
            key={sub.id}
            item={sub}
            index={idx}
            placement={idx < 2 ? "top" : "bottom"}
          />
        ))}
      </section>

      {/* Bottom Architectural Info Strip (Zero bloat) */}
      <footer className="mt-16 pt-8 border-t border-slate-200/80 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Telemetry Node: Hirakud Hydro-Spillway Active</span>
        </div>
        <div className="font-mono text-[11px] text-slate-400">
          ODISHA TOURISM RESILIENCE FRAMEWORK • SIH 2026
        </div>
      </footer>
    </main>
  );
}
