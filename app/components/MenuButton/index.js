import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth, selectNavigation } from '../../selectors/auth';

// Actions
import { navigate } from '../../actions/app';

// Component
import MenuButton from './MenuButton';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(MenuButton, {
    ...props,
    auth: useSelector(selectAuth),
    navigation: useSelector(selectNavigation),
    navigate: (route) => dispatch(navigate(route)),
  });
};
