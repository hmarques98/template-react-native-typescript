import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Box from '../Box/Box';
import Typography from './Typography';

storiesOf('Typography', module)
  .add(
    'Typography regular',
    () => (
      <Box
        bgVariant="primary"
        height={'100%'}
        justifyContent="center"
        alignItems="center">
        <Typography variant="regular" fontSize="xl">
          Typography Regular
        </Typography>
      </Box>
    ),
    { fileName: 'Box and Typography' },
  )
  .add(
    'Typography bold',
    () => {
      return (
        <Box
          bgVariant="primary"
          height={'100%'}
          justifyContent="center"
          alignItems="center">
          <Typography variant="bold" fontSize="xl" fontFamily="body">
            Typography Bold
          </Typography>
        </Box>
      );
    },
    { fileName: 'Typography bold' },
  );
