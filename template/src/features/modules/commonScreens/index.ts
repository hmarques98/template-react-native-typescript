import HomeScreen from './Home';
import CharacterDetail from './CharacterDetail';
/* PLOP_INJECT_IMPORT */
import { StackNavigationOptions } from '@react-navigation/stack';
import { IPeople } from './Home/Home.types';

export type CommonStackParamList = {
  CharacterDetail: { character: IPeople };
  Home: undefined;
  /* PLOP_INJECT_TYPE */
};

const options: StackNavigationOptions = { gestureEnabled: false };

const commonScreens = {
  Home: { component: HomeScreen, options },
  CharacterDetail: { component: CharacterDetail },
  /* PLOP_INJECT_SCREEN */
};

export default commonScreens;
