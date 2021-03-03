import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectApp, selectLoaded } from '../../selectors/app';

// Actions
import { loadApp } from '../../actions/app';

// Component
import LoadingScreen from './LoadingScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(LoadingScreen, {
    ...props,
    auth: useSelector(selectAuth),
    app: useSelector(selectApp),
    loadApp: () => dispatch(loadApp()),
    loaded: useSelector(selectLoaded),
  });
};
