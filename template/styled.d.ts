// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
    };
  }
}
// import original module declarations
