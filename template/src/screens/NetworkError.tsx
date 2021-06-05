import React from 'react';
import styled from 'styled-components/native';
import WifiOff from 'assets/wifi-off.svg';
import { Box } from 'components/molecules/Box';
import { Typography } from 'components/molecules/Typography';

const NetworkError = () => (
  <Box justifyContent={'space-around'}>
    <BodyContainer>
      <WifiOff />
      <Typography textAlign={'center'} mt={'xx'} mb={'xs'}>
        No internet connection
      </Typography>
      <Typography fontFamily="" textAlign={'center'}>
        Please check your internet connection settings and try again.
      </Typography>
    </BodyContainer>
  </Box>
);

const BodyContainer = styled.View`
  flex: 1;
  max-width: 294px;
  align-items: center;
  justify-content: center;
`;

export default NetworkError;
