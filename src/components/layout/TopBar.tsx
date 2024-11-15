import React, { useState } from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsLoginModalOpen(false); // Close login modal when opening profile dropdown
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsProfileOpen(false); // Close profile dropdown when opening login modal
  };

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <header className="h-16 bg-white border-b fixed top-0 right-0 left-0 lg:left-64 z-10 transition-all duration-300">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search movies, production houses..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleNotificationClick}
            className="relative p-2 hover:bg-gray-100 rounded-full"
          >
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="hidden sm:flex items-center gap-3 pl-4 border-l">
            <div className="text-right">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
            <button
              onClick={handleProfileClick}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {isNotificationOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 w-80">
          <h4 className="font-semibold text-gray-800">Latest News</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>New movie releases for December 2024!</li>
            <li>Upcoming blockbuster: Avatar 3, 2025</li>
            <li>Join our premium membership for exclusive perks!</li>
          </ul>
        </div>
      )}

      {/* Profile Popup or Login Modal */}
      {isProfileOpen && !isLoginModalOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 w-64">
          <h4 className="font-semibold text-gray-800">Profile</h4>
          <p className="text-gray-600">Manage your account and preferences.</p>
          <button
            onClick={handleLoginClick}
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg"
          >
            Login or Register
          </button>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg w-96">
            <h4 className="text-xl font-semibold text-gray-800">
              Login / Register
            </h4>
            <input
              type="text"
              placeholder="Email"
              className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
              Login
            </button>
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="mt-4 w-full py-2 bg-gray-300 text-gray-700 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
