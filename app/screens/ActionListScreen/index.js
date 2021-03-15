import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectShowModal } from '../../selectors/app';
import { selectComplete, selectTodaysActions } from '../../selectors/action';
import { selectAuth } from '../../selectors/auth';

// Actions
import { fetchActions, resetAction, deleteAction } from '../../actions/action';
import { setShowModal } from '../../actions/app';

// Component
import ActionListScreen from './ActionListScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ActionListScreen, {
    ...props,
    auth: useSelector(selectAuth),
    actions: useSelector(selectTodaysActions),
    complete: useSelector(selectComplete),
    deleteAction: (id) => dispatch(deleteAction(id)),
    fetchActions: (options) => dispatch(fetchActions(options)),
    resetAction: () => dispatch(resetAction()),
    showModal: useSelector(selectShowModal),
    setShowModal: (value) => dispatch(setShowModal(value)),
  });
};
