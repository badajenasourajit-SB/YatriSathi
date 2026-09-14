import React from 'react';
import { 
  Compass, 
  FileText, 
  AlertTriangle, 
  WifiOff, 
  Layers, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Activity
} from 'lucide-react';

const iconMap = {
  Compass,
  FileText,
  AlertTriangle,
  WifiOff,
  Layers,
  HeartHandshake
};

export default function BlueFeatureSidebar({
  categories,
  activeCategoryId,
  onSelectCategory,
  isCollapsed,
  onToggleCollapse
}) {
  return (
    <aside
      className={`fixed top-14 left-0 bottom-0 z-30 transition-all duration-300 ease-out flex flex-col bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 text-white border-r border-blue-900/50 shadow-xl select-none ${
        isCollapsed ? 'w-16' : 'w-72'
      }`}
      aria-label="Safety Modules Sidebar"
    >
      {/* Sidebar Header & Collapse Toggle */}
      <div className="h-14 px-3.5 flex items-center justify-between border-b border-white/10">
        {!isCollapsed && (
          <div className="flex items-center space-x-2 truncate">
            <Shield className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-hero text-lg tracking-widest text-slate-100 uppercase truncate">
              Safety Modules
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand modules sidebar' : 'Collapse modules sidebar'}
          className={`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ${
            isCollapsed ? 'mx-auto' : 'ml-auto'
          }`}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Modules List */}
      <nav className="flex-1 py-3 px-2 space-y-1.5 overflow-y-auto overflow-x-hidden">
        {categories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || Shield;
          const isActive = activeCategoryId === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-current={isActive ? 'page' : undefined}
              title={isCollapsed ? `${cat.name} — ${cat.tagline}` : undefined}
              className={`w-full group relative flex items-center rounded-xl transition-all duration-200 cursor-pointer ${
                isCollapsed ? 'justify-center p-3' : 'px-3 py-3'
              } ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {/* Module Index / Icon */}
              <div
                className={`flex items-center justify-center rounded-lg transition-transform group-hover:scale-105 shrink-0 ${
                  isActive
                    ? 'text-white'
                    : 'text-sky-300 group-hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5 stroke-[2]" />
              </div>

              {/* Full Title & Tagline when expanded */}
              {!isCollapsed && (
                <div className="ml-3 text-left overflow-hidden min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-hero text-base tracking-wide truncate leading-tight uppercase">
                      {cat.name}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-ping shrink-0" />
                    )}
                  </div>
                  <p
                    className={`text-[11px] leading-tight truncate mt-0.5 ${
                      isActive ? 'text-blue-100' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {cat.tagline}
                  </p>
                </div>
              )}

              {/* Floating Pill Tooltip when collapsed */}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium rounded-lg shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 transform -translate-x-2 group-hover:translate-x-0">
                  <p className="font-hero text-sm tracking-wide text-sky-300 uppercase">
                    {cat.name}
                  </p>
                  <p className="text-[10px] text-slate-300">{cat.tagline}</p>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer Indicator */}
      <div className="p-3 border-t border-white/10 bg-slate-950/50">
        {!isCollapsed ? (
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              Hirakud Telemetry
            </span>
            <span className="text-[10px] font-mono text-slate-400">SYNCED</span>
          </div>
        ) : (
          <div className="flex justify-center" title="Hirakud Telemetry Online">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        )}
      </div>
    </aside>
  );
}
