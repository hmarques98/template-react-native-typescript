declare module '*.png';
declare module '*.svg';
declare module 'react-native-user-avatar';

declare module '@env' {
  export const ENV: 'dev' | 'prod';
  export const SENTRY_DSN: string;

  export const BASE_URL: string;
  export const ONESIGNAL_IOS_KEY: string;
  export const ONESIGNAL_ANDROID_KEY: string;
}
