import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography } from './src/styles/index';

const myTheme: DefaultTheme = {
  spacing: {
    borderRadius: spacing.RADIUS,
    border: spacing.BORDER,
  },
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
  },
  typography: {
    FONT_REGULAR: typography.FONT_FAMILY_REGULAR,
    FONT_BOLD: typography.FONT_FAMILY_BOLD,
  },
};

export { myTheme };
