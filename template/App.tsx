import React from 'react';
import '@business/services/localization';
import { SENTRY_DSN } from '@env';
import * as Sentry from '@sentry/react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from '@core/theme';
import store from '@store/index';
import Router from '@application/navigation/Router';
import { useNavigationMounting } from '@application/navigation/RootNavigation';

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
