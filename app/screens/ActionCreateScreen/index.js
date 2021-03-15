import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectTomorrowsActions } from '../../selectors/action';

// Actions
import {
  fetchActions, fetchAction, saveAction, deleteAction,
} from '../../actions/action';

// Component
import ActionCreateScreen from './ActionCreateScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ActionCreateScreen, {
    ...props,
    auth: useSelector(selectAuth),
    actions: useSelector(selectTomorrowsActions),
  });
};
