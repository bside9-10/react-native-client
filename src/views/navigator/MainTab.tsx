import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native-svg";
import { SafeAreaView } from 'react-native';
import TodayPlanScreen from "../TodayPlanScreen"

const Tab = createBottomTabNavigator();

const ListScreen = () => {
    return <Text>라플리스트</Text>
}

const MyPageScreen = () => {
    return <Text>마이페이지</Text>
}

const MainTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="ListScreen" component={ListScreen} />
            <Tab.Screen name="TodayPlanScreen" component={TodayPlanScreen} />
            <Tab.Screen name="MyPageScreen" component={MyPageScreen} />
        </Tab.Navigator>
    );
}

export default MainTab;