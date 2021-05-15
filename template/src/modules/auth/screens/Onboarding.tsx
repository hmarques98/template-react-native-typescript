import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CustomText from 'components/CustomText';
import CustomScreen from 'components/CustomScreen';
import useKeychainBiometrics from '../hooks/useKeychainBiometrics';
import useKeychainCredentials from '../hooks/useKeychainCredentials';
// import useStore from '../store';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '@store/slices';
import { setToken } from '@store/slices/auth';
import { log } from '@utils/console';
// import { log } from 'src/utils/console';

const Onboaring = () => {
  const { t } = useTranslation('onboarding');
  const { navigate } = useNavigation();
  const { setStoreCredentials } = useKeychainBiometrics({ username: '@username', password: 'Pass1234' });

  const { userCredentials } = useKeychainCredentials();

  const { token } = useSelector(authState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userCredentials) {
      // Authentificate .then setToken
      dispatch(
        setToken({
          token: '',
        }),
      );
    }
  }, [dispatch, userCredentials]);

  return (
    <CustomScreen justifyContent={'space-evenly'} testID={'OnboardingScreen'}>
      <CustomText
        fontWeight={'700'}
        testID={'btnSign'}
        onPress={() => {
          // Authentificate .then setToken .then setStoreCredentials
          dispatch(
            setToken({
              token: 'dada',
            }),
          );
          // setStoreCredentials(true);
        }}>
        {t('sign')}
      </CustomText>
      <CustomText
        fontWeight={'700'}
        testID={'btnForgot'}
        onPress={() => {
          // Send reset email and then deeplink to ResetPassword
          navigate('ResetPassword');
          setToken({
            token: '',
          });
        }}>
        {t('forgot')}
      </CustomText>
    </CustomScreen>
  );
};

export default Onboaring;
