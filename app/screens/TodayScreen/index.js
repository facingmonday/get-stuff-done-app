import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAllActions } from '../../selectors/action';
import { selectAuth } from '../../selectors/auth';

// Actions
import { fetchActions } from '../../actions/action';

// Component
import TodayScreen from './TodayScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(TodayScreen, {
    ...props,
    auth: useSelector(selectAuth),
    actions: useSelector(selectAllActions),
    fetchActions: (options) => dispatch(fetchActions(options)),
  });
};
