import {useCallback, useEffect, useState} from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(typeof window !== 'undefined' && (window as any).isDarkMode);
  }, []);

  useEffect(() => {
      const eventListener = event => {
        setIsDarkMode(event.matches);
        localStorage.setItem('darkMode', String(event.matches));
      }
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      matchMedia.addEventListener('change', eventListener);
    return () => matchMedia.removeEventListener('change', eventListener);
  }, [])

  const changeDarkMode = useCallback((newDarkMode: boolean) => {
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  }, [setIsDarkMode]);

  useEffect(() => {
    const eventHandler = (event) => {
      if (event.key === 'darkMode' && event.newValue !== event.oldValue) {
        setIsDarkMode(event.newValue === "true");
      }
    };
    window.addEventListener('storage', eventHandler);
    return () => window.removeEventListener('storage', eventHandler);
  }, [setIsDarkMode]);

  return { isDarkMode, changeDarkMode };
}

export default useDarkMode;
