import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';
import LanguageButton from './LanguageButton';

storiesOf('Language Copy', module).add('Buy Button', () => (
  <LanguageButton language={select('language', ['en', 'ro'], 'en')} />
));
