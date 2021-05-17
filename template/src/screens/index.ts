import HomeScreen from 'screens/Home';
import CustomWebView from 'screens/CharacterDetail';
import { StackNavigationOptions } from '@react-navigation/stack';
import { IPeople } from 'src/interfaces/IPeople';

export type CommonStackParamList = {
  CharacterDetail: { character: IPeople };
  Home: undefined;
};

const options: StackNavigationOptions = { gestureEnabled: false };

export const commonScreens = {
  Home: { component: HomeScreen, options },
  CharacterDetail: { component: CustomWebView },
};
