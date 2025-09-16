import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { personalInfo } from '../../config/personalInfo';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div 
              className="hero-greeting"
              variants={itemVariants}
            >
              <span>👋 Hello, I'm</span>
            </motion.div>

            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div 
              className="hero-title"
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Creative Thinker',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </motion.div>

            <motion.p 
              className="hero-tagline"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              {personalInfo.social.twitter && (
                <a 
                  href={personalInfo.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
              )}
              {personalInfo.social.instagram && (
                <a 
                  href={personalInfo.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
              )}
            </motion.div>
          </div>

          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <motion.div
              className="profile-container"
              animate={{
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              <div className="profile-wrapper floating">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="profile-image"
                />
                <div className="profile-ring"></div>
                <div className="profile-ring-2"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;