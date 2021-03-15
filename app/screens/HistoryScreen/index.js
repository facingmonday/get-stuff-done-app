import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Selectors
import { selectAuth } from '@selectors/auth';
import { selectActionsGroupedByDay } from '@selectors/action';
import { selectLoading, selectError } from '@selectors/app';
import { selectAssets } from '@selectors/asset';

// Actions
import { fetchActions } from '@actions/action';

// Component
import HistoryScreen from './HistoryScreen';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(HistoryScreen, {
    ...props,
    actions: useSelector(selectActionsGroupedByDay),
    assets: useSelector(selectAssets),
    auth: useSelector(selectAuth),
    error: useSelector(selectError),
    fetchActions: () => dispatch(fetchActions()),
    loading: useSelector(selectLoading),
    navigation: useNavigation(),
  });
};
