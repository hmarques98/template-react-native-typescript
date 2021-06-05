import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography } from './src/styles/index';

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
    green: colors.GREEN,
    grayLight: colors.GRAY_LIGHT,
    success: colors.SUCCESS,
    backgroundColor: colors.BACKGROUND_COLOR,
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
    green: colors.GREEN,
    grayLight: colors.GRAY_LIGHT,
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
    body: 'RobotoMono-Regular',
    heading: 'RobotoMono-Bold',
  },
};

export { theme };
