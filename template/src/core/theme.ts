import { DefaultTheme } from 'styled-components';
import { colors, typography } from '@core/styles';

const theme: DefaultTheme = {
  space: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    ls: 16,
    xl: 32,
    xxl: 64,
  },
  colors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
    success: colors.SUCCESS,
    backgroundColor: colors.BACKGROUND_COLOR,
    grayLight: colors.GRAY_LIGHT,
  },
  typography: {
    FONT_REGULAR: typography.FONT_FAMILY_REGULAR,
    FONT_BOLD: typography.FONT_FAMILY_BOLD,
  },
  borderWidths: { none: 0, xs: 2, sm: 4, md: 8, ls: 16, xl: 32, xxl: 64 },
  bordersColors: {
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    black: colors.BLACK,
    white: colors.WHITE,
    success: colors.SUCCESS,
  },
  radii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    ls: 16,
    xl: 32,
    xxl: 64,
  },
  fontSizes: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    ls: 16,
    xl: 32,
    xxl: 64,
  },
  fonts: {
    body: typography.FONT_FAMILY_REGULAR,
    heading: typography.FONT_FAMILY_BOLD,
  },
};

export { theme };
