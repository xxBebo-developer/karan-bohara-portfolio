import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log('Initializing particles...', engine);
    await loadSlim(engine);
    console.log('Particles initialized successfully!');
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('Particles loaded!', container);
  }, []);

  // Responsive configuration based on screen size
  const getResponsiveConfig = () => {
    const width = window.innerWidth;
    
    if (width <= 480) {
      // Mobile phones - Reduced complexity for performance
      return {
        particleCount: 25,
        areaMultiplier: 1200,
        linkDistance: 60,
        moveSpeed: { min: 0.3, max: 1 },
        interactivity: false
      };
    } else if (width <= 768) {
      // Tablets - Moderate complexity
      return {
        particleCount: 35,
        areaMultiplier: 1000,
        linkDistance: 80,
        moveSpeed: { min: 0.5, max: 1.5 },
        interactivity: true
      };
    } else if (width <= 1024) {
      // Small laptops - Good balance
      return {
        particleCount: 50,
        areaMultiplier: 900,
        linkDistance: 100,
        moveSpeed: { min: 0.6, max: 2 },
        interactivity: true
      };
    } else {
      // Desktop - Full electron effect
      return {
        particleCount: 70,
        areaMultiplier: 800,
        linkDistance: 120,
        moveSpeed: { min: 0.8, max: 2.5 },
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
          mode: ['push', 'attract'],
        },
        onHover: {
          enable: responsiveConfig.interactivity,
          mode: ['grab', 'connect'],
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: responsiveConfig.interactivity ? 4 : 2,
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        grab: {
          distance: responsiveConfig.linkDistance + 50,
          links: {
            opacity: 0.8,
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' 
          ? ['#00d4ff', '#8b5cf6', '#00ff88', '#ff0080', '#ffd700'] 
          : ['#0a2540', '#3b82f6', '#059669', '#dc2626', '#f59e0b'],
      },
      links: {
        color: theme === 'dark' ? '#00d4ff' : '#0a2540',
        distance: responsiveConfig.linkDistance,
        enable: true,
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          color: theme === 'dark' ? '#8b5cf6' : '#3b82f6',
          opacity: 0.1,
        },
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: false,
        speed: responsiveConfig.moveSpeed,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: true,
              minimumValue: 0
            },
            value: 0
          },
          enable: false,
          options: {}
        },
        trail: {
          enable: true,
          length: 10,
          fill: {
            color: {
              value: theme === 'dark' ? '#00d4ff' : '#0a2540'
            }
          }
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          area: responsiveConfig.areaMultiplier,
        },
        value: responsiveConfig.particleCount,
      },
      opacity: {
        value: { min: 0.4, max: 1 },
        random: {
          enable: true,
          minimumValue: 0.4,
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.4,
          sync: false,
        },
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 45
        },
        width: 1
      },
      shape: {
        type: ['circle', 'triangle', 'star'],
        options: {
          circle: {
            radius: 1,
          },
          triangle: {
            sides: 3,
          },
          star: {
            sides: 5,
            inset: 2
          },
        },
      },
      size: {
        value: { min: 2, max: 8 },
        random: {
          enable: true,
          minimumValue: 2,
        },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 1,
          sync: false,
        },
      },
      stroke: {
        width: 0,
        color: {
          value: theme === 'dark' ? '#00d4ff' : '#0a2540'
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.2,
          opacity: 1,
        },
        lines: {
          enable: true,
          frequency: 0.1,
          opacity: 1
        }
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          sync: false
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001
          },
          value: 0,
          sync: false
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: 'clockwise',
        move: true,
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      destroy: {
        bounds: {},
        mode: 'none',
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 3
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: {
              min: 4,
              max: 9
            }
          },
          sizeOffset: true
        }
      },
      roll: {
        darken: {
          enable: false,
          value: 0
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0
        },
        mode: 'vertical',
        speed: 25
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: 'clockwise',
        enable: false
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10
        }
      }
    },
    detectRetina: true,
    smooth: true,
    style: {},
    themes: [],
    zLayers: 100
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'auto'
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default ParticlesBackground;