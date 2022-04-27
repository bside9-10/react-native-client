import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => { 
    const route = useRoute();

    return(
        <View>
            <Text>{ JSON.stringify(route.params) }</Text>
        </View>
    );
}

export default ProfileScreen;