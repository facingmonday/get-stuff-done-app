import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectNextHref } from '../../selectors/app';

// Actions
import { registerUser, signInAnonymously } from '../../actions/auth';

// Component
import SignUpForm from './SignUpForm';

export default (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return React.createElement(SignUpForm, {
    ...props,
    navigation,
    auth: useSelector(selectAuth),
    registerUser: (user) => dispatch(registerUser(user)),
    nextHref: useSelector(selectNextHref),
    signInAnonymously: () => dispatch(signInAnonymously()),
  });
};
