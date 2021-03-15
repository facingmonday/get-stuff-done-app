import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLoading, selectError, selectNextHref } from '../../selectors/stateKeys';

// Actions

// Component
import Modal from './Modal';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(Modal, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
  });
};
