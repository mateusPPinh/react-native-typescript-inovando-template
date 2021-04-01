import React from 'react';
import { ScrollView } from 'react-native';

const Centered = ({ children, ...rest }): any => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...rest}
  >
    {children}
  </ScrollView>
);

export default Centered;
