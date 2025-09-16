// Portfolio Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Karan Bohara",
    title: "Full-Stack Developer",
    tagline: "Crafting digital experiences with code and creativity",
    bio: "I'm a passionate Full-Stack Developer with 3+ years of experience creating innovative web applications. I specialize in React, Node.js, and modern web technologies. I love turning complex problems into simple, beautiful designs.",
    location: "Kathmandu, Nepal",
    email: "boharakaran533@gmail.com",
    phone: "+9779844664401",
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
      title: "Full-Stack Web Development",
      description: "Complete web solutions from frontend to backend with modern technologies and responsive design.",
      icon: "FaCode",
      features: ["React.js & Next.js", "Node.js & Express", "Database Integration", "API Development", "Responsive Design"],
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Interactive and user-friendly interfaces with cutting-edge frontend technologies.",
      icon: "FaPalette",
      features: ["React & Vue.js", "JavaScript/TypeScript", "CSS/SCSS/Tailwind", "Mobile-First Design", "Performance Optimization"],
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust server-side applications with secure APIs and efficient database management.",
      icon: "FaServer",
      features: ["RESTful APIs", "Database Design", "Authentication & Security", "Cloud Deployment", "Microservices"],
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android with native performance.",
      icon: "FaMobile",
      features: ["React Native", "Flutter", "Progressive Web Apps", "App Store Deployment", "Push Notifications"],
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management.",
      icon: "FaCode",
      features: ["Shopping Cart Systems", "Payment Gateway Integration", "Inventory Management", "Admin Dashboard", "SEO Optimization"],
    },
    {
      id: 6,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and optimization to keep your website running smoothly.",
      icon: "FaServer",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Bug Fixes", "Content Management"],
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "CEO, Digital Nepal",
      content: "Karan delivered an outstanding e-commerce platform that boosted our online sales significantly. His technical skills and dedication are exceptional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Thapa",
      position: "Product Manager, Tech Solutions",
      content: "Working with Karan was fantastic. He's professional, responsive, and delivers high-quality work within deadlines. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Gurung",
      position: "Startup Founder",
      content: "Karan helped us build our web application from concept to deployment. His full-stack expertise and problem-solving approach were invaluable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
    },
  ],

  // Experience & Education
  experience: [
    {
      id: 1,
      type: "work",
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Kathmandu, Nepal",
      period: "2021 - Present",
      description: "Developing modern web applications and mobile apps for various clients worldwide.",
      achievements: [
        "Completed 50+ projects successfully",
        "Built e-commerce platforms",
        "Created responsive web applications",
        "Implemented modern UI/UX designs",
      ],
    },
    {
      id: 2,
      type: "work",
      title: "Frontend Developer",
      company: "Tech Solutions Nepal",
      location: "Kathmandu, Nepal",
      period: "2020 - 2021",
      description: "Developed user interfaces and collaborated with backend teams to create seamless web experiences.",
      achievements: [
        "Built 25+ client websites",
        "Optimized website performance",
        "Implemented responsive designs",
        "Collaborated with design teams",
      ],
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor in Computer Science",
      company: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      period: "2018 - 2022",
      description: "Specialized in software engineering, web technologies, and mobile app development.",
      achievements: [
        "First Class with Distinction",
        "Best Project Award",
        "Active in coding competitions",
        "Led development club",
      ],
    },
    {
      id: 4,
      type: "work",
      title: "Web Development Intern",
      company: "Digital Nepal",
      location: "Kathmandu, Nepal",
      period: "2020",
      description: "Internship focused on frontend development and learning modern web technologies.",
      achievements: [
        "Developed company portfolio",
        "Learned React.js and Node.js",
        "Implemented responsive designs",
        "Created reusable components",
      ],
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/xxBebo-developer",
    linkedin: "https://linkedin.com/in/karan-bohara",
    twitter: "https://twitter.com/karanbohara",
    instagram: "https://instagram.com/karan.bohara",
    behance: "https://behance.net/karanbohara",
    dribbble: "https://dribbble.com/karanbohara",
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