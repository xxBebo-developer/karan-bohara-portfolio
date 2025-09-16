import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const ServicesManager = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies like React, Node.js, and cloud services.',
      icon: 'CodeBracketIcon',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Modern Frameworks'],
      pricing: '$500 - $5000',
      status: 'Active'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Professional user interface and experience design with focus on user-centered design principles.',
      icon: 'PaintBrushIcon',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      pricing: '$300 - $2000',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and optimization for scalable and reliable applications.',
      icon: 'CloudIcon',
      features: ['AWS/Azure Setup', 'DevOps', 'Monitoring', 'Security'],
      pricing: '$200 - $1500',
      status: 'Inactive'
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const iconOptions = [
    { name: 'CodeBracketIcon', component: CodeBracketIcon, label: 'Code' },
    { name: 'PaintBrushIcon', component: PaintBrushIcon, label: 'Design' },
    { name: 'CloudIcon', component: CloudIcon, label: 'Cloud' },
    { name: 'DevicePhoneMobileIcon', component: DevicePhoneMobileIcon, label: 'Mobile' },
    { name: 'GlobeAltIcon', component: GlobeAltIcon, label: 'Web' },
    { name: 'ShieldCheckIcon', component: ShieldCheckIcon, label: 'Security' },
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIconComponent = (iconName) => {
    const icon = iconOptions.find(opt => opt.name === iconName);
    return icon ? icon.component : CodeBracketIcon;
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== id));
      toast.success('Service deleted successfully');
    }
  };

  const handleAddNew = () => {
    setEditingService(null);
    setShowModal(true);
  };

  const handleToggleStatus = (id) => {
    setServices(services.map(service =>
      service.id === id 
        ? { ...service, status: service.status === 'Active' ? 'Inactive' : 'Active' }
        : service
    ));
    toast.success('Service status updated');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
            Services
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your service offerings and pricing
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddNew}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-cyan-600 hover:to-blue-700"
        >
          <PlusIcon className="-ml-1 mr-3 h-5 w-5" />
          Add New Service
        </motion.button>
      </div>

      {/* Search Bar */}
      <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-navy-700">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredServices.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-navy-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-navy-700 transition-all duration-300 overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl">
                        <IconComponent className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mt-1 ${
                          service.status === 'Active' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' 
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
                        }`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleEdit(service)}
                        className="p-2 text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-all duration-200"
                        title="Edit Service"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(service.id)}
                        className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                        title="Delete Service"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-navy-800 dark:text-white">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-300"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 dark:bg-navy-700 dark:text-gray-400">
                          +{service.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Footer */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-navy-700 border-t border-gray-100 dark:border-navy-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                      <p className="text-lg font-bold text-navy-800 dark:text-white">
                        {service.pricing}
                      </p>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleToggleStatus(service.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        service.status === 'Active'
                          ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900/70'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {service.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-white dark:bg-navy-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-navy-600"
        >
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-700 dark:to-navy-600 rounded-full flex items-center justify-center mb-6">
            <PlusIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {searchTerm ? 'No services found' : 'No services yet'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchTerm 
              ? 'Try adjusting your search criteria' 
              : 'Get started by adding your first service'}
          </p>
          {!searchTerm && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddNew}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Your First Service
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => setShowModal(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white dark:bg-navy-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all w-full max-w-3xl mx-4"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-navy-700 dark:to-navy-600 px-6 py-4 border-b border-gray-200 dark:border-navy-600">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
                      {editingService ? 'Edit Service' : 'Add New Service'}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowModal(false)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-navy-700 rounded-lg transition-all duration-200"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="px-6 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Service Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter service title"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                          defaultValue={editingService?.title || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Description
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe your service"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200 resize-none"
                          defaultValue={editingService?.description || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Pricing Range
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., $500 - $5000"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                          defaultValue={editingService?.pricing || ''}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Icon
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {iconOptions.map((icon) => {
                            const IconComponent = icon.component;
                            return (
                              <motion.button
                                key={icon.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                  editingService?.icon === icon.name
                                    ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30'
                                    : 'border-gray-200 dark:border-navy-600 hover:border-cyan-300 dark:hover:border-cyan-700'
                                }`}
                              >
                                <IconComponent className="h-6 w-6 mx-auto text-cyan-600 dark:text-cyan-400" />
                                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mt-2">
                                  {icon.label}
                                </p>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Features (comma separated)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Feature 1, Feature 2, Feature 3..."
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200 resize-none"
                          defaultValue={editingService?.features?.join(', ') || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Status
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 dark:bg-navy-700 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-navy-600 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-navy-800 hover:bg-gray-50 dark:hover:bg-navy-700 transition-all duration-200"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-cyan-600 hover:to-blue-700"
                    onClick={() => {
                      toast.success(editingService ? 'Service updated successfully!' : 'Service added successfully!');
                      setShowModal(false);
                    }}
                  >
                    {editingService ? 'Update Service' : 'Create Service'}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesManager;