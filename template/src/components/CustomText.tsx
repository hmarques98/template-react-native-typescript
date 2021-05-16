import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import styled, { css, withTheme } from 'styled-components/native';
import { space, SpaceProps, layout, LayoutProps, compose, typography, TypographyProps } from 'styled-system';

interface StyleProps extends SpaceProps, TypographyProps, LayoutProps, TextProps {
  flex?: number | string;

  capitalize?: boolean;
  underline?: boolean;
  debug?: boolean;
  opacity?: number;
}

const Container = styled(Text)<StyleProps>`
  ${compose(space, layout, typography)}
  opacity: ${({ opacity }) => opacity};
  ${({ debug }) =>
    debug
      ? css`
          border: 1px solid red;
        `
      : css``};
  text-decoration-line: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: ${(props) => props.theme.colors.primary};
  ${({ capitalize }) =>
    capitalize
      ? css`
          text-transform: capitalize;
        `
      : ''}
`;

Container.defaultProps = {
  fontSize: 18,
  fontWeight: '600',
  capitalize: false,
  textAlign: 'left',
  underline: false,
  opacity: 1,
};

const CustomText = ({ children, ...props }: PropsWithChildren<StyleProps>) => {
  return <Container {...props}>{children}</Container>;
};

export default CustomText;
