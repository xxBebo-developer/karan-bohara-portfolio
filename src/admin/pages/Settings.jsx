import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon,
  CogIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  BellIcon,
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
    mobile: true
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: UserCircleIcon },
    { id: 'appearance', label: 'Appearance', icon: PaintBrushIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
    { id: 'security', label: 'Security', icon: ShieldCheckIcon },
    { id: 'preferences', label: 'Preferences', icon: CogIcon },
  ];

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  const toggleNotification = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Profile Information</h3>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <img
                    src="/api/placeholder/128/128"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-navy-600"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <CogIcon className="w-4 h-4" />
                  </motion.button>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy-800 dark:text-white">John Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Member since January 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Developer"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                    Job Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Full-Stack Developer"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                    Location
                  </label>
                  <input
                    type="text"
                    defaultValue="San Francisco, CA"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mt-6">
                <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React, Node.js, and cloud technologies."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200 resize-none"
                />
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Appearance Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-navy-800 dark:text-white mb-4">Theme</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['Light', 'Dark', 'System'].map((theme) => (
                      <motion.div
                        key={theme}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          theme === 'Light' 
                            ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30' 
                            : 'border-gray-200 dark:border-navy-600 hover:border-cyan-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            theme === 'Light' ? 'bg-yellow-100' : 
                            theme === 'Dark' ? 'bg-gray-800' : 'bg-gradient-to-br from-yellow-100 to-gray-800'
                          }`}>
                            {theme === 'Light' && <SunIcon className="w-6 h-6 text-yellow-600" />}
                            {theme === 'Dark' && <MoonIcon className="w-6 h-6 text-gray-300" />}
                            {theme === 'System' && <ComputerDesktopIcon className="w-6 h-6 text-gray-600" />}
                          </div>
                          <div>
                            <p className="font-semibold text-navy-800 dark:text-white">{theme}</p>
                            <p className="text-sm text-gray-500">
                              {theme === 'Light' && 'Light mode'}
                              {theme === 'Dark' && 'Dark mode'}
                              {theme === 'System' && 'Follow system'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-navy-800 dark:text-white mb-4">Accent Color</h4>
                  <div className="flex space-x-3">
                    {['bg-cyan-500', 'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'].map((color) => (
                      <motion.button
                        key={color}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-full ${color} relative`}
                      >
                        {color === 'bg-cyan-500' && (
                          <CheckIcon className="w-5 h-5 text-white absolute inset-0 m-auto" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-navy-800 dark:text-white mb-4">Font Size</h4>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Small</span>
                    <input 
                      type="range" 
                      min="12" 
                      max="18" 
                      defaultValue="14"
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-navy-700"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Large</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Notification Preferences</h3>
              
              <div className="space-y-6">
                {Object.entries({
                  email: 'Email Notifications',
                  browser: 'Browser Notifications', 
                  mobile: 'Mobile Push Notifications'
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-700 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-navy-800 dark:text-white">{label}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Receive {label.toLowerCase()} about important updates
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleNotification(key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications[key] ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications[key] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">Security Settings</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-navy-700 rounded-xl p-6">
                  <h4 className="font-semibold text-navy-800 dark:text-white mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-800 dark:text-white"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
                    >
                      Update Password
                    </motion.button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-navy-700 rounded-xl p-6">
                  <h4 className="font-semibold text-navy-800 dark:text-white mb-4">Two-Factor Authentication</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-green-100 text-green-700 hover:bg-green-200 font-semibold rounded-xl"
                  >
                    Enable 2FA
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-6">General Preferences</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                      Language
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-navy-800 dark:text-white">
                      Timezone
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white">
                      <option>UTC-8 (Pacific Time)</option>
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (Central European Time)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-navy-700 rounded-xl p-6">
                  <h4 className="font-semibold text-navy-800 dark:text-white mb-4">Data & Privacy</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-navy-800 dark:text-white">Analytics</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Help improve our service</p>
                      </div>
                      <motion.button className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-500">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
          Settings
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-gray-200 dark:border-navy-700 p-2">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-700'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-gray-200 dark:border-navy-700 p-8">
            {renderTabContent()}
            
            {/* Save Button */}
            <div className="flex justify-end pt-8 border-t border-gray-200 dark:border-navy-700 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;