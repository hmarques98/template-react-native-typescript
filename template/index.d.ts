declare module '*.png';
declare module '*.svg';
declare module 'react-native-user-avatar';

declare module '@env' {
  export const ENV: 'dev' | 'prod';
  export const SENTRY_DSN: string;

  export const BASE_URL: string;
}
