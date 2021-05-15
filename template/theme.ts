import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography } from './src/styles/index';

const myTheme: DefaultTheme = {
  borderRadius: spacing.RADIUS,

  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
  },
};

export { myTheme };
