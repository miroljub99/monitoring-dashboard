import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { darkTheme,lightTheme } from '@/theme'
import App from './App.tsx'
import GlobalStyles from './theme/GlobalStyles.tsx';
import { useThemeStore } from './stores/toggleStore.ts';
import { BrowserRouter } from 'react-router-dom'

function ThemeWrapper (){
  const mode = useThemeStore((state) => state.mode);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeWrapper />
  </StrictMode>
)
