import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

const iOSScrollViewConfig: React.FC = () => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  />
);

export default iOSScrollViewConfig;
