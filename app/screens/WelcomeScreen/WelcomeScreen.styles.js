import { StyleSheet } from 'react-native';

import { COLORS } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  item: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    padding: 20,
  },
  list: {
    width: '100%',
    maxHeight: 400,
    borderTopWidth: 0,
    borderColor: COLORS.LIGHT_GREY,
    marginBottom: 20,
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT_GREY,
    paddingBottom: 30,
  },

  goBackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  subWelcomeText: {
    textAlign: 'center',
    marginTop: 10,
  },
  subWelcomeTextBold: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.DARK_BACKGROUND,
    width: 250,
    borderRadius: 35,
    borderColor: COLORS.RED,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
});
