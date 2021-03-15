import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions
import {
  fetchMe, loginUser, externalLoginSuccess, loginWithFacebook,
} from '../../actions/auth';

// Component
import SignInForm from './SignInForm';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(SignInForm, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    loginUser: (credentials) => dispatch(loginUser(credentials)),
    externalLoginSuccess: (code) => dispatch(externalLoginSuccess(code)),
    fetchMe: () => dispatch(fetchMe()),
    loginWithFacebook: () => dispatch(loginWithFacebook()),
  });
};
