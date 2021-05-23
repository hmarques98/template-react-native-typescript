import React, { useCallback, useEffect, useState } from 'react';
import { ONESIGNAL_IOS_KEY, ONESIGNAL_ANDROID_KEY } from '@env';

import OneSignal from 'react-native-onesignal';
import { IS_IOS } from '@utils/constants';
import { DeviceState } from 'react-native-onesignal';

interface SubscribeFields {
  isSubscribed: boolean;
}

export interface Props {
  subscribeFields: SubscribeFields;
  loggingFunction: Function;
  inputFieldValue: string;
}

export interface State {
  isSubscribed: boolean;
  unSubscribedWhenNotificationDisabled: boolean;
  isLocationShared: boolean;
  provideUserConsent: boolean;
  requireUserConsent: boolean;
  pauseIAM: boolean;
  state: any;
}

const onesignalId = IS_IOS ? ONESIGNAL_IOS_KEY : ONESIGNAL_ANDROID_KEY;

const useOneSignal = () => {
  const [userDeviceState, setUserDeviceState] = useState<DeviceState>(
    {} as DeviceState,
  );

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);

    OneSignal.setAppId(onesignalId);

    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      console.log('Prompt response:', response);
    });

    getDeviceState();
    handlerOpenedNotification();
  }, []);

  const handlerOpenedNotification = () => {
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log('OneSignal: notification opened:', notification);
    });
  };

  const getDeviceState = useCallback(async () => {
    const deviceState = await OneSignal.getDeviceState();

    setUserDeviceState(deviceState);
  }, []);

  return { userDeviceState };
};

export default useOneSignal;
