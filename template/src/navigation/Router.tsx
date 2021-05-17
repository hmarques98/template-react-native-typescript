import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { navigationRef } from 'navigation/RootNavigation';

import { commonScreens, CommonStackParamList } from 'screens';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../theme';
import RNBootSplash from 'react-native-bootsplash';

const screenOptions = {
  cardStyle: { backgroundColor: myTheme.colors.white },
  headerShown: false,
};

type ParamList = CommonStackParamList;
export const Stack = createStackNavigator<ParamList>();

const linking: LinkingOptions = {
  prefixes: ['HelloWorld://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  return (
    <ThemeProvider theme={myTheme}>
      <NavigationContainer
        linking={linking}
        ref={navigationRef}
        onReady={() => {
          setTimeout(() => {
            RNBootSplash.hide({ fade: true }); // fade
          }, 3000);
        }}>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={screenOptions}>
            {Object.entries({
              // Use the screens normally
              ...commonScreens,
            }).map(([name, props]) => {
              return (
                <Stack.Screen
                  key={name}
                  name={name as keyof ParamList}
                  {...props}
                />
              );
            })}
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
