import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectNextHref } from '../../selectors/app';

// Actions
import { logoutUser } from '../../actions/auth';

// Component
import LogoutButton from './LogoutButton';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(LogoutButton, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    logoutUser: () => dispatch(logoutUser()),
    nextHref: useSelector(selectNextHref),
  });
};
