import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderIcon,
  UserIcon,
  EnvelopeIcon,
  EyeIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

const DashboardHome = () => {
  const stats = [
    { name: 'Total Projects', value: '12', icon: FolderIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'Profile Views', value: '2.4k', icon: EyeIcon, color: 'from-purple-500 to-pink-500' },
    { name: 'Contact Inquiries', value: '45', icon: EnvelopeIcon, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Admin! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here's what's happening with your portfolio today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.name}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 transition-all duration-200 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PlusIcon className="h-5 w-5 text-white" />
            </div>
            <div className="ml-4 text-left">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                Add New Project
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Create a new project showcase
              </p>
            </div>
          </button>
          
          <button className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 transition-all duration-200 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserIcon className="h-5 w-5 text-white" />
            </div>
            <div className="ml-4 text-left">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                Update Profile
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Edit your profile information
              </p>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHome;