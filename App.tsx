import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/config/theme.json';
import Routes from './src/routes/index';

import { AuthProvider } from './src/contexts/auth';

const App: React.FC = () => (
  <NavigationContainer>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  </NavigationContainer>
);

export default App;
