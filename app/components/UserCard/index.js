import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { makeSelectUserById } from '../../selectors/user';

// Actions
import { fetchUser } from '../../actions/user';

// Component
import UserCard from './UserCard';

export default (props) => {
  const dispatch = useDispatch();
  const selectUserById = useMemo(makeSelectUserById);
  return React.createElement(UserCard, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    user: useSelector((state) => selectUserById(state, props.userId)),
  });
};
