import React, { useState } from 'react';
import TopHeader from './components/TopHeader';
import NavigationDrawer from './components/NavigationDrawer';
import BlueFeatureSidebar from './components/BlueFeatureSidebar';
import NotificationModal from './components/NotificationModal';
import LandingPage from './pages/LandingPage';
import { safetyCategories, liveAlertsData } from './data/featuresData';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('hazard-zones');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [alerts, setAlerts] = useState(liveAlertsData);
  const [currentRoute, setCurrentRoute] = useState('Home');

  // Active category object lookup
  const activeCategory =
    safetyCategories.find((cat) => cat.id === activeCategoryId) || safetyCategories[0];

  const handleQuickSos = () => {
    setActiveCategoryId('emergency-sos');
  };

  const handleClearAlerts = () => {
    setAlerts([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Sleek Fixed Thin Top Header (Blank center, Left Hamburger, Right Bell) */}
      <TopHeader
        onToggleNav={() => setIsNavOpen(true)}
        onOpenNotifications={() => setIsNotificationOpen(true)}
        unreadCount={alerts.length}
      />

      {/* Off-canvas Navigation Drawer */}
      <NavigationDrawer
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        currentRoute={currentRoute}
        onSelectRoute={(route) => setCurrentRoute(route)}
      />

      {/* Main Layout Container with Blue Feature Sidebar */}
      <div className="flex-1 flex pt-0">
        {/* Collapsible Blue Feature Sidebar on Left */}
        <BlueFeatureSidebar
          categories={safetyCategories}
          activeCategoryId={activeCategoryId}
          onSelectCategory={(id) => setActiveCategoryId(id)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        />

        {/* Dynamic Scrollable Canvas Area (Offset according to sidebar width) */}
        <div
          className={`flex-1 h-screen overflow-y-auto overflow-x-hidden scroll-smooth transition-all duration-300 ease-out ${
            isSidebarCollapsed ? 'pl-16' : 'pl-16 sm:pl-72'
          }`}
        >
          <LandingPage
            activeCategory={activeCategory}
            onQuickSos={handleQuickSos}
          />
        </div>
      </div>

      {/* Live Safety Bulletins Notification Modal */}
      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        alerts={alerts}
        onClearAlerts={handleClearAlerts}
      />
    </div>
  );
}
