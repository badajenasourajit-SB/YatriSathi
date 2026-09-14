import React from 'react';
import { X, Bell, AlertTriangle, ShieldCheck, Info, Clock, MapPin, Check } from 'lucide-react';

const alertIcons = {
  warning: AlertTriangle,
  info: Info,
  success: ShieldCheck
};

const alertThemes = {
  warning: {
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
    accentBorder: 'border-l-amber-500'
  },
  info: {
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
    accentBorder: 'border-l-blue-500'
  },
  success: {
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    accentBorder: 'border-l-emerald-500'
  }
};

export default function NotificationModal({ isOpen, onClose, alerts = [], onClearAlerts }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="notification-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-xl bg-white/95 rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
        style={{
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.2), 0 0 30px rgba(37, 99, 235, 0.15)'
        }}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/90">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <Bell className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h2
                id="notification-modal-title"
                className="font-hero text-2xl tracking-wider text-slate-900 leading-none uppercase"
              >
                Live Safety Bulletins
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time disaster telemetry & district updates
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close notifications modal"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Alerts Stream */}
        <div className="p-6 overflow-y-auto space-y-3.5 flex-1 bg-slate-50/40">
          {alerts.length === 0 ? (
            <div className="text-center py-10">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">All Clear</p>
              <p className="text-xs text-slate-400 mt-1">
                No active hazard warnings or emergency bulletins.
              </p>
            </div>
          ) : (
            alerts.map((alert) => {
              const theme = alertThemes[alert.severity] || alertThemes.info;
              const Icon = alertIcons[alert.severity] || Info;

              return (
                <div
                  key={alert.id}
                  className={`bg-white rounded-xl p-4 shadow-xs border border-slate-200/80 border-l-4 ${theme.accentBorder} transition-all hover:shadow-md`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-md border ${theme.iconBg}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-hero text-lg tracking-wide text-slate-900 uppercase">
                        {alert.title}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${theme.badge}`}
                    >
                      {alert.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {alert.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      {alert.location}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-slate-400">
                      <Clock className="w-3 h-3" />
                      {alert.time}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-white/90 flex items-center justify-between">
          <span className="text-xs text-slate-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active District Telemetry
          </span>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Dismiss
            </button>
            <button
              type="button"
              onClick={() => {
                if (onClearAlerts) onClearAlerts();
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/30 transition-all cursor-pointer flex items-center gap-1"
            >
              <Check className="w-3.5 h-3.5" />
              Acknowledge All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
