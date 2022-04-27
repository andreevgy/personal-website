import React, {useContext} from "react";

export const ThemeContext = React.createContext({
  isDarkMode: false,
  setDarkMode: (value: boolean) => { console.log(value) },
  changeThemeProperties: (v: any) => { console.log(v) }}
);

export const useThemeContext = () => useContext(ThemeContext);
