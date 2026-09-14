import React from 'react';
import { Menu, Bell } from 'lucide-react';

export default function TopHeader({ onToggleNav, onOpenNotifications, unreadCount = 3 }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-b border-slate-200/80 z-40 px-6 flex items-center justify-between transition-colors duration-200">
      {/* Top Leftmost: Clean 3-bar Hamburger button */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={onToggleNav}
          aria-label="Toggle Navigation Menu"
          className="p-2 -ml-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-95 cursor-pointer"
        >
          <Menu className="w-5 h-5 stroke-[2.2]" />
        </button>
      </div>

      {/* Center Area: Completely blank and minimalist per specification */}
      <div className="flex-1" aria-hidden="true" />

      {/* Top Rightmost: Minimalist, transparent Bell icon with small blue status pip */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={onOpenNotifications}
          aria-label="View Safety Notifications"
          className="relative p-2 -mr-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-95 cursor-pointer"
        >
          <Bell className="w-5 h-5 stroke-[2.2]" />
          {unreadCount > 0 && (
            <span
              className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white animate-pulse"
              aria-label={`${unreadCount} unread alerts`}
            />
          )}
        </button>
      </div>
    </header>
  );
}
