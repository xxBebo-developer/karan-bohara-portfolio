import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      status: 'Published',
      image: '/api/placeholder/300/200',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/example/ecommerce',
      demo: 'https://demo.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application',
      status: 'Draft',
      image: '/api/placeholder/300/200',
      technologies: ['React', 'Firebase'],
      github: 'https://github.com/example/tasks',
      demo: 'https://tasks.example.com'
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
      toast.success('Project deleted successfully');
    }
  };

  const handleAddNew = () => {
    setEditingProject(null);
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
            Projects
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your portfolio projects and showcase your work
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddNew}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-cyan-600 hover:to-blue-700"
        >
          <PlusIcon className="-ml-1 mr-3 h-5 w-5" />
          Add New Project
        </motion.button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-navy-700">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
            />
          </div>
          
          {/* Filter Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              showFilters 
                ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300' 
                : 'bg-gray-100 text-gray-700 dark:bg-navy-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-600'
            }`}
          >
            <FunnelIcon className="mr-2 h-5 w-5" />
            Filters
          </motion.button>
        </div>
        
        {/* Filter Options */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200 dark:border-navy-700"
            >
              <div className="flex flex-wrap gap-2">
                {['All', 'Published', 'Draft'].map((status) => (
                  <motion.button
                    key={status}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      statusFilter === status
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 dark:bg-navy-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-600'
                    }`}
                  >
                    {status}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-navy-800 overflow-hidden shadow-lg hover:shadow-2xl rounded-2xl border border-gray-200 dark:border-navy-700 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-navy-600 hover:bg-white transition-colors duration-200"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-navy-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                    project.status === 'Published' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 border border-green-200 dark:border-green-800' 
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-300 border border-cyan-200/50 dark:border-cyan-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 dark:bg-navy-700 dark:text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-navy-700">
                  <div className="flex space-x-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(project)}
                      className="p-2 text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-all duration-200"
                      title="Edit Project"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(project.id)}
                      className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                      title="Delete Project"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </motion.button>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-200"
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 bg-white dark:bg-navy-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-navy-600"
        >
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-700 dark:to-navy-600 rounded-full flex items-center justify-center mb-6">
            <PlusIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {searchTerm || statusFilter !== 'All' ? 'No projects found' : 'No projects yet'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchTerm || statusFilter !== 'All' 
              ? 'Try adjusting your search or filter criteria' 
              : 'Get started by adding your first project'}
          </p>
          {(!searchTerm && statusFilter === 'All') && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddNew}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Your First Project
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
                className="relative bg-white dark:bg-navy-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all w-full max-w-2xl mx-4"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-navy-700 dark:to-navy-600 px-6 py-4 border-b border-gray-200 dark:border-navy-600">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
                      {editingProject ? 'Edit Project' : 'Add New Project'}
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
                          Project Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter project title"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                          defaultValue={editingProject?.title || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Description
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe your project"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200 resize-none"
                          defaultValue={editingProject?.description || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Status
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200">
                          <option>Published</option>
                          <option>Draft</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          GitHub URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://github.com/..."
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                          defaultValue={editingProject?.github || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Demo URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://demo.example.com"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                          defaultValue={editingProject?.demo || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Technologies
                        </label>
                        <input
                          type="text"
                          placeholder="React, Node.js, MongoDB..."
                          className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-navy-700 dark:text-white transition-all duration-200"
                          defaultValue={editingProject?.technologies?.join(', ') || ''}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-navy-800 dark:text-white mb-2">
                          Project Image
                        </label>
                        <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-navy-600 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors duration-200 cursor-pointer">
                          <div className="text-center">
                            <svg className="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Click to upload image</p>
                          </div>
                        </div>
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
                      toast.success(editingProject ? 'Project updated successfully!' : 'Project added successfully!');
                      setShowModal(false);
                    }}
                  >
                    {editingProject ? 'Update Project' : 'Create Project'}
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

export default ProjectsManager;