import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaPalette, FaServer } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const iconMap = {
    FaCode: FaCode,
    FaMobile: FaMobile,
    FaPalette: FaPalette,
    FaServer: FaServer
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="services-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="services-grid">
            {portfolioData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FaCode;
              
              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="service-content">
                    <motion.div 
                      className="service-icon"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <IconComponent />
                    </motion.div>
                    
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="feature-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (featureIndex * 0.1) + 0.5 
                          }}
                        >
                          <div className="feature-bullet"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.button
                      className="service-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                  
                  <div className="service-bg"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="services-cta"
            variants={itemVariants}
          >
            <div className="cta-content">
              <h3>Ready to Start Your Project?</h3>
              <p>Let's discuss how I can help bring your ideas to life</p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;