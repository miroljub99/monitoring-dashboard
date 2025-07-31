export const lightTheme = {
  mode: "light",

    colors: {
    primary: "#3F51B5",           
    secondary: "#455A64",         
    tertiary: "#F5F7FA",          

    background: "#e6e7e9ff",        
    surface: "#e1e1e1ff",           
    text: "#1E1E1E",              
    textMuted: "#6C757D",         
    border: "#D0D7DE",           

    success: "#4CAF50",          
    error: "#D32F2F",             
    warning: "#FFA000",           

    button: {
      background: "#3F51B5",      
      text: "#FFFFFF",            
      hover: "#CCCCCC",           
      disabledBg: "#CCCCCC",      
      disabledText: "#CCCCCC",
      hoverBtn:"#5C6BC0",    
    },

    scrollbar: {
      track: "#F0F2F5",           
      thumb: "#C0C0C0",
      thumbHover: "#A0A0A0",
    },
  },

  font: {
    family: `'Space Grotesk', sans-serif`,
    size: {
      h1: "32px",
      h2: "28px",
      h3: "20px",
      paragraph: "16px",
      caption: "12px",
    },
    weight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      h1: "40px",
      h2: "32px",
      h3: "24px",
      paragraph: "20px",
      caption: "16px",
    },
  },

  spacing: (factor: number) => `${factor * 4}px`,

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.15)",
    md: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export const darkTheme = {
  ...lightTheme,
  mode: "dark",

  colors: {
    primary: "#5C6BC0",        
    secondary: "#B0BEC5",      
    tertiary: "#263238",       

    background: "#121212",     
    surface: "#1E1E1E",        
    text: "#E0E0E0",           
    textMuted: "#9E9E9E",      
    border: "#2C2C2C",         

    success: "#66BB6A",        
    error: "#EF5350",          
    warning: "#FFA726",        

    button: {
      background: "#5C6BC0",    
      text: "#E0E0E0",          
      hover: "#4c4c4cff",           
      disabledBg: "#1A1A1A",    
      disabledText: "#666666",  
      hoverBtn:"#7986CB",
    },

    scrollbar: {
      track: "#1A1A1A",         
      thumb: "#444",            
      thumbHover: "#666",       
    },
  },
};

export type ThemeType = typeof lightTheme;