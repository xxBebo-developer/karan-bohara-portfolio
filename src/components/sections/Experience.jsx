import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and educational background</p>
        </motion.div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[1,2,3].map(i => (
            <motion.div 
              key={i}
              style={{ 
                background: 'var(--bg-primary)', 
                padding: '2rem', 
                borderRadius: '15px',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
                position: 'relative'
              }}
              whileHover={{ x: 10 }}
            >
              <div style={{ 
                position: 'absolute', 
                left: '-10px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                background: 'var(--accent-primary)',
                borderRadius: '50%'
              }}></div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Position {i}</h3>
              <p style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Company Name</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>2020 - Present</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Description of responsibilities and achievements in this role.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;