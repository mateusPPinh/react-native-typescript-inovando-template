import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/config/theme.json';
import Routes from './src/routes/index';

const App: React.FC = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
