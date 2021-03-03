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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
