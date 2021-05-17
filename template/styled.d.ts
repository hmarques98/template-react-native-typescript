// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      borderRadius: number;
      border: number;
    };
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
    };
    typography: {
      FONT_REGULAR: string;
      FONT_BOLD: string;
    };
  }
}
