import { theme } from '@core/theme';
import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import {
  LayoutProps,
  layout,
  compose,
  ColorProps,
  color,
  space,
  SpaceProps,
  BordersProps,
  borders,
  variant,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  ButtonStyleProps,
  buttonStyle,
} from 'styled-system';

type VariantTypes = 'outlined' | 'rounded' | 'box' | 'disabled';

interface ButtonProps
  extends LayoutProps,
    ColorProps<typeof theme>,
    SpaceProps<typeof theme>,
    BordersProps<typeof theme>,
    PositionProps,
    FlexboxProps<typeof theme>,
    ButtonStyleProps {
  children?: React.ReactNode;
  variant?: VariantTypes;
}

const variantStyle = () => {
  return variant<ButtonProps, VariantTypes, 'variant'>({
    key: 'button',
    prop: 'variant',
    variants: {
      box: {
        width: '100%',
        height: '100%',
      },
      outlined: {
        borderColor: 'primary',
        borderWidth: 'sm',
        borderStyle: 'solid',
      },
      rounded: {
        borderRadius: 'sm',
        padding: 'md',
        backgroundColor: 'primary',
      },
      disabled: {
        backgroundColor: 'black',
      },
    },
  });
};

const Button = styled.TouchableOpacity<ButtonProps>`
  ${compose(color, layout, space, borders, position, flexbox, buttonStyle)}
  ${variantStyle()}
`;
Button.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  height: 48,
};

export default Button;
