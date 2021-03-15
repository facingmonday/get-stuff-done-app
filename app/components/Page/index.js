import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAssets } from '@selectors/asset';

// Component
import Page from './Page';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(Page, {
    ...props,
    assets: useSelector(selectAssets),
  });
};
