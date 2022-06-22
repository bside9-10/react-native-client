import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {KakaoProfile} from '@react-native-seoul/kakao-login';
import {AppleRequestResponse} from '@invertase/react-native-apple-authentication';

import GoalScreen from '../GoalSettingScreen';
import TestScreen from '../TestSreen';
import MainTab from './MainTab';
import LoginScreen from '../LoginScreen';
import ProfileScreen from '../ProfileScreen';
import ProfileScreen2 from '../ProfileScreen2';
import ProfileScreen3 from '../ProfileScreen3';
import MyPageScreen from '../MyPageScreen';
import OnboardingScreen from '../OnboardingScreen';

// TODO: 추가되는 화면을 Type에 추가하여야 함
type RootStackParamList = {
    TestScreen: undefined;
    GoalScreen: undefined;
    LoginScreen: undefined;
    MainTab: undefined;
    OnboardingScreen: undefined;
    AvailableTimeScreen: { appleUser: AppleRequestResponse };
    ProfileScreen: { userProfile: KakaoProfile };
    ProfileScreen2: { userProfile2: AppleRequestResponse };
    ProfileScreen3: { userProfile3 : any};
    MyPageScreen: undefined;
}

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  // return (
  //   <Stack.Navigator initialRouteName="MainTab">
  //     {/* TODO : 화면 추가 */}
  //     <Stack.Screen
  //       name="MainTab"
  //       component={MainTab}
  //       options={{headerShown: false}}
  //     />
  //     <Stack.Screen
  //       name="LoginScreen"
  //       component={LoginScreen}
  //       options={() => ({title: 'LoginScreen'})}
  //     />
  //     <Stack.Screen
  //       name="MyPageScreen"
  //       component={MyPageScreen}
  //       options={() => ({title: 'MyPageScreen'})}
  //     />
  //     <Stack.Screen
  //       name="TestScreen"
  //       component={TestScreen}
  //       options={() => ({title: 'TestScreen'})}
  //     />
  //     <Stack.Screen
  //       name="GoalScreen"
  //       component={GoalScreen}
  //       options={{headerShown: false}}
  //     />
  //     <Stack.Screen
  //       name="ProfileScreen"
  //       component={ProfileScreen}
  //       options={{headerShown: false}}
  //     />
  //     <Stack.Screen
  //       name="ProfileScreen2"
  //       component={ProfileScreen2}
  //       options={{headerShown: false}}
  //     />
  //     <Stack.Screen
  //       name="ProfileScreen3"
//         component={ProfileScreen3}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

    // return (
    //         // <Stack.Navigator initialRouteName='MainTab'>
    //         // <Stack.Navigator initialRouteName='LoginScreen'>
    //         <Stack.Navigator initialRouteName='ProfileScreen3'>
    //             {/* TODO : 화면 추가 */}
    //             <Stack.Screen
    //                 name='MainTab'
    //                 component={MainTab}
    //                 options={{headerShown:false}}
    //             />
    //             <Stack.Screen
    //                 name='LoginScreen'
    //                 component={LoginScreen}
    //                 options={{headerShown:false}}
    //             />
    //             <Stack.Screen
    //                 name='TestScreen'
    //                 component={TestScreen}
    //                 options={() => ({ title: 'TestScreen'})}
    //             />
    //             <Stack.Screen
    //                 name='GoalScreen'
    //                 component={GoalScreen}
    //                 options={{ headerShown: false }}
    //             />
    //             <Stack.Screen
    //                 name='ProfileScreen'
    //                 component={ProfileScreen}
    //                 options={() => ({ title: '실천 가능 시간 입력'})}
    //             />
    //             <Stack.Screen
    //                 name='ProfileScreen2'
    //                 component={ProfileScreen2}
    //                 options={{ headerShown: true }}
    //             />
    //             <Stack.Screen
    //                 name='ProfileScreen3'
    //                 component={ProfileScreen3}
    //                 options={() => ({ title: '실천 가능 시간 입력'})}
    //             />
    //         </Stack.Navigator>
    // );
// }
    return (
            // <Stack.Navigator initialRouteName='MainTab'>
            // <Stack.Navigator initialRouteName='LoginScreen'>
            // screenOptions={{headerBackTitle='닫기'}}
        <Stack.Navigator 
            initialRouteName='OnboardingScreen'>
                {/* TODO : 화면 추가 */}
                <Stack.Screen
                    name='MainTab'
                    component={MainTab}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name='OnboardingScreen'
                    component={OnboardingScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{headerShown:false}}
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
                    name="MyPageScreen"
                    component={MyPageScreen}
                    options={() => ({title: 'MyPageScreen'})}
                />
                <Stack.Screen
                    name='ProfileScreen'
                    component={ProfileScreen}
                    options={() => ({ title: '실천 가능 시간 입력'})}
                />
                <Stack.Screen
                    name='ProfileScreen2'
                    component={ProfileScreen2}
                    options={{ headerShown: true }}
                />
                <Stack.Screen
                    name='ProfileScreen3'
                    component={ProfileScreen3}
                    options={() => ({ title: '실천 가능 시간 입력'})}
                />
            </Stack.Navigator>
    );
}

export default RootStack;
