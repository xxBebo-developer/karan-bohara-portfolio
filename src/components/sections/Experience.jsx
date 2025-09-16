import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../config/personalInfo';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '-50px 0px'
  });

  // Experience metrics with animated counters
  const experienceStats = [
    {
      value: 3,
      suffix: '+',
      label: 'Years Experience',
      color: '#00d4ff',
      percentage: 75
    },
    {
      value: 50,
      suffix: '+',
      label: 'Projects Completed',
      color: '#8b5cf6',
      percentage: 85
    },
    {
      value: 25,
      suffix: '+',
      label: 'Happy Clients',
      color: '#00ff88',
      percentage: 65
    },
    {
      value: 15,
      suffix: '+',
      label: 'Technologies',
      color: '#ff0080',
      percentage: 90
    }
  ];

  const AnimatedCounter = ({ value, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let startTime = Date.now();
        const duration = 2000; // 2 seconds

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          
          setCount(Math.floor(value * easeOutQuart));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      } else {
        setCount(0);
      }
    }, [value, inView]);

    return (
      <span className="counter-value">
        {count}{suffix}
      </span>
    );
  };

  const CircularProgress = ({ percentage, color, inView }) => {
    const circumference = 2 * Math.PI * 45; // radius = 45
    const strokeDasharray = circumference;
    const strokeDashoffset = inView ? circumference - (percentage / 100) * circumference : circumference;

    return (
      <div className="circular-progress">
        <svg className="progress-ring" width="120" height="120" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            className="progress-ring-background"
            cx="60"
            cy="60"
            r="45"
            fill="transparent"
            stroke="var(--border-color)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <motion.circle
            className="progress-ring-progress"
            cx="60"
            cy="60"
            r="45"
            fill="transparent"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset: inView ? circumference - (percentage / 100) * circumference : circumference 
            }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: '60px 60px',
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Experience & Achievements</h2>
            <p className="section-subtitle">
              Numbers that showcase my professional journey
            </p>
          </motion.div>

          {/* Animated Stats */}
          <motion.div className="stats-container" variants={itemVariants}>
            <div className="stats-grid">
              {experienceStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="stat-visual">
                    <CircularProgress 
                      percentage={stat.percentage} 
                      color={stat.color}
                      inView={inView}
                    />
                    <div className="stat-content">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        inView={inView}
                      />
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div className="timeline-container" variants={itemVariants}>
            <h3 className="timeline-title">Professional Journey</h3>
            <div className="timeline">
              <motion.div 
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Senior Full-Stack Developer</h4>
                  <p className="timeline-company">Tech Solutions Inc.</p>
                  <p className="timeline-date">2022 - Present</p>
                  <p className="timeline-description">
                    Leading development of scalable web applications using React, Node.js, and cloud technologies.
                    Managing a team of 5 developers and implementing modern development practices.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Full-Stack Developer</h4>
                  <p className="timeline-company">Digital Innovations</p>
                  <p className="timeline-date">2020 - 2022</p>
                  <p className="timeline-description">
                    Developed and maintained multiple client projects using modern JavaScript frameworks.
                    Collaborated with design teams to create responsive and user-friendly interfaces.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Frontend Developer</h4>
                  <p className="timeline-company">StartupXYZ</p>
                  <p className="timeline-date">2019 - 2020</p>
                  <p className="timeline-description">
                    Started my professional journey building responsive websites and learning modern development tools.
                    Gained experience in React, CSS frameworks, and version control systems.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;