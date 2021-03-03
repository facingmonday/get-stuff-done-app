import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  alert: {
    color: COLORS.LIGHT_RED,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: COLORS.LIGHT_RED,
    borderColor: COLORS.DARK_RED,
    padding: 10,
  },
  alertText: {
    color: COLORS.DARK_RED,
    marginLeft: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
