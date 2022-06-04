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
import RootStack from './src/views/navigator/RootStack';
// import { UserContextProvider } from './src/helper/context/UserContext';
import rootReducer from './src/slices'

const store = createStore(rootReducer);

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      {/* <UserContextProvider> */}
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
      {/* </UserContextProvider> */}
    </Provider>
  );
}

export default App;
