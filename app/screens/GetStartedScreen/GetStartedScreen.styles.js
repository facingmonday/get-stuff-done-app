import { COLORS } from '../../theme';

export default {
  getStartedScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    marginTop: 50,
    paddingBottom: 100,
    alignSelf: 'center',
    color: 'white',
  },
  image: {
    width: 200,
    height: 95,
  },
  logoContainer: {
    padding: 100,
  },
  getStartedButtonContainer: {
    alignItems: 'center',
  },
  getStartedButton: {
    width: 200,
    backgroundColor: COLORS.DARK_RED,
    borderRadius: 35,
    borderColor: COLORS.DARKER_RED,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
  signInText: {
    color: COLORS.LIGHT_TEXT,
  },
};
