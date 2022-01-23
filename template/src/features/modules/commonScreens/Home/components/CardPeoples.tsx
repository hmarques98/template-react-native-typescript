import React from 'react';
import { WINDOW_DEVICE_WIDTH } from '@application/utils/constants';
import { Box, Button, Typography } from '@features/components';
import { IPeople } from '../Home.types';

interface CardPeopleProps extends Pick<IPeople, 'name' | 'homeworld'> {
  onPress: () => void;
}
const CardPeoples = ({ name, homeworld, onPress }: CardPeopleProps) => {
  return (
    <Box width="100%">
      <Button
        width={WINDOW_DEVICE_WIDTH * 0.8}
        px={'ls'}
        m={'xs'}
        key={name}
        variant="rounded"
        height={80}
        onPress={onPress}
        bg={'primary'}
        testID="Button">
        <Typography color={'secondary'} mb="sm">
          Name: {name}
        </Typography>
        <Typography color={'secondary'}>HomeWorld: {homeworld}</Typography>
      </Button>
    </Box>
  );
};
export default CardPeoples;
