import React from 'react';
import '../styles/globals.css'
import Script from "next/script";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {AppTheme, ThemeContext, useThemeManager} from "../theme";

const GlobalStyle = createGlobalStyle<{ theme: AppTheme }>`
  body {
    background: ${props => props.theme.colors.background};
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  }
  a,a.visited {
    color: ${props => props.theme.colors.text};
  }
`;

function MyApp({Component, pageProps}) {
  const {theme, setDarkMode, changeThemeProperties, isDarkMode } = useThemeManager();

  return <>
    <Script id="dark-mode-script" strategy="beforeInteractive" src="/darkModeScript.js"/>
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode, changeThemeProperties}}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  </>;
}

export default MyApp
