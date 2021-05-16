import React from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import CustomText from '../CustomText';
import { LayoutProps, layout, compose, ColorProps, color, space, SpaceProps } from 'styled-system';

interface Props extends LayoutProps, ColorProps, SpaceProps {
  language: 'en' | 'ro';
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LanguageButton = ({ language, ...props }: Props) => {
  const { t, i18n } = useTranslation('languages');

  const onPress = () => {
    i18n.changeLanguage(language);
  };

  return (
    <Container onPress={onPress} {...props}>
      <CustomText fontSize={16}>{t(language)}</CustomText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  ${compose(color, layout, space)}
  margin: 8px 4px;
  padding: 8px;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export default LanguageButton;
