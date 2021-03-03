import React from 'react';
import CosmosWrapper from '../../../config/cosmos';
import state from '../../../config/mock';

import AccountForm from './AccountForm';

export default {
  loading: (
    <CosmosWrapper>
      <AccountForm />
    </CosmosWrapper>
  ),
};
