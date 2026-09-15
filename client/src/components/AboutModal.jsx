import React, { useEffect } from 'react';
import {
  X,
  Info,
  ShieldCheck,
  Radio,
  PhoneCall,
  MapPin,
  WifiOff,
  Activity,
  HeartHandshake,
  ExternalLink
} from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  // ESC key listener to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        style={{
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 35px rgba(37, 99, 235, 0.15)'
        }}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/95">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-xs">
              <Info className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2
                  id="about-modal-title"
                  className="font-hero text-2xl sm:text-3xl tracking-wider text-slate-900 leading-none uppercase"
                >
                  About YatriSathi
                </h2>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                  SIH 2026
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Intelligent Tourist Safety & Resilience Mesh Platform
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close about modal"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          {/* Mission Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white shadow-md relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-300" />
                <span>Our Core Mission</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                Real-time tourist safety, emergency telemetry, and offline-first SOS assistance for the Hirakud & Sambalpur region.
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed pt-1">
                YatriSathi empowers visitors to explore Odisha's heritage and natural wonders with confidence. By bridging edge sensor feeds, dynamic risk zoning, and rapid response telemetry, the platform guarantees no traveler is ever stranded without help.
              </p>
            </div>
          </div>

          {/* Emergency Protocol 112 Banner */}
          <div className="bg-white rounded-2xl p-5 border border-red-200/80 shadow-xs relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Emergency Protocol: Direct Tie-in with Dial 112
                  </h4>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-100 text-red-700 border border-red-200">
                    ERSS Linked
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  YatriSathi interfaces directly with the National Emergency Response Support System (Dial 112). When an SOS trigger occurs, encrypted geospatial coordinates, SafeTrip identification, and vital health telemetry are prioritized for immediate dispatch to local Sambalpur police, medical units, and ODRAF water-rescue teams.
                </p>
              </div>
            </div>
          </div>

          {/* Key Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Real-Time Telemetry
                </h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous monitoring of reservoir water discharge levels, rapid weather changes, flood warnings, and geo-fenced safety perimeters around Sambalpur and Hirakud.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <WifiOff className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Offline-First SOS Mesh
                </h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Robust local device caching ensures offline maps, medical profile access, emergency guides, and SMS/mesh telemetry payloads operate even during remote zero-network zones.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Regional Focus Area
                </h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized protective coverage across Hirakud Dam, Burla Left & Right Dykes, Gandhi Minar, Debrigarh Wildlife Sanctuary, and Sambalpur heritage circuits.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  SafeTrip Profile Vault
                </h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autonomous, encrypted SafeTrip IDs preserve blood group, vital medical notes, and primary emergency kin contacts stored securely on the traveler's device.
              </p>
            </div>
          </div>

          {/* Regional & System Info Card */}
          <div className="bg-slate-100/80 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Dedicated for Smart India Hackathon (SIH 2026)</span>
            </div>
            <div className="font-mono font-bold text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
              v1.0.0 • SIH 2026 Core
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-white/95 flex items-center justify-between">
          <a
            href="tel:112"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency: Dial 112</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
