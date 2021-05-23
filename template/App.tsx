import React from 'react';
import { useNavigationMounting } from 'navigation/RootNavigation';
import { log } from '@utils/console';
import 'localization';
import Router from 'navigation/Router';
import { enableScreens } from 'react-native-screens';
import { FileLogger } from 'react-native-file-logger';
import { SENTRY_DSN, ENV, ONESIGNAL_ANDROID_KEY } from '@env';
import * as Sentry from '@sentry/react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';
import useNetworkError from 'hooks/useNetworkError';
import useStartupTime from 'hooks/useStartupTime';
import useOneSignal from 'hooks/useOneSignal';
import useAppState from 'react-native-appstate-hook';
import { Provider } from 'react-redux';
import store from './src/store';
import { QueryClient, QueryClientProvider } from 'react-query';

enableScreens();
FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

log({ ENV, SENTRY_DSN, ONESIGNAL_ANDROID_KEY });

if (typeof SENTRY_DSN === 'string' && SENTRY_DSN.length > 0) {
  const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();

  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      new Sentry.ReactNativeTracing({
        routingInstrumentation,
        // ... other options
      }),
    ],
  });
}
const queryClient = new QueryClient();

const App = () => {
  useNavigationMounting();
  useOneSignal();
  useStartupTime();

  useNetworkError();

  useAppState({
    onChange: (newAppState) =>
      console.warn('App state changed to ', newAppState),
    onForeground: () => console.warn('App went to Foreground'),
    onBackground: () => console.warn('App went to background'),
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
};

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
