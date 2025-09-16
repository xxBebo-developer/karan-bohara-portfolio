import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  FolderIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftIcon,
  CogIcon,
  SunIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Projects', href: '/admin/projects', icon: FolderIcon },
    { name: 'Services', href: '/admin/services', icon: WrenchScrewdriverIcon },
    { name: 'Testimonials', href: '/admin/testimonials', icon: ChatBubbleLeftIcon },
    { name: 'Settings', href: '/admin/settings', icon: CogIcon },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const getPageTitle = () => {
    const currentNav = navigation.find(nav => nav.href === location.pathname);
    return currentNav ? currentNav.name : 'Admin Panel';
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-navy-900 font-sans ${darkMode ? 'dark' : ''}`}>
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      } lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:static lg:inset-0`}>
        <div className="flex flex-col flex-grow bg-navy-900 dark:bg-gray-900 shadow-xl">
          {/* Sidebar header */}
          <div className={`flex items-center justify-between h-16 px-4 bg-navy-800 dark:bg-gray-800 border-b border-navy-700 dark:border-gray-700 ${
            sidebarCollapsed ? 'px-2' : 'px-4'
          }`}>
            {!sidebarCollapsed && (
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-bold text-white"
              >
                Admin Panel
              </motion.h2>
            )}
            <button
              onClick={() => sidebarCollapsed ? setSidebarCollapsed(false) : setSidebarCollapsed(true)}
              className="hidden lg:block p-2 text-gray-300 hover:text-white rounded-lg hover:bg-navy-700 dark:hover:bg-gray-700 transition-colors"
            >
              {sidebarCollapsed ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-navy-700 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className={`flex-1 px-3 py-4 space-y-2 ${sidebarCollapsed ? 'px-2' : 'px-3'}`}>
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setSidebarOpen(false);
                  }}
                  whileHover={{ x: sidebarCollapsed ? 0 : 4 }}
                  className={`w-full flex items-center ${
                    sidebarCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-3'
                  } text-sm font-medium rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-navy-700 dark:hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`} />
                  {!sidebarCollapsed && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-3"
                    >
                      {item.name}
                    </motion.span>
                  )}
                  {isActive && !sidebarCollapsed && (
                    <motion.div
                      layoutId="activeTab"
                      className="ml-auto w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Sidebar footer */}
          <div className={`p-3 border-t border-navy-700 dark:border-gray-700 ${
            sidebarCollapsed ? 'p-2' : 'p-3'
          }`}>
            <div className={`flex items-center ${
              sidebarCollapsed ? 'justify-center space-y-2 flex-col' : 'justify-between'
            }`}>
              <button
                onClick={toggleDarkMode}
                className={`p-2 text-gray-300 hover:text-white rounded-lg hover:bg-navy-700 dark:hover:bg-gray-700 transition-colors ${
                  sidebarCollapsed ? 'mb-2' : ''
                }`}
                title="Toggle dark mode"
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={handleLogout}
                className={`flex items-center ${
                  sidebarCollapsed ? 'justify-center p-2' : 'px-3 py-2'
                } text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors`}
                title="Logout"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                {!sidebarCollapsed && (
                  <span className="ml-2">Logout</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`lg:ml-64 transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        {/* Top navigation bar */}
        <div className="sticky top-0 z-30 bg-white dark:bg-navy-800 border-b border-gray-200 dark:border-navy-700 shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white lg:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              
              <div>
                <h1 className="text-2xl font-bold text-navy-900 dark:text-white">
                  {getPageTitle()}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your portfolio content
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search bar */}
              <div className="hidden md:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 dark:border-navy-600 rounded-lg bg-white dark:bg-navy-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                />
              </div>
              
              {/* Notifications */}
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors relative">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              
              {/* Profile avatar */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-navy-900 dark:text-white">Admin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">admin@demo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Outlet />
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;