// Theme Configuration
// Edit this file to customize colors, fonts, and other design elements

export const themeConfig = {
  // Color Palette
  colors: {
    primary: "#6366f1", // Indigo
    secondary: "#8b5cf6", // Purple
    accent: "#06b6d4", // Cyan
    success: "#10b981", // Emerald
    warning: "#f59e0b", // Amber
    error: "#ef4444", // Red
    
    // Custom neon colors for effects
    neon: {
      blue: "#00d4ff",
      purple: "#8b5cf6",
      green: "#00ff88",
      pink: "#ff0080"
    }
  },
  
  // Typography
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'Fira Code', monospace"
  },
  
  // Animation Settings
  animations: {
    duration: {
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.5s"
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  
  // Layout Settings
  layout: {
    maxWidth: "1200px",
    containerPadding: "1rem",
    sectionSpacing: "5rem"
  },
  
  // Component Variants
  components: {
    button: {
      borderRadius: "0.5rem",
      padding: "0.75rem 1.5rem"
    },
    card: {
      borderRadius: "1rem",
      shadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
    }
  }
};