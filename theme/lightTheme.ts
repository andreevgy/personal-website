import { AppTheme } from './themeType';
import defaultTheme from "./defaultTheme";

const lightTheme: AppTheme = {
  ...defaultTheme,
  colors: {
    background: '#FFFFFF',
    text: 'rgb(55, 53, 47)'
  },
}

export default lightTheme;
