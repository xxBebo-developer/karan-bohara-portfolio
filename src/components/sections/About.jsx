import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaPalette, FaTools, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../../config/personalInfo';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const skillCategories = {
    'Frontend': { icon: FaCode, color: '#61DAFB' },
    'Backend': { icon: FaServer, color: '#68C944' },
    'Database': { icon: FaDatabase, color: '#F29111' },
    'Design': { icon: FaPalette, color: '#E94E87' },
    'DevOps': { icon: FaTools, color: '#FF6B47' }
  };

  // Create skill items from personalInfo
  const skillItems = personalInfo.about.skills.map((skill, index) => ({
    name: skill,
    level: 85 + Math.floor(Math.random() * 15), // Random level between 85-99
    category: index < 5 ? 'Frontend' : index < 10 ? 'Backend' : 'Tools'
  }));

  const groupedSkills = skillItems.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="about-grid">
            {/* About Text */}
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-description">
                <p>{personalInfo.about.description}</p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <FaRocket className="highlight-icon" />
                  <div>
                    <h4>{personalInfo.about.experience} Experience</h4>
                    <p>Building scalable web applications</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h4>{personalInfo.about.projects} Projects</h4>
                    <p>Successfully delivered to clients</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaServer className="highlight-icon" />
                  <div>
                    <h4>{personalInfo.about.clients} Clients</h4>
                    <p>Satisfied with quality delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div className="skills-container" variants={itemVariants}>
              <h3 className="skills-title">Technical Skills</h3>
              
              {Object.entries(groupedSkills).map(([category, skills]) => {
                const IconComponent = skillCategories[category]?.icon || FaCode;
                const color = skillCategories[category]?.color || '#00d4ff';
                
                return (
                  <motion.div 
                    key={category} 
                    className="skill-category"
                    variants={itemVariants}
                  >
                    <div className="category-header">
                      <IconComponent 
                        className="category-icon" 
                        style={{ color }} 
                      />
                      <h4 className="category-name">{category}</h4>
                    </div>
                    
                    <div className="skills-grid">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="skill-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1 + 0.5 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className="skill-content">
                            <div className="skill-header">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                              <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: index * 0.1 + 0.7,
                                  ease: "easeOut"
                                }}
                                style={{ 
                                  background: `linear-gradient(90deg, ${color}, ${color}99)`
                                }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;