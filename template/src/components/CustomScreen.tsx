import React from 'react';
import { StatusBarStyle, useColorScheme } from 'react-native';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import {
  compose,
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';
import StatusBar from './StatusBar';
import { myTheme } from 'theme';

interface StyleProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    NativeSafeAreaViewProps {}

const Container = styled(SafeAreaView)<StyleProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${compose(space, layout, color, flexbox)};
`;

type Props = StyleProps & {
  statusBarStyle?: StatusBarStyle | null;
  statusBarColor?: string;
};

export default function CustomScreen({
  children,
  statusBarStyle,
  statusBarColor,
  ...props
}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';
  const barColor = isDarkMode ? myTheme.colors.black : myTheme.colors.white;
  return (
    <>
      <StatusBar
        barStyle={statusBarStyle || barStyle}
        backgroundColor={statusBarColor || barColor}
      />
      <Container backgroundColor={myTheme.colors.white} {...props}>
        {children}
      </Container>
    </>
  );
}
