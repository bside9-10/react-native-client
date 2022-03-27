import React from 'react';
import {View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from './navigator/RootStack';

const Test = () => {
    const navigation = useNavigation<RootStackNavigationProp>();
    
    return (
        <View>
            {/* <Text>{JSON.stringify(resultQuery.data.response)}</Text> */}
            <Button title="목표설정 파일로 이동" onPress={() => navigation.navigate('GoalScreen') } />
        </View>
    );
};

export default Test;