// Projects Configuration
// Edit this file to add, remove, or update your projects

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment processing, and admin dashboard.",
    image: "/images/projects/ecommerce.jpg", // Place project images in public/images/projects/
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/johndeveloper/ecommerce-platform",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/projects/taskmanager.jpg",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/johndeveloper/task-manager",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that provides current weather data and forecasts for multiple cities with beautiful data visualizations.",
    image: "/images/projects/weather.jpg",
    technologies: ["React", "Chart.js", "Weather API", "CSS3"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/johndeveloper/weather-dashboard",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for a social media platform with user authentication, post management, and real-time messaging capabilities.",
    image: "/images/projects/social-api.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
    liveUrl: null, // Set to null if no live demo
    githubUrl: "https://github.com/johndeveloper/social-media-api",
    featured: false,
    category: "Backend"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and featuring smooth animations, dark/light mode toggle, and optimized performance.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://johndeveloper.com",
    githubUrl: "https://github.com/johndeveloper/portfolio",
    featured: true,
    category: "Frontend"
  }
];

// Project Categories for filtering
export const projectCategories = [
  "All",
  "Frontend", 
  "Backend",
  "Full Stack",
  "Mobile"
];