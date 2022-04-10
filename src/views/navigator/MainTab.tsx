import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native-svg";

const Tab = createBottomTabNavigator();

const ListScreen = () => {
    return <Text>라플리스트</Text>
}

const TodayPlanScreen = () => {
    return <Text>오늘의플랜</Text>
}

const MyPageScreen = () => {
    return <Text>마이페이지</Text>
}

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ListScreen" component={ListScreen} />
            <Tab.Screen name="TodayPlanScreen" component={TodayPlanScreen} />
            <Tab.Screen name="MyPageScreen" component={MyPageScreen} />
        </Tab.Navigator>
    );
}

export default MainTab;