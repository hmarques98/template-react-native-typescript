import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import getStorybookUI from './storybook';
import { enableScreens } from 'react-native-screens';
enableScreens();
LogBox.ignoreLogs(['Setting a timer']);
let EntryPoint;
const showStorybook = false;

if (showStorybook && __DEV__) {
  EntryPoint = getStorybookUI();
} else {
  EntryPoint = App;
}

AppRegistry.registerComponent(appName, () => EntryPoint);
