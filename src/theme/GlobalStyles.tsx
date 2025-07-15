import { Global, css, useTheme } from "@emotion/react";
import type { ThemeType } from "./theme";

export default function GlobalStyles() {
  const theme = useTheme() as ThemeType;

  return (
    <Global
      styles={css`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: ${theme.font.family};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }

        #root {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }

        ul, ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        button {
         user-select: none;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          padding: 8px 16px;
          background-color: ${theme.colors.button.background};
          color: ${theme.colors.button.text};
          border: 1px solid ${theme.colors.border};
          border-radius: ${theme.borderRadius.md};
          cursor: pointer;
          transition: background-color 0.2s ease;

          &:hover {
            background-color: ${theme.colors.button.hover};
          }

          &:disabled {
            background-color: ${theme.colors.button.disabledBg};
            color: ${theme.colors.button.disabledText};
            cursor: not-allowed;
          }
        }

        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        ::-webkit-scrollbar-track {
          background: ${theme.colors.scrollbar.track};
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.scrollbar.thumb};
          border-radius: 8px;
          border: 2px solid ${theme.colors.scrollbar.track};
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.colors.scrollbar.thumbHover};
        }
      `}
    />
  );
}
