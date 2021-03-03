import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLoading, selectError } from '../../selectors/stateKeys';
import { makeCanCompleteAction } from '../../selectors/completedAction';

// Actions
import { saveCompletedAction } from '../../actions/completedAction';
import { setNextHref } from '../../actions/stateKeys';

// Component
import ActionCompleteButton from './ActionCompleteButton';

const STATE_KEY = 'completedAction';

export default (props) => {
  const dispatch = useDispatch();
  const canCompleteAction = useMemo(makeCanCompleteAction);

  return React.createElement(ActionCompleteButton, {
    ...props,
    auth: useSelector(selectAuth),
    canCompleteAction: useSelector((state) => canCompleteAction(state, props)),
    error: useSelector(selectError(STATE_KEY)),
    loading: useSelector(selectLoading(STATE_KEY)),
    navigation: useNavigation(),
    saveCompletedAction: (completedAction) => dispatch(saveCompletedAction(completedAction)),
    setNextHref: (nextHref) => dispatch(setNextHref(STATE_KEY, nextHref)),
  });
};
