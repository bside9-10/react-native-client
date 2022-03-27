import React from "react";
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from './navigator/RootStack';

const HomeScreen = () => { 
    const navigation = useNavigation<RootStackNavigationProp>();

    return (
        <View>
            <Button title="눌러주세요" onPress={ () => navigation.navigate('GoalScreen')}/> {/* route설정을 해주어야 할듯.. */}
        </View>
    );
}

export default HomeScreen;