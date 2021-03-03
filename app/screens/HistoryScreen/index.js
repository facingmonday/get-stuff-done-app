import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectAllCompletedActions } from '../../selectors/action';
import { selectLoading, selectError } from '../../selectors/stateKeys';

// Actions

// Component
import HistoryScreen from './HistoryScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(HistoryScreen, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    error: useSelector(selectError('completedAction')),
    loading: useSelector(selectLoading('completeedAction')),
    completedActions: useSelector(selectAllCompletedActions),
  });
};
