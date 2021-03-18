import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  goBackContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  backText: {
    color: COLORS.WHITE,
  },
});
