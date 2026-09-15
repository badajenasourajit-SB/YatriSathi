import React, { useState, useEffect } from 'react';
import ProfileModal from './ProfileModal';
import AboutModal from './AboutModal';
import { 
  X, 
  ShieldCheck, 
  Info, 
  ExternalLink, 
  ChevronRight
} from 'lucide-react';

export default function NavigationDrawer({ 
  isOpen, 
  onClose, 
  onSelectRoute, 
  currentRoute = 'Home', 
  onOpenProfile,
  onOpenAbout
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // ESC key listener to close drawer when open
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

  const menuItems = [
    { id: 'profile', label: 'Tourist Safety Profile', icon: ShieldCheck, badge: 'Verified' },
    { id: 'about', label: 'About YatriSathi', icon: Info }
  ];

  const handleMenuItemClick = (item) => {
    if (item.id === 'profile') {
      if (onOpenProfile) {
        onOpenProfile();
      } else {
        setIsProfileOpen(true);
      }
      onClose();
      return;
    }

    if (item.id === 'about') {
      if (onOpenAbout) {
        onOpenAbout();
      } else {
        setIsAboutOpen(true);
      }
      onClose();
      return;
    }

    if (onSelectRoute) onSelectRoute(item.label);
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Off-canvas slide-out drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white border-r border-slate-200/80 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/30">
              <span className="font-hero text-xl tracking-wider">YS</span>
            </div>
            <div>
              <h2 className="font-hero text-2xl tracking-wider text-slate-900 leading-none">
                YATRISATHI
              </h2>
              <p className="text-[10px] font-medium uppercase tracking-widest text-blue-600">
                Tourist Safety Core
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Navigation"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentRoute === item.label;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleMenuItemClick(item)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-all group cursor-pointer ${
                  item.highlight
                    ? 'text-red-600 bg-red-50/70 hover:bg-red-100/70 border border-red-200/60'
                    : isActive
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-4.5 h-4.5 ${
                      item.highlight
                        ? 'text-red-600'
                        : isActive
                        ? 'text-blue-600'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Drawer Footer / Helpline Shortcut */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/60">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>National Emergency</span>
            <a
              href="tel:112"
              className="inline-flex items-center font-bold text-red-600 hover:text-red-700 gap-1"
            >
              Dial 112 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-2 text-[10px] text-slate-400 text-center">
            YatriSathi v1.0.0 • SIH 2026 Core
          </div>
        </div>
      </aside>

      {/* Tourist Safety Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* About YatriSathi Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </>
  );
}
