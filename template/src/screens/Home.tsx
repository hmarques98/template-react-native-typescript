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
// import useStore from '@auth/store';
import * as Sentry from '@sentry/react-native';
import { useDispatch } from 'react-redux';
import { setToken } from '@store/slices/auth';
import useReactQuery from 'hooks/useReactQuery';
import { log } from '@utils/console';
import RNBootSplash from 'react-native-bootsplash';
const twoMinutes = 1000 * 60 * 2;

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading, data } = useReactQuery({
    queryName: 'credit_cards',
    path: 'credit_cards?_quantity=1',
    refetchInterval: 10000,
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
        <CustomText>Ta carregando porra</CustomText>
      ) : (
        data.map((item) => {
          return (
            <CustomText fontWeight={'700'} textAlign={'center'} my={20} testID={'btnCrispChat'}>
              {item.number} - {item.owner}
            </CustomText>
          );
        })
      )}
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
