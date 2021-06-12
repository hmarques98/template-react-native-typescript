import 'styled-components';
import 'styled-system';
import { theme } from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      success: string;
      backgroundColor: string;
    };
    typography: {
      FONT_REGULAR: string;
      FONT_BOLD: string;
    };
    borderWidths: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    bordersColors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      success: string;
    };
    radii: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    fontSizes: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      ls: number;
      xl: number;
      xxl: number;
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
}
