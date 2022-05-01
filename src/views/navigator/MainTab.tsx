import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from "react-native";
import TodayLaffleScreen from '../TodayLaffleScreen';

const Tab = createBottomTabNavigator();

const ListScreen = () => {
    return <Text>오늘라플</Text>
}

const TodayPlanScreen = () => { 
    return <TodayLaffleScreen />

}

const MyPageScreen = () => {
    return <Text>마이페이지</Text>
}

const listIcon = ( focused  : boolean) => { 
    return (
        // eslint-disable-next-line global-require
        <Image source={focused ? require('../../../assets/images/laffleListOn.png') : require('../../../assets/images/laffleListOff.png')}
               resizeMode="contain"
                           
        />
    )
}

const todayLaffleIcon = ( focused  : boolean) => { 
    return (
        // eslint-disable-next-line global-require
        <Image source={focused ? require('../../../assets/images/todayLaffleOn.png') : require('../../../assets/images/todayLaffleOff.png')}
               resizeMode="contain"
                           
        />
    )
}

const mypageIcon = ( focused  : boolean) => { 
    return (
        // eslint-disable-next-line global-require
        <Image source={focused ? require('../../../assets/images/mypageOn.png') : require('../../../assets/images/mypageOff.png')}
               resizeMode="contain"
                           
        />
    )
}

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="라플리스트" component={ListScreen} options={{
                headerShown: false,
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        {listIcon(focused)}
                    </View>
                )
            }} />
            <Tab.Screen name="오늘라플" component={TodayPlanScreen} options={{
                headerShown: false,
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        {todayLaffleIcon(focused)}
                    </View>
                )
            }} />
            <Tab.Screen name="마이페이지" component={MyPageScreen} options={{
                headerShown: false,
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        {mypageIcon(focused)}
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

export default MainTab;