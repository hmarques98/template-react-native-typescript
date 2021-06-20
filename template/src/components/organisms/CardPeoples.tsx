import React from 'react';
import { WINDOW_DEVICE_WIDTH } from '@utils/constants';
import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import { IPeople } from 'src/interfaces/IPeople';
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
        <Typography color={'secondary'} mb='sm'>Name: {name}</Typography>
        <Typography color={'secondary'}>HomeWorld: {homeworld}</Typography>
      </Button>
    </Box>
  );
};
export default CardPeoples;
