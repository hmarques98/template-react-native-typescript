import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Box from './Box';

storiesOf('Box', module)
  .add('Background Color', () => (
    <Box bgVariant="primary" width={'100%'} height={100} />
  ))
  .add('Border', () => {
    return (
      <Box>
        <Box
          bgVariant="secondary"
          size={100}
          borderRadius={16}
          justifyContent="center"
          alignItems="center"
          alignSelf="center">
          <Box bg="blue" size={50} />
        </Box>
      </Box>
    );
  });
