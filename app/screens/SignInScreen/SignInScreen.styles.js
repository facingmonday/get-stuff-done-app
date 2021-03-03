import { StyleSheet } from 'react-native';
import { globalStyles, COLORS } from '../../theme';

export default StyleSheet.create({
  signInForm: {
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  goBackText: {
    ...globalStyles.darkText,
    marginTop: 30,
    alignSelf: 'center',
  },
});
