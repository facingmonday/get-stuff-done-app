import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLoading, selectError } from '../../selectors/app';

// Actions
import { setNextHref } from '../../actions/app';

// Component
import ActionCompleteButton from './ActionCompleteButton';

export default (props) => {
  const dispatch = useDispatch();

  return React.createElement(ActionCompleteButton, {
    ...props,
    auth: useSelector(selectAuth),
    error: useSelector(selectError),
    loading: useSelector(selectLoading),
    navigation: useNavigation(),
    setNextHref: (nextHref) => dispatch(setNextHref(nextHref)),
  });
};
