import { COLORS } from '../../theme';

export default {
  todayScreen: {
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: COLORS.LIGHT_TEXT,
    borderBottomWidth: 1,
  },
  rowNoBorder: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  planRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  planNameContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  notInPlanContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  notInPlanText: {
    marginBottom: 20,
  },
  actionsContainer: {
    marginTop: 20,
  },
  actionsTitle: {
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
  actionsSubTitle: {
    fontSize: 8,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
  headingContainer: {
    justifyContent: 'center',
  },

  headerText: {
    fontFamily: 'Good-Times',
    color: COLORS.LIGHT_TEXT,
  },
  actionCreateButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
