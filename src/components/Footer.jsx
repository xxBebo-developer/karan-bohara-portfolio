import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{portfolioData.personal.name}</h3>
            <p className="footer-description">
              Building digital experiences that make a difference
            </p>
            <div className="footer-social">
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {portfolioData.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>{portfolioData.personal.email}</p>
            <p>{portfolioData.personal.phone}</p>
            <p>{portfolioData.personal.location}</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} {portfolioData.personal.name}. Made with{' '}
            <FaHeart className="heart-icon" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;