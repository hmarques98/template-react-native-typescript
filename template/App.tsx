import React from 'react';
import { useNavigationMounting } from 'navigation/RootNavigation';
import 'localization';
import Router from 'navigation/Router';
import { FileLogger } from 'react-native-file-logger';
import { SENTRY_DSN, ENV, ONESIGNAL_ANDROID_KEY } from '@env';
import * as Sentry from '@sentry/react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';
import useAppState from 'react-native-appstate-hook';
import { Provider } from 'react-redux';
import store from '@store/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { warn } from '@utils/console';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';

FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

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

  useAppState({
    onChange: (newAppState) => warn('App state changed to ', newAppState),
    onForeground: () => warn('App went to Foreground'),
    onBackground: () => warn('App went to background'),
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
