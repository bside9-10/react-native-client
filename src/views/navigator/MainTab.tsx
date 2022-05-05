import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text} from 'react-native';
import TodayLaffleScreen from '../TodayLaffleScreen';
import MyPageScreen from '../MyPageScreen';

const Tab = createBottomTabNavigator();

const ListScreen = () => {
  return <Text>오늘라플</Text>;
};

const TodayPlanScreen = () => {
  return <TodayLaffleScreen />;
};

// const MyPageScreen = () => {
//   return <MyPageScreen />;
// };

const listIcon = (focused: boolean) => {
  return (
    // eslint-disable-next-line global-require
    <Image
      source={
        focused
          // eslint-disable-next-line global-require
          ? require('../../../assets/images/laffleListOn.png')
          // eslint-disable-next-line global-require
          : require('../../../assets/images/laffleListOff.png')
      }
      resizeMode="contain"
    />
  );
};

const todayLaffleIcon = (focused: boolean) => {
  return (
    // eslint-disable-next-line global-require
    <Image
      source={
        focused
          // eslint-disable-next-line global-require
          ? require('../../../assets/images/todayLaffleOn.png')
          // eslint-disable-next-line global-require
          : require('../../../assets/images/todayLaffleOff.png')
      }
      resizeMode="contain"
    />
  );
};

const mypageIcon = (focused: boolean) => {
  return (
    // eslint-disable-next-line global-require
    <Image
      source={
        focused
          // eslint-disable-next-line global-require
          ? require('../../../assets/images/mypageOn.png')
          // eslint-disable-next-line global-require
          : require('../../../assets/images/mypageOff.png')
      }
      resizeMode="contain"
    />
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="라플리스트"
        component={ListScreen}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {listIcon(focused)}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="오늘라플"
        component={TodayPlanScreen}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {todayLaffleIcon(focused)}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{
          headerShown: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Image
              style={{width: 24, height: 24, marginRight: 25}}
              // eslint-disable-next-line global-require
              source={require('../../../assets/images/setting.png')}
            />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              {mypageIcon(focused)}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
