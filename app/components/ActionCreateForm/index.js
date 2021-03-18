import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLoading, selectError } from '../../selectors/app';
import { selectComplete } from '../../selectors/action';

// Actions
import { saveAction, resetAction } from '../../actions/action';

// Component
import ActionCreateForm from './ActionCreateForm';

const STATE_KEY = 'action';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ActionCreateForm, {
    ...props,
    auth: useSelector(selectAuth),
    complete: useSelector(selectComplete),
    error: useSelector(selectError),
    loading: useSelector(selectLoading),
    navigation: useNavigation(),
    resetAction: () => dispatch(resetAction()),
    saveAction: (action) => dispatch(saveAction(action)),
  });
};
