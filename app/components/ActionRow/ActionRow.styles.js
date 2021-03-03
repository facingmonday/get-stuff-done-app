import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

export default StyleSheet.create({
  actionRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  iconContainer: {
    flex: 1,
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  completeImage: {
    width: 50,
    height: 50,
  },
  actionName: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
    textAlign: 'center',
  },
  actionNameComplete: {
    color: COLORS.DARK_TEXT,
  },
});
