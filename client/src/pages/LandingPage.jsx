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
    <main className="min-h-screen pt-14 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-start">
      {/* 
        Hero Strip: Clean, heroic centered banner with Captain America display font
        "SAFE TRAVELS. ZERO UNCERTAINTY."
        Quick live stats (500+ Monitored Zones, <3m SOS, 24/7 Telemetry)
      */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 text-center">
        {/* Quick Active Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-blue-800 text-xs font-semibold mb-5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span>Active Sector: Sambalpur & Hirakud Reservoir Corridor</span>
        </div>

        {/* Hero Title with Captain America Bebas Neue Typography */}
        <h1 className="font-hero text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-slate-900 leading-[0.95] uppercase">
          SAFE TRAVELS.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500">
            ZERO UNCERTAINTY.
          </span>
        </h1>

        {/* Crisp Sub-Header (No text bloat) */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Intelligent hazard telemetry, millisecond SOS dispatch, and offline safety breadcrumbs for every tourist journey.
        </p>

        {/* Live Quick Stats Strip */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
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
          <FeatureCard key={sub.id} item={sub} index={idx} />
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
