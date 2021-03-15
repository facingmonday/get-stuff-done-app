import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions

// Component
import Text from './Text';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(Text, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
  });
};
