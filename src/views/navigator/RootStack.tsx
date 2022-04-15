import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { KakaoProfile } from '@react-native-seoul/kakao-login';
import { AppleRequestResponse } from '@invertase/react-native-apple-authentication';
import GoalScreen from '../GoalSettingScreen';
import TestScreen from '../TestSreen'
import MainTab from './MainTab'
import LoginScreen from '../LoginScreen';
import ProfileScreen from '../ProfileScreen';
import ProfileScreen2 from '../ProfileScreen2';
import ProfileScreen3 from '../ProfileScreen3';


// TODO: 추가되는 화면을 Type에 추가하여야 함
type RootStackParamList = {
    TestScreen: undefined;
    GoalScreen: undefined;
    LoginScreen: undefined;
    MainTab: undefined;
    ProfileScreen: { userProfile: KakaoProfile };
    ProfileScreen2: { userProfile2: AppleRequestResponse };
    ProfileScreen3: { userProfile3 : any};
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => { 
    return (
            <Stack.Navigator initialRouteName='MainTab'>
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
                <Stack.Screen
                    name='ProfileScreen2'
                    component={ProfileScreen2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ProfileScreen3'
                    component={ProfileScreen3}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
}

export default RootStack;