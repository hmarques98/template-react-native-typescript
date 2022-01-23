import { theme } from '@core/theme';
import { Text } from 'react-native';
import styled from 'styled-components/native';
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
} from 'styled-system';

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

const variantStyle = () => {
  return variant<TypographyProps, VariantTypes, 'variant'>({
    prop: 'variant',
    variants: {
      regular: {
        fontFamily: 'body',
      },
      bold: {
        fontFamily: 'heading',
      },
    },
  });
};

const Typography = styled(Text)<TypographyProps>`
  ${compose(layout, textStyle, space, typography, color)}
  ${variantStyle()}
`;

Typography.defaultProps = {
  color: 'secondary',
  fontFamily: 'heading',
};
export default Typography;
