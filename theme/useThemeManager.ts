import {darkTheme, lightTheme, useDarkMode} from "./index";
import {useEffect, useMemo, useState} from "react";

const useThemeManager = () => {
  const { isDarkMode, changeDarkMode } = useDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editedTheme = useMemo(() => {
    if (isMounted) return theme;
    return { ...theme, colors: { ...theme.colors, background: 'var(--background-color)', text: 'var(--text-color)' } };
  }, [theme, isMounted]);

  return { theme: editedTheme, changeThemeProperties: () => {}, setDarkMode: changeDarkMode, isDarkMode }
}

export default useThemeManager;
