import React from 'react';
import CosmosWrapper from '../../../config/cosmos';
import state from '../../../config/mock';

import ForgotPasswordForm from './ForgotPasswordForm';

export default {
  loading: (
    <CosmosWrapper>
      <ForgotPasswordForm />
    </CosmosWrapper>
  ),
};
