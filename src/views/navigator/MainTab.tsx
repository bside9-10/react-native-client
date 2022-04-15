import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native-svg";
import TodayLaffleScreen from '../TodayLaffleScreen';

const Tab = createBottomTabNavigator();

// 라플리스트 화면(view)를 여기에 넣으면 될 것으로 보임

const ListScreen = () => {
    return <Text>마이페이지</Text>
}

const TodayPlanScreen = () => { 
    return <TodayLaffleScreen />
}

const MyPageScreen = () => { 
    return <Text>마이페이지</Text>
}

const MainTab = () => { 
    return (
        <Tab.Navigator>
            <Tab.Screen name="라플리스트" component={ListScreen}  options={{headerShown:false}}/>
            <Tab.Screen name="오늘라플" component={TodayPlanScreen} options={{headerShown:false}}/>
            <Tab.Screen name="마이페이지" component={MyPageScreen}/>
        </Tab.Navigator>
    );
}

export default MainTab;