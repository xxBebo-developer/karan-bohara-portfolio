// Portfolio Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Karan Bohara",
    title: "Full-Stack Developer",
    tagline: "Crafting digital experiences with code and creativity",
    bio: "I'm a passionate Full-Stack Developer with 5+ years of experience creating innovative web applications. I specialize in React, Node.js, and modern web technologies. I love turning complex problems into simple, beautiful designs.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Professional headshot
  },

  // Skills
  skills: [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "AWS", level: 70, category: "DevOps" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "UI/UX Design", level: 70, category: "Design" },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Web Apps",
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-demo.netlify.app",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "Web Apps",
      github: "https://github.com/johndoe/task-manager",
      demo: "https://taskmanager-demo.netlify.app",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      category: "Web Apps",
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather-dashboard-demo.netlify.app",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and financial analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      category: "Mobile Apps",
      github: "https://github.com/johndoe/mobile-banking",
      demo: "https://banking-app-demo.netlify.app",
      featured: true,
    },
    {
      id: 5,
      title: "Design System",
      description: "A comprehensive design system with reusable components, style guides, and documentation for consistent UI development.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Figma", "Storybook", "React", "Sass"],
      category: "UI/UX",
      github: "https://github.com/johndoe/design-system",
      demo: "https://design-system-demo.netlify.app",
      featured: false,
    },
    {
      id: 6,
      title: "AI Chat Bot",
      description: "An intelligent chatbot powered by machine learning that provides customer support and handles common inquiries automatically.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      category: "Web Apps",
      github: "https://github.com/johndoe/ai-chatbot",
      demo: "https://chatbot-demo.netlify.app",
      featured: false,
    },
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "FaCode",
      features: ["React/Vue.js Development", "API Integration", "Database Design", "Performance Optimization"],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: "FaMobile",
      features: ["React Native", "Flutter", "Native Development", "App Store Deployment"],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      icon: "FaPalette",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development.",
      icon: "FaServer",
      features: ["RESTful APIs", "Database Management", "Cloud Deployment", "Security Implementation"],
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are remarkable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, Digital Solutions",
      content: "Working with John was a great experience. He's professional, communicative, and delivers high-quality work on time.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Startup Founder",
      content: "John helped us build our MVP from scratch. His full-stack expertise and problem-solving skills were invaluable to our success.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
  ],

  // Experience & Education
  experience: [
    {
      id: 1,
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Labs",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      id: 2,
      type: "work",
      title: "Frontend Developer",
      company: "Digital Creative Agency",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams.",
      achievements: [
        "Built 20+ client websites",
        "Reduced load times by 50%",
        "Mentored 3 junior developers",
      ],
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2016 - 2020",
      description: "Graduated with honors, specializing in software engineering and web technologies.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List for 3 semesters",
        "President of Computer Science Club",
      ],
    },
    {
      id: 4,
      type: "work",
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      description: "Internship focused on frontend development and user experience design.",
      achievements: [
        "Developed company website",
        "Improved user engagement by 30%",
        "Learned Agile methodologies",
      ],
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    behance: "https://behance.net/johndoe",
    dribbble: "https://dribbble.com/johndoe",
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
};

export default portfolioData;