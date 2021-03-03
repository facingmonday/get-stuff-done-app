import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth, selectCurrentUser } from '../../selectors/auth';

// Actions
import { updateProfile, saveProfile } from '../../actions/auth';

// Component
import UserProfile from './UserProfile';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(UserProfile, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    saveProfile: (user) => dispatch(saveProfile(user)),
    updateProfile: (user) => dispatch(updateProfile(user)),
    user: useSelector(selectCurrentUser),
  });
};
