import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback (optional)
  }, []);

  // Responsive configuration based on screen size
  const getResponsiveConfig = () => {
    const width = window.innerWidth;
    
    if (width <= 480) {
      // Mobile phones
      return {
        particleCount: 25,
        areaMultiplier: 1500,
        linkDistance: 80,
        moveSpeed: { min: 0.3, max: 1 },
        interactivity: false
      };
    } else if (width <= 768) {
      // Tablets
      return {
        particleCount: 35,
        areaMultiplier: 1200,
        linkDistance: 100,
        moveSpeed: { min: 0.4, max: 1.5 },
        interactivity: true
      };
    } else if (width <= 1024) {
      // Small laptops
      return {
        particleCount: 50,
        areaMultiplier: 1000,
        linkDistance: 120,
        moveSpeed: { min: 0.5, max: 2 },
        interactivity: true
      };
    } else {
      // Desktop
      return {
        particleCount: 60,
        areaMultiplier: 1000,
        linkDistance: 120,
        moveSpeed: { min: 0.5, max: 2 },
        interactivity: true
      };
    }
  };

  const responsiveConfig = getResponsiveConfig();

  // Dynamic configuration based on theme
  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: responsiveConfig.interactivity,
          mode: ['push', 'bubble'],
        },
        onHover: {
          enable: responsiveConfig.interactivity,
          mode: ['grab', 'bubble'],
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: responsiveConfig.interactivity ? 3 : 1,
        },
        grab: {
          distance: responsiveConfig.linkDistance,
          links: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: responsiveConfig.linkDistance + 50,
          size: responsiveConfig.interactivity ? 8 : 4,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' 
          ? ['#00d4ff', '#8b5cf6', '#00ff88', '#ff0080'] 
          : ['#0a2540', '#3b82f6', '#059669', '#dc2626'],
      },
      links: {
        color: theme === 'dark' ? '#00d4ff' : '#0a2540',
        distance: responsiveConfig.linkDistance,
        enable: true,
        opacity: 0.3,
        width: 1.5,
        triangles: {
          enable: false,
        },
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: responsiveConfig.moveSpeed,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: responsiveConfig.areaMultiplier,
        },
        value: responsiveConfig.particleCount,
      },
      opacity: {
        value: { min: 0.2, max: 0.8 },
        random: {
          enable: true,
          minimumValue: 0.2,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle'],
        options: {
          circle: {
            radius: 1,
          },
          triangle: {
            sides: 3,
          },
        },
      },
      size: {
        value: { min: 2, max: 5 },
        random: {
          enable: true,
          minimumValue: 2,
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.1,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
    smooth: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;