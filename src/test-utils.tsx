import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from '@/theme';

export function renderWithProviders(ui: React.ReactElement, { route = "/" } = {}) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </ThemeProvider>
  );
}