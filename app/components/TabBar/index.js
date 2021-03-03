import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions

// Component
import TabBar from './TabBar';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(TabBar, {
    ...props,
    auth: useSelector(selectAuth),
  });
};
