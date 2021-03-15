import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectDeletedActionLoading } from '../../selectors/action';
// Actions
import { deleteAction, updateAction } from '../../actions/action';

// Component
import ActionRow from './ActionRow';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ActionRow, {
    ...props,
    auth: useSelector(selectAuth),
    loading: useSelector(selectDeletedActionLoading),
    navigation: useNavigation(),
    updateAction: (action) => dispatch(updateAction(action)),
    deleteAction: (actionId) => dispatch(deleteAction(actionId)),
  });
};
