import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions
import { signInAnonymously } from '../../actions/auth';

// Component
import SignUpScreen from './SignUpScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(SignUpScreen, {
    ...props,
    auth: useSelector(selectAuth),
    signInAnonymously: (options) => dispatch(signInAnonymously(options)),
  });
};
