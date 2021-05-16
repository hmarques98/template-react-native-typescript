import React, { useCallback } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { FileLogger } from 'react-native-file-logger';
import CustomText from 'components/CustomText';
import Smile from 'assets/smile.svg';
import { LanguageButton } from 'components/LanguageButton';
import Counter from 'components/Counter';
import { useTranslation } from 'react-i18next';
import CustomScreen from 'components/CustomScreen';
import * as Sentry from '@sentry/react-native';
import { useDispatch } from 'react-redux';
import { setToken } from '@store/slices/auth';
import useReactQuery from 'hooks/useReactQuery';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading, data } = useReactQuery({
    queryName: 'credit_cards',
    path: 'credit_cards?_quantity=1',
  });

  const sendLoggedFiles = useCallback(() => {
    FileLogger.sendLogFilesByEmail({
      to: 'jhmarques98@gmail.com',
      subject: 'App logs',
      body: 'Attached logs',
    })
      .then(() => {
        setTimeout(() => {
          FileLogger.deleteLogFiles();
        }, 5000);
      })
      .catch((err) => {
        if ('message' in err) {
          FileLogger.error(err.message);
        } else {
          FileLogger.error(JSON.stringify(err));
        }
      });
  }, []);

  return (
    <CustomScreen justifyContent={'space-evenly'} testID={'HomeScreen'}>
      <Counter />
      <View>
        <LanguageButton language={'en'} />
        <LanguageButton language={'ro'} />
      </View>
      <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20} />
      {isLoading ? (
        <CustomText>IS LOADING</CustomText>
      ) : (
        data.map((item) => {
          return (
            <CustomText key={item.number} fontWeight={'700'} textAlign={'center'} my={20} testID={'btnCrispChat'}>
              {item.number} - {item.owner}
            </CustomText>
          );
        })
      )}
      <AntDesign name="star" size={30} color="#900" />
      <AntDesign name="link" size={30} color="#900" />
      <CustomText fontWeight={'700'} textAlign={'center'} onPress={sendLoggedFiles} my={20} testID={'btnLogs'}>
        {t('sendLogs')}
      </CustomText>
      <CustomText
        fontWeight={'700'}
        textAlign={'center'}
        onPress={() => {
          dispatch(
            setToken({
              token: '',
            }),
          );
        }}
        my={20}
        testID={'btnLogout'}>
        {t('logout')}
      </CustomText>
      <Smile />
    </CustomScreen>
  );
};

const Button = styled.TouchableOpacity`
  margin: 20px;
  height: 48px;
  justify-content: space-evenly;
`;

export default Home;
