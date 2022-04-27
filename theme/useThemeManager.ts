import {darkTheme, lightTheme, useDarkMode} from "./index";
import {useEffect, useMemo, useState} from "react";

const useThemeManager = () => {
  const { isDarkMode, changeDarkMode } = useDarkMode();
  const [theme, setTheme] = useState(isDarkMode ? darkTheme : lightTheme);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  const editedTheme = useMemo(() => {
    if (isMounted) return theme;
    return { ...theme, colors: { ...theme.colors, background: 'var(--background-color)', text: 'var(--text-color)' } };
  }, [theme, isMounted]);

  return { theme: editedTheme, changeThemeProperties: setTheme, setDarkMode: changeDarkMode, isDarkMode }
}

export default useThemeManager;
