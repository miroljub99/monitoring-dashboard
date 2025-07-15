import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { darkTheme,lightTheme } from '@/theme'
//import './index.css'
import App from './App.tsx'
import GlobalStyles from './theme/GlobalStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </StrictMode>
)
