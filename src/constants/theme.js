import {Dimensions, Platform, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

const statusBar_Height = StatusBar.currentHeight;
const header_Height = Platform.OS === 'ios' ? 44 : 56;
export const COLORS = {
  // base colors
  primary: '#f78c2c', // orange
  secondary: '#CDCDD2', // gray

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  background: '#f5f5f5',
  backgroundSection: '#e3e3e3',
  iconBottom: '#656565',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
  statusBar_Height,
  header_Height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
};
export const LISTCOLORS = [
  '#EE0000',
  '#2196F3',
  '#FFEB3B',
  '#4CAF50',
  '#FF4500',
  '#FF8C00',
  '#FF7F24',
  '#FFB90F',
  '#FFD700',
  '#9ACD32',
  '#66CD00',
  '#7CFC00',
  '#00FFFF',
  '#00CED1',
  '#696969',
  '#8B4513',
  '#EEE9BF',
  '#EED5D2',
  '#8470FF',
];
const appTheme = {COLORS, SIZES, FONTS, LISTCOLORS};

export default appTheme;
