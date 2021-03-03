import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLoading, selectError, selectNextHref } from '../../selectors/stateKeys';

// Actions
import { createAction } from '../../actions/action';
import { setNextHref } from '../../actions/stateKeys';

// Component
import ActionCreateForm from './ActionCreateForm';

const STATE_KEY = 'action';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ActionCreateForm, {
    ...props,
    auth: useSelector(selectAuth),
    loading: useSelector(selectLoading(STATE_KEY)),
    error: useSelector(selectError(STATE_KEY)),
    navigation: useNavigation(),
    nextHref: useSelector(selectNextHref(STATE_KEY)),
    createAction: (action) => dispatch(createAction(action)),
    setNextHref: (nextHref) => dispatch(setNextHref(STATE_KEY, nextHref)),
  });
};
