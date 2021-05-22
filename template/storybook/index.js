import React from 'react';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme';
// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#start-command-parameters

const getStorybookUIRoot = () => {
  require('./rn-addons');
  addDecorator(withKnobs);
  addDecorator((storyFn) => (
    <ThemeProvider theme={myTheme}>{storyFn()}</ThemeProvider>
  ));

  configure(() => {
    require('../src/components/stories');
  }, module);
  return getStorybookUI({
    asyncStorage:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@react-native-async-storage/async-storage').default || null,
  });
};

export default getStorybookUIRoot;
