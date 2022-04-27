import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import MainTab from './MainTab'

// TODO: 추가되는 화면을 Type에 추가하여야 함
type RootStackParamList = {
    MainTab: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='MainTab'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name='MainTab'
                component={MainTab}
            />
        </Stack.Navigator >
    );
}

export default RootStack;