import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Testimonials from satisfied clients</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[1,2,3].map(i => (
            <motion.div 
              key={i}
              style={{ 
                background: 'var(--bg-secondary)', 
                padding: '2rem', 
                borderRadius: '15px',
                border: '1px solid var(--border-color)'
              }}
              whileHover={{ y: -5 }}
            >
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                "Great work and excellent communication throughout the project."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)' }}>Client {i}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>CEO, Company</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;