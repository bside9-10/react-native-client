import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { KakaoOAuthToken, KakaoProfile } from '@react-native-seoul/kakao-login';
import GoalScreen from '../GoalSettingScreen';
import TestScreen from '../TestSreen'
import MainTab from './MainTab'
import LoginScreen from '../LoginScreen';
import ProfileScreen from '../ProfileScreen';

// TODO: 추가되는 화면을 Type에 추가하여야 함
type RootStackParamList = {
    TestScreen: undefined;
    GoalScreen: undefined;
    LoginScreen: undefined;
    MainTab: undefined;
    ProfileScreen: {userProfile : KakaoProfile};
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => { 
    return (
            <Stack.Navigator initialRouteName='LoginScreen'>
                {/* TODO : 화면 추가 */}
                <Stack.Screen
                    name='MainTab'
                    component={MainTab}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={() => ({ title: 'LoginScreen'})}
                />
                <Stack.Screen
                    name='TestScreen'
                    component={TestScreen}
                    options={() => ({ title: 'TestScreen'})}
                />
                <Stack.Screen
                    name='GoalScreen'
                    component={GoalScreen}
                    options={{ headerShown: false }}
            />
                <Stack.Screen
                    name='ProfileScreen'
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
}

export default RootStack;