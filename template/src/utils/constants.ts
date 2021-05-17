import { Dimensions, Platform } from 'react-native';

export const WINDOW_DEVICE_WIDTH = Dimensions.get('window').width;
export const WINDOW_DEVICE_HEIGHT = Dimensions.get('window').height;
export const IS_IOS = Platform.OS === 'ios';
