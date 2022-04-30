import React, {useState} from 'react';
import '../styles/globals.css'
import Script from "next/script";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {AppTheme, ThemeContext, useThemeManager} from "../theme";
import { VueContext } from "../utils/vueContext";

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
  const [isVueLoaded, setIsVueLoaded] = useState(false);

  return <>
    <Script id="dark-mode-script" strategy="beforeInteractive" src="/darkModeScript.js"/>
    <Script src="https://unpkg.com/vue@3.2.33/dist/vue.global.prod.js" strategy="afterInteractive" onLoad={() => setIsVueLoaded(true)} />
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-2RJMB0CKY5" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {
        `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2RJMB0CKY5');
        `
      }
    </Script>
    <VueContext.Provider value={isVueLoaded}>
      <ThemeContext.Provider value={{ isDarkMode, setDarkMode, changeThemeProperties}}>
        <ThemeProvider theme={theme as AppTheme}>
          <GlobalStyle/>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </VueContext.Provider>
  </>;
}

export default MyApp
