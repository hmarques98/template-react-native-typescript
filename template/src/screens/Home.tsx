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

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const setToken = useStore(({ setToken }) => setToken);

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
      <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
        {t('hello')}
      </CustomText>
      {/* <CustomText fontWeight={'700'} textAlign={'center'} onPress={CrispChatSdk.show} my={20} testID={'btnCrispChat'}>
        {t('chat')}
      </CustomText> */}
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
