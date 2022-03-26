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
import RootStack from './src/views/RootStack';
// import { Router, Scene } from 'react-native-router-flux';
// import LoginScreen from './src/views/login/LoginScreen';
// import goalScreen from './src/views/goal/GoalSettingScreen';
// import testScreen from './src/views/goal/Test';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
