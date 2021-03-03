import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions
import { navigate } from '../../services/navigation';
import { loginUser } from '../../actions/auth';

// Component
import SignInScreen from './SignInScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(SignInScreen, {
    ...props,
    auth: useSelector(selectAuth),
    navigate: (path, params = {}) => dispatch(navigate(path, params)),
    loginUser: (data) => dispatch(loginUser(data)),
  });
};
