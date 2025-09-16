import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  StarIcon,
  UserCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO at TechCorp',
      company: 'TechCorp Inc.',
      message: 'Exceptional work! The website exceeded our expectations and was delivered on time.',
      rating: 5,
      avatar: '/api/placeholder/64/64',
      featured: true,
      status: 'Approved',
      project: 'Corporate Website Redesign',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'StartupXYZ',
      message: 'Professional service and excellent communication throughout the project.',
      rating: 4,
      avatar: '/api/placeholder/64/64',
      featured: false,
      status: 'Approved',
      project: 'E-commerce Platform',
      date: '2024-01-10'
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || testimonial.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
      toast.success('Testimonial deleted successfully');
    }
  };

  const handleAddNew = () => {
    setEditingTestimonial(null);
    setShowModal(true);
  };

  const handleStatusChange = (id, newStatus) => {
    setTestimonials(testimonials.map(testimonial =>
      testimonial.id === id ? { ...testimonial, status: newStatus } : testimonial
    ));
    toast.success(`Testimonial ${newStatus.toLowerCase()}`);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIconSolid
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
            Testimonials
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage client testimonials and feedback
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddNew}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <PlusIcon className="-ml-1 mr-3 h-5 w-5" />
          Add Testimonial
        </motion.button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-navy-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
            />
          </div>
          
          <div className="flex gap-2">
            {['All', 'Approved', 'Pending', 'Rejected'].map((status) => (
              <motion.button
                key={status}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  statusFilter === status
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 dark:bg-navy-700 dark:text-gray-300'
                }`}
              >
                {status}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="space-y-6">
        <AnimatePresence>
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-800 rounded-2xl shadow-lg border border-gray-200 dark:border-navy-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-navy-600"
                      />
                      {testimonial.featured && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                          <StarIconSolid className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-navy-800 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          testimonial.status === 'Approved' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' 
                            : testimonial.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                        }`}>
                          {testimonial.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {testimonial.position} at {testimonial.company}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm text-gray-500">({testimonial.rating}/5)</span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        "{testimonial.message}"
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Project: {testimonial.project}</span>
                        <span>•</span>
                        <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(testimonial)}
                      className="p-2 text-gray-400 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-all duration-200"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(testimonial.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-navy-700">
                  <div className="flex space-x-2">
                    {testimonial.status !== 'Approved' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleStatusChange(testimonial.id, 'Approved')}
                        className="px-4 py-2 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg font-medium transition-all duration-200"
                      >
                        Approve
                      </motion.button>
                    )}
                    {testimonial.status !== 'Rejected' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleStatusChange(testimonial.id, 'Rejected')}
                        className="px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg font-medium transition-all duration-200"
                      >
                        Reject
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setShowModal(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white dark:bg-navy-800 rounded-2xl text-left overflow-hidden shadow-2xl w-full max-w-3xl mx-4"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-navy-700 dark:to-navy-600 px-6 py-4 border-b border-gray-200 dark:border-navy-600">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
                      {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setShowModal(false)}
                      className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-all duration-200"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="px-6 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Client Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter client name"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white"
                          defaultValue={editingTestimonial?.name || ''}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Position
                        </label>
                        <input
                          type="text"
                          placeholder="Job title"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white"
                          defaultValue={editingTestimonial?.position || ''}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Company name"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white"
                          defaultValue={editingTestimonial?.company || ''}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Testimonial Message
                        </label>
                        <textarea
                          rows={6}
                          placeholder="Enter testimonial message"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white resize-none"
                          defaultValue={editingTestimonial?.message || ''}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                            Rating
                          </label>
                          <select className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white">
                            <option>5 Stars</option>
                            <option>4 Stars</option>
                            <option>3 Stars</option>
                            <option>2 Stars</option>
                            <option>1 Star</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                            Status
                          </label>
                          <select className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:bg-navy-700 dark:text-white">
                            <option>Approved</option>
                            <option>Pending</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 dark:bg-navy-700 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setShowModal(false)}
                    className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-navy-600 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-navy-800"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      toast.success(editingTestimonial ? 'Testimonial updated!' : 'Testimonial added!');
                      setShowModal(false);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
                  >
                    {editingTestimonial ? 'Update' : 'Add'} Testimonial
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

export default TestimonialsManager;