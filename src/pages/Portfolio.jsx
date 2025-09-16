import React from 'react';
import { motion } from 'framer-motion';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

const Portfolio = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </motion.main>
      
      <Footer />
    </>
  );
};

export default Portfolio;