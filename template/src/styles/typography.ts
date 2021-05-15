import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = height * 0.019;
export const FONT_SIZE_14 = height * 0.0169;
export const FONT_SIZE_12 = height * 0.0148;

// LINE HEIGHT
// export const LINE_HEIGHT_24 = scaleFont(24);
// export const LINE_HEIGHT_20 = scaleFont(20);
// export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
