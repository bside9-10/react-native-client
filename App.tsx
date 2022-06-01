/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/views/navigator/RootStack';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
