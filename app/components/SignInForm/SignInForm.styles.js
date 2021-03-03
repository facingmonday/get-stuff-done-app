import { StyleSheet } from 'react-native';
import { globalStyles, COLORS } from '../../theme';

export default StyleSheet.create({
  signInForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInRow: {
    margin: 10,
  },
  orWithEmail: {
    margin: 30,
  },
  headerText: {
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
  signInButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    backgroundColor: COLORS.DARK_RED,
    width: 150,
    fontFamily: 'Good-Times',
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
    marginBottom: 5,
  },
  signInText: {
    fontSize: 18,
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
});
