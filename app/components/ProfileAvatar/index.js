import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth, selectCurrentUser } from '../../selectors/auth';
import { selectLoading, selectError, selectNextHref } from '../../selectors/stateKeys';

// Actions
import { uploadProfileImage } from '../../actions/auth';

// Component
import ProfileAvatar from './ProfileAvatar';

const STATE_KEY = 'auth';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ProfileAvatar, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    loading: useSelector(selectLoading(STATE_KEY)),
    uploadProfileImage: (uri) => dispatch(uploadProfileImage(uri)),
    user: useSelector(selectCurrentUser),
  });
};
