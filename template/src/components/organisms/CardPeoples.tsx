import { log } from '@utils/console';
import { WINDOW_DEVICE_WIDTH } from '@utils/constants';
import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import useReactQuery from 'hooks/useReactQuery';
import React, { useEffect } from 'react';
import { IPeople } from 'src/interfaces/IPeople';
import { myTheme } from 'theme';
interface CardPeopleProps extends IPeople {
  onPress: () => void;
}
const CardPeoples = ({ name, homeworld, onPress }: CardPeopleProps) => {
  return (
    <Box width="100%">
      <Button
        width={WINDOW_DEVICE_WIDTH * 0.8}
        px={'16px'}
        m={2}
        key={name}
        variant="rounded"
        height={80}
        onPress={onPress}
        bg={myTheme.colors.primary}>
        <Typography color={myTheme.colors.white}>{name}</Typography>
        <Typography color={myTheme.colors.white}>{homeworld}</Typography>
      </Button>
    </Box>
  );
};
export default CardPeoples;
