import React, { useState } from 'react';
import {
  Waves,
  CloudRain,
  ShieldAlert,
  Activity,
  MapPin,
  Cpu,
  Mic,
  EyeOff,
  Radio,
  Navigation,
  Send,
  Volume2,
  Anchor,
  Share2,
  BookOpen,
  MessageSquare,
  Boxes,
  Sparkles,
  GitPullRequest,
  CheckCircle2,
  Accessibility,
  SunMedium,
  Footprints,
  Shield,
  Zap,
  Info
} from 'lucide-react';

const iconRegistry = {
  Waves,
  CloudRain,
  ShieldAlert,
  Activity,
  MapPin,
  Cpu,
  Mic,
  EyeOff,
  Radio,
  Navigation,
  Send,
  Volume2,
  Anchor,
  Share2,
  BookOpen,
  MessageSquare,
  Boxes,
  Sparkles,
  GitPullRequest,
  CheckCircle2,
  Accessibility,
  SunMedium,
  Footprints
};

const statusBadgeStyles = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  blue: 'bg-blue-50 text-blue-700 border-blue-200/80',
  amber: 'bg-amber-50 text-amber-700 border-amber-200/80',
  crimson: 'bg-red-50 text-red-700 border-red-200/80'
};

const statusDotStyles = {
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  amber: 'bg-amber-500',
  crimson: 'bg-red-500'
};

export default function FeatureCard({ item, index, placement = "top" }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconRegistry[item.icon] || Shield;
  const statusColorClass = statusBadgeStyles[item.statusTier] || statusBadgeStyles.blue;
  const dotColorClass = statusDotStyles[item.statusTier] || statusDotStyles.blue;

  const isTop = placement === "top";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      className={`relative group outline-none select-none transition-all duration-200 ${
        isHovered ? 'z-40' : 'z-10'
      }`}
    >
      {/* 
        Default Floating Card 
        Displays strictly: Icon, Heroic Title, and Brief Tag (Zero paragraph clutter)
      */}
      <div
        className="w-full bg-white rounded-2xl p-6 transition-all duration-300 ease-out transform translate-y-0 shadow-sm border border-slate-200/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/15 hover:border-blue-400 floating-card-gpu cursor-pointer flex flex-col justify-between min-h-[160px]"
      >
        {/* Top row: Icon & Tag */}
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-xs">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide border ${statusColorClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass} animate-pulse`} />
            {item.tag}
          </span>
        </div>

        {/* Bottom row: Heroic Title & Micro Status */}
        <div className="mt-4">
          <h3 className="font-hero text-2xl tracking-wider text-slate-900 group-hover:text-blue-700 transition-colors uppercase leading-none">
            {item.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            {item.status}
          </p>
        </div>
      </div>

      {/* 
        Elevated Glowing Tooltip / Popover with Row-Aware Dynamic Positioning
        Top row cards: Projects UPWARDS (bottom-full mb-3)
        Bottom row cards: Projects DOWNWARDS (top-full mt-3)
      */}
      <div
        aria-hidden={!isHovered}
        className={`absolute left-0 right-0 z-40 rounded-2xl bg-white/95 p-5 text-left transition-all duration-200 ease-out pointer-events-none transform ${
          isTop
            ? 'bottom-full mb-3 origin-bottom ' +
              (isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95')
            : 'top-full mt-3 origin-top ' +
              (isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95')
        }`}
        style={{
          boxShadow: '0 0 25px rgba(37, 99, 235, 0.35), 0 10px 25px -5px rgba(15, 23, 42, 0.1)',
          border: '1px solid rgba(96, 165, 250, 0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      >
        {/* Popover Header */}
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-blue-100/60">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Telemetry Insight • {item.badge}
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            {item.detail.latency}
          </span>
        </div>

        {/* Explainable detail content */}
        <p className="text-xs font-semibold text-slate-800 leading-relaxed">
          {item.detail.summary}
        </p>

        <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1.5 text-[11px]">
          <div className="text-slate-500">
            <strong className="text-slate-700 font-semibold">Engine:</strong>{' '}
            {item.detail.specs}
          </div>
          <div className="text-blue-700 font-medium bg-blue-50/80 rounded-md p-2 border border-blue-100/60">
            💡 {item.detail.actionHint}
          </div>
        </div>
      </div>
    </div>
  );
}
