import { AppTheme } from './themeType';
import defaultTheme from "./defaultTheme";
const darkTheme: AppTheme = {
  ...defaultTheme,
  colors: {
    background: '#191919',
    text: 'rgba(255, 255, 255, 0.81)'
  },
}

export default darkTheme;
