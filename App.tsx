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
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import RootStack from './src/views/navigator/RootStack';
import {theme} from './src/theme';
// import { UserContextProvider } from './src/helper/context/UserContext';
import rootReducer from './src/slices'

const store = createStore(rootReducer);


const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </ThemeProvider>
        </QueryClientProvider>
    </Provider>
  );
};

export default App;
