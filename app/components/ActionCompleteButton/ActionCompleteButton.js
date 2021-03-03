import React, { useEffect } from 'react';
import { Button } from '@ui-kitten/components';
import isSameDay from 'date-fns/isSameDay';

import styles from './ActionCompleteButton.styles';

const ActionCompleteButton = ({
  actionId,
  canCompleteAction,
  loading,
  navigation: { navigate },
  nextHref,
  planId,
  saveCompletedAction,
  completedActionContent,
  setNextHref,
}) => {
  const handlePress = () => {
    const ca = {
      actionId,
      planId,
      contentIds: completedActionContent || [],
    };
    setNextHref('Today');
    saveCompletedAction(ca);
  };

  return (
    <Button
      onPress={handlePress}
      disabled={loading || !canCompleteAction}
    >
      Complete
    </Button>
  );
};

export default ActionCompleteButton;
