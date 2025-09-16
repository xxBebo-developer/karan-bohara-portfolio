import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '../../config/personalInfo';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo - form handling would be implemented with a backend service)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding contact">
      <div className="container">
        <motion.div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </motion.div>
        
        <div className="contact-container">
          <motion.div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-items">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span className="contact-text">{personalInfo.contact.email}</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span className="contact-text">{personalInfo.contact.phone}</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">{personalInfo.contact.location}</span>
              </div>
              {personalInfo.contact.website && (
                <div className="contact-item">
                  <FaGlobe className="contact-icon" />
                  <a 
                    href={personalInfo.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-text contact-link"
                  >
                    {personalInfo.contact.website.replace('https://', '')}
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
            />
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;