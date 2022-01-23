import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { commonScreens } from '@features/modules';
import { CommonStackParamList } from '@features/modules/commonScreens';
import { theme } from '@core/theme';
import { navigationRef } from './RootNavigation';

const screenOptions = {
  cardStyle: { backgroundColor: theme.colors.white },
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
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        RNBootSplash.hide({ fade: true }); // fade
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
  );
}
