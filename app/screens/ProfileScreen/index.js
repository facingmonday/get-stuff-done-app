import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLoading } from '../../selectors/app';

// Actions
import { fetchMe, loginUser, logoutUser } from '../../actions/auth';

// Component
import ProfileScreen from './ProfileScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ProfileScreen, {
    ...props,
    auth: useSelector(selectAuth),
    loading: useSelector(selectLoading),
    logoutUser: () => dispatch(logoutUser()),
    loginUser: (data) => dispatch(loginUser(data)),
    fetchMe: () => dispatch(fetchMe()),
    navigation: useNavigation(),
  });
};
