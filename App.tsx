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

import LoginScreen from './src/views/login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreens from './src/views/onboarding/Onboarding';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreens} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>}</NavigationContainer>
  );
}

export default App;
