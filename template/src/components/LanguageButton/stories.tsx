import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';
import LanguageButton from './LanguageButton';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../../theme';

storiesOf('Language button', module)
  .addDecorator((storyFn) => <ThemeProvider theme={myTheme}>{storyFn()}</ThemeProvider>)
  .add('example', () => <LanguageButton language={select('language', ['en', 'ro'], 'en')} />)
  .add('Background', () => (
    <LanguageButton bg="black" width="100px" language={select('language', ['en', 'ro'], 'en')} />
  ));
