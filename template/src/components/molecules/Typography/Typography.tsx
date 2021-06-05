import { log } from '@utils/console';
import React from 'react';
import { Text } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import {
  variant,
  LayoutProps,
  layout,
  compose,
  textStyle,
  TextStyleProps,
  space,
  SpaceProps,
  TypographyProps as TextProps,
  typography,
  color,
  ColorProps,
  FontFamilyProps,
  fontFamily,
} from 'styled-system';
import { theme } from 'theme';

interface TypographyProps
  extends TextStyleProps<typeof theme>,
    LayoutProps<typeof theme>,
    SpaceProps<typeof theme>,
    TextProps<typeof theme>,
    ColorProps<typeof theme> {
  variant?: VariantTypes;
  fontFamily?: keyof typeof theme.fonts;
}

type VariantTypes = 'regular' | 'bold';

const variantStyle = (theme: DefaultTheme) => {
  return variant<TypographyProps, VariantTypes, 'variant'>({
    prop: 'variant',
    variants: {
      regular: {
        fontFamily: 'heading',
      },
      bold: {
        fontFamily: 'body',
      },
    },
  });
};

const Typography = styled(Text)<TypographyProps>`
  ${compose(layout, textStyle, space, typography, color)}
  ${({ theme }) => variantStyle(theme)}
`;

Typography.defaultProps = {
  color: 'secondary',
  fontFamily: 'heading',
};
export default Typography;
