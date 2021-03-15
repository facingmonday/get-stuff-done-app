import { StyleSheet } from 'react-native';
import { globalStyles, COLORS } from '../../theme';

export default StyleSheet.create({
  signInForm: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
  goBackText: {
    ...globalStyles.lightText,
    marginTop: 30,
    alignSelf: 'center',
  },
  signInFormContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  signInRow: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
