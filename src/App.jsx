import React, { useState, useEffect } from 'react';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  // Handle theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    // Apply theme class to document element for TailwindCSS v4
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    // Apply theme class to document element for TailwindCSS v4
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="App">
      <Portfolio theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
