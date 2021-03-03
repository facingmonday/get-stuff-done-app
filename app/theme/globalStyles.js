import { StyleSheet } from 'react-native';
import { RW, RH, RFS } from './responsiveSizes';
import COLORS from './colors';

export default StyleSheet.create({
  textFont: {
    // fontFamily: 'Arial',
  },
  textFontBold: {
    // fontFamily: 'Arial',
  },
  textFontSemiBold: {
    // fontFamily: 'Arial',
  },
  textFontItalic: {
    // fontFamily: 'Arial',
  },
  textFontMiller: {
    // fontFamily: 'Arial',
  },
  textFontMillerBold: {
    // fontFamily: 'Arial',
  },
  textFontMillerItalic: {
    // fontFamily: 'Arial',
  },
  headerTitle: {
    // fontFamily: 'Arial',
    marginLeft: 0,
    marginRight: 0,
    color: COLORS.DARK_BLUE,
    fontSize: RFS * 1.5,
    textAlign: 'center',
    flex: 1,
  },
  headerStyleDefault: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 0,
    height: RH * 5.2,
  },
  headerLeftContainerStyle: {
    minWidth: RW * 5,
    justifyContent: 'flex-start',
  },
  headerRightContainerStyle: {
    minWidth: RW * 5,
    justifyContent: 'flex-end',
  },
  f1: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  marginLeft10: {
    marginLeft: RW,
  },
  marginLeft20: {
    marginLeft: RW * 2,
  },
  marginRight10: {
    marginRight: RW,
  },
  marginBottom10: {
    marginBottom: RH,
  },
  marginBottom20: {
    marginBottom: RH * 2,
  },
  marginTop10: {
    marginTop: RH,
  },
  marginTop20: {
    marginTop: RH * 2,
  },
  marginBottom15: {
    marginBottom: RH * 1.5,
  },
  marginBottom50: {
    marginBottom: RH * 5,
  },
  marginVertical20: {
    marginVertical: RH * 2,
  },
  marginHorizontal10: {
    marginHorizontal: RW,
  },
  marginHorizontal20: {
    marginHorizontal: RW * 2,
  },
  marginHorizontal40: {
    marginHorizontal: RW * 4,
  },
  paddingVertical10: {
    paddingVertical: RH,
  },
  paddingHorizontal5: {
    paddingHorizontal: RW * 0.5,
  },
  paddingHorizontal10: {
    paddingHorizontal: RW,
  },
  paddingHorizontal15: {
    paddingHorizontal: RW * 1.5,
  },
  paddingVertical20: {
    paddingVertical: RH * 2,
  },
  paddingHorizontal20: {
    paddingHorizontal: RW * 2,
  },
  paddingHorizontal30: {
    paddingHorizontal: RW * 3,
  },
  paddingHorizontal40: {
    paddingHorizontal: RW * 4,
  },
  paddingBottom10: {
    paddingBottom: RH,
  },
  paddingBottom50: {
    paddingBottom: RH * 5,
  },
  paddingTop20: {
    paddingTop: RH * 2,
  },
  fullHeight: {
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  bgDark: {
    backgroundColor: COLORS.DARK,
  },
  bgWhite: {
    backgroundColor: COLORS.WHITE,
  },
  borderRounded: {
    borderRadius: 10,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
  },
  darkBackground: {
    backgroundColor: COLORS.DARK_BACKGROUND,
  },
  darkText: {
    color: COLORS.DARK_TEXT,
  },
});
