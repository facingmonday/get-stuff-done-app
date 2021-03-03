import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions
import { fetchMe } from '../../actions/auth';

// Component
import HomeScreen from './HomeScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(HomeScreen, {
    ...props,
    auth: useSelector(selectAuth),
    fetchMe: () => dispatch(fetchMe()),
  });
};
