import { useCallback, useEffect, useState } from 'react';
import { ONESIGNAL_IOS_KEY, ONESIGNAL_ANDROID_KEY } from '@env';

import OneSignal from 'react-native-onesignal';
import { DeviceState } from 'react-native-onesignal';
import { IS_IOS } from '@application/utils/constants';

const onesignalId = IS_IOS ? ONESIGNAL_IOS_KEY : ONESIGNAL_ANDROID_KEY;

const useOneSignal = () => {
  const [userDeviceState, setUserDeviceState] = useState<DeviceState | null>(
    {} as DeviceState,
  );

  const getDeviceState = useCallback(async () => {
    const deviceState = await OneSignal.getDeviceState();

    setUserDeviceState(deviceState);
  }, []);

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);

    OneSignal.setAppId(onesignalId);

    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      console.log('Prompt response:', response);
    });

    getDeviceState();
    handlerOpenedNotification();
  }, [getDeviceState]);

  const handlerOpenedNotification = () => {
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log('OneSignal: notification opened:', notification);
    });
  };

  return { userDeviceState };
};

export default useOneSignal;
