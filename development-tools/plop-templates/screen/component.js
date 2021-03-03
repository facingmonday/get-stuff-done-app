import React, { useEffect, useLayoutEffect } from 'react';
import { Block } from 'galio-framework';
import { Text } from '@ui-kitten/components';

import style from './{{PascalCase}}.styles';

const {{PascalCase}} = ({ auth, navigation: { setOptions, navigate } }) => {
  useEffect(() => {
    setOptions({
      name: '{{PascalCase}}',
      headerShown: false,
    });
  }, []);

  return (
    <View style={ style.{{camelCaseName}} }>
      <Text>{{PascalCase}} Screen</Text>
    </View>
  );
};

export default {{PascalCase}};
