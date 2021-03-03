import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions

// Component
import Alert from './Alert';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(Alert, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
  });
};
