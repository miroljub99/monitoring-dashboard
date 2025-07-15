export const lightTheme = {
  mode: "light",

  colors: {
    primary: "#607D8B",        // siva - slate-500
    secondary: "#37474F",      // tamno siva - blue-grey
    tertiary: "#ECEFF1",       // svetlija siva za pozadine

    background: "#F4F4F4",     // svetla pozadina
    surface: "#FFFFFF",        // bela površina za kartice
    text: "#1C1C1C",           // tamno siva za tekst
    textMuted: "#555555",      // svetlo siva za mutirani tekst
    border: "#E0E0E0",         // siva linija

    success: "#43A047",        // zelena
    error: "#E53935",          // crvena
    warning: "#FB8C00",        // žuta

    button: {
      background: "#DADADA",   // siva pozadina dugmadi
      text: "#1C1C1C",         // tamno sivi tekst na dugmadi
      hover: "#C0C0C0",        // tamnija siva kad se hoveruje
      disabledBg: "#E8E8E8",   // svetlija siva za disabled
      disabledText: "#9A9A9A", // još svetliji sivi tekst za disabled dugme
    },

    scrollbar: {
      track: "#f0f0f0",        // svetla boja za scrollbar track
      thumb: "#b0b0b0",        // tamno siva boja thumb-a
      thumbHover: "#888888",   // još tamnija boja thumb-a pri hover-u
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
    primary: "#90A4AE",        // svetlija siva boja (slična slate-400)
    secondary: "#B0BEC5",      // još svetlija siva boja (slična slate-300)
    tertiary: "#263238",       // tamna siva za pozadinu

    background: "#121212",     // tamna pozadina
    surface: "#1E1E1E",        // tamnija površina za kartice
    text: "#E0E0E0",           // svetla siva za tekst
    textMuted: "#9E9E9E",      // još svetliji tekst za sekundarni tekst
    border: "#2C2C2C",         // tamna siva linija

    success: "#66BB6A",        // zelena
    error: "#EF5350",          // crvena
    warning: "#FFA726",        // žuta

    button: {
      background: "#2F2F2F",    // tamnija siva pozadina dugmadi
      text: "#E0E0E0",          // svetla siva za tekst dugmadi
      hover: "#444",            // siva koja se vidi na hoveru
      disabledBg: "#1A1A1A",    // dublje zatamnjeno dugme
      disabledText: "#666666",  // svetliji sivi tekst za disabled dugme
    },

    scrollbar: {
      track: "#1A1A1A",         // tamna pozadina scrollbar-a
      thumb: "#444",            // tamniji thumb
      thumbHover: "#666",       // još tamniji thumb na hover
    },
  },
};

export type ThemeType = typeof lightTheme;