import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  signInButton: {
    backgroundColor: COLORS.DARK_RED,
    width: 150,
    fontFamily: 'Good-Times',
  },
  signInText: {
    fontSize: 18,
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
});
