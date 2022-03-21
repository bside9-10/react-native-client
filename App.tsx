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
import {Router, Scene} from 'react-native-router-flux';
import goalSettingScreen from './src/views/goalSetting/GoalSettingScreen';
//import LoginScreen from './src/views/login/LoginScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* <Scene
          key="loginScreen"
          component={LoginScreen}
          animation="fade"
          hideNavBar={true}
          initial={true}
        /> */}
        <Scene
          key="goalSettingScreen"
          component={goalSettingScreen}
          animation="fade"
          hideNavBar={true}
        />
      </Scene>
    </Router>
  );
};

export default App;
