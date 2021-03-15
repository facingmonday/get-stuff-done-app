import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  signInButton: {
    backgroundColor: COLORS.DARK_RED,
    width: 250,
    fontFamily: 'Good-Times',
    borderColor: COLORS.DARKER_RED,
  },
  signInText: {
    fontSize: 18,
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
  md: {
    width: 250,

  },
  sm: {
    width: 80,
    margin: 0,
    fontSize: 8,
    padding: 0,
  },
});
