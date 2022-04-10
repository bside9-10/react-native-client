import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import GoalScreen from '../GoalSettingScreen';
import TestScreen from '../TestSreen'
import MainTab from './MainTab'

// TODO: 추가되는 화면을 Type에 추가하여야 함
type RootStackParamList = {
    TestScreen: undefined;
    GoalScreen: undefined;
    MainTab: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName='TestScreen'>
            {/* TODO : 화면 추가 */}
            <Stack.Screen
                name='MainTab'
                component={MainTab}
                options={{ headerShown: false }}
            />
            < Stack.Screen
                name='TestScreen'
                component={TestScreen}
                options={() => ({ title: 'TestScreen' })}
            />
            <Stack.Screen
                name='GoalScreen'
                component={GoalScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;