import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FolderIcon,
  UserIcon,
  EnvelopeIcon,
  HomeIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

// Import admin pages
import DashboardHome from '../components/DashboardHome';
import ProfileManager from '../components/ProfileManager';
import ProjectsManager from './ProjectsManager';
import ContactManager from '../components/ContactManager';
import Settings from './Settings';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: location.pathname === '/admin' },
    { name: 'Profile', href: '/admin/profile', icon: UserIcon, current: location.pathname === '/admin/profile' },
    { name: 'Projects', href: '/admin/projects', icon: FolderIcon, current: location.pathname === '/admin/projects' },
    { name: 'Contact Info', href: '/admin/contact', icon: EnvelopeIcon, current: location.pathname === '/admin/contact' },
    { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon, current: location.pathname === '/admin/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-navy-800 shadow-xl">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <SidebarContent navigation={navigation} user={user} onLogout={handleLogout} />
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow bg-white dark:bg-navy-800 border-r border-gray-200 dark:border-navy-700 pt-5 pb-4 overflow-y-auto">
            <SidebarContent navigation={navigation} user={user} onLogout={handleLogout} />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="bg-white dark:bg-navy-800 shadow-sm border-b border-gray-200 dark:border-navy-700">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  className="lg:hidden -mr-2 ml-2 h-6 w-6 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white ml-4 lg:ml-0">
                  Admin Dashboard
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Welcome, {user?.name || 'Admin'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/profile" element={<ProfileManager />} />
                <Route path="/projects" element={<ProjectsManager />} />
                <Route path="/contact" element={<ContactManager />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Sidebar content component
const SidebarContent = ({ navigation, user, onLogout }) => {
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    navigate(href);
  };

  return (
    <>
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 px-4">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            Portfolio Admin
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex-1 px-2 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={`${
                item.current
                  ? 'bg-cyan-50 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-700 hover:text-gray-900 dark:hover:text-white'
              } group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
            >
              <Icon
                className={`${
                  item.current
                    ? 'text-cyan-500 dark:text-cyan-400'
                    : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                } mr-3 h-5 w-5 transition-colors duration-200`}
              />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* User section */}
      <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-navy-700 p-4">
        <div className="flex items-center w-full">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {user?.name || 'Administrator'}
            </p>
            <button
              onClick={onLogout}
              className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              <ArrowRightOnRectangleIcon className="h-3 w-3 mr-1" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;