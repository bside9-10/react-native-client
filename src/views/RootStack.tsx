import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {RootStackParamList} from ''
import Test from './goal/Test';
import GoalScreen from './goal/GoalSettingScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => { 
    return (
        <Stack.Navigator>
            {/* TODO : 화면 추가 */}
            {/* <Stack.Screen
                name='Test'
                component={Test}
                options={{ headerShown: false }} /> */}
            <Stack.Screen
                name='goalScreen'
                component={GoalScreen}
            options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default RootStack;