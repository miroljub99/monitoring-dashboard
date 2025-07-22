import { StrictMode,useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { darkTheme,lightTheme } from '@/theme'
import App from './App.tsx'
import GlobalStyles from './theme/GlobalStyles.tsx';
import { useThemeStore } from './stores/toggleStore.ts';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

function ThemeWrapper (){
  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => mode === 'dark' ? darkTheme : lightTheme, [mode]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
            <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeWrapper />
  </StrictMode>
)
