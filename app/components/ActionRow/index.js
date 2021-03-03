import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions
import { updateAction } from '../../actions/action';

// Component
import ActionRow from './ActionRow';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ActionRow, {
    ...props,
    navigation: useNavigation(),
    auth: useSelector(selectAuth),
    updateAction: (action) => dispatch(updateAction(action)),
  });
};
