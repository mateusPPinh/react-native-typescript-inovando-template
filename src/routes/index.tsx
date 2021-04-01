import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../pages/Signin';
import ForgotPassword from '../pages/ForgotPassword';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={Signin} />
    <Stack.Screen name="Forgot" component={ForgotPassword} />
  </Stack.Navigator>
);

export default Routes;
