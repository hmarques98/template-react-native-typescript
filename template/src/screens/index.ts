import HomeScreen from 'screens/Home';
import CustomWebView from 'screens/CharacterDetail';
/* PLOP_INJECT_IMPORT */
import { StackNavigationOptions } from '@react-navigation/stack';
import { IPeople } from 'src/interfaces/IPeople';

export type CommonStackParamList = {
  CharacterDetail: { character: IPeople };
  Home: undefined;
  /* PLOP_INJECT_TYPE */
};

const options: StackNavigationOptions = { gestureEnabled: false };

export const commonScreens = {
  Home: { component: HomeScreen, options },
  CharacterDetail: { component: CustomWebView },
  /* PLOP_INJECT_SCREEN */
};
