import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import { Typography } from 'components/molecules/Typography';
import { myTheme } from 'theme';

storiesOf('Button', module)
  .add('Button Box', () => (
    <Button variant="box" justifyContent="center" alignItems="center">
      <Typography variant="bold" fontSize={16}>
        Button Box
      </Typography>
    </Button>
  ))
  .add('Button Outlined', () => {
    return (
      <Button variant="outlined" bg={myTheme.colors.secondary}>
        <Typography
          variant="regular"
          fontSize={16}
          color={myTheme.colors.primary}>
          Button outlined
        </Typography>
      </Button>
    );
  })
  .add('Button Rounded', () => {
    return (
      <Button variant="rounded" bg={myTheme.colors.primary}>
        <Typography
          variant="regular"
          fontSize={16}
          color={myTheme.colors.secondary}>
          Button rounded
        </Typography>
      </Button>
    );
  })
  .add('Button Disable', () => {
    return (
      <Button variant="disabled" marginX={10} disabled>
        <Typography
          variant="regular"
          fontSize={16}
          color={myTheme.colors.secondary}>
          Button disabled
        </Typography>
      </Button>
    );
  });
