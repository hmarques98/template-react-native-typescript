import { WHITE } from '@utils/colors';
import React from 'react';

import styled from 'styled-components/native';
import CustomText from '../CustomText';

const LanguageButton = () => {
  const onPress = () => {};

  return (
    <Container onPress={onPress}>
      <CustomText fontSize={16} color="#ffffff">
        Componente testado
      </CustomText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin: 8px 4px;
  padding: 8px;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${WHITE};
`;

export default LanguageButton;
