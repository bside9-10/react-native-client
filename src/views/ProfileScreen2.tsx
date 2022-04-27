import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen2 = () => { 
    const route = useRoute();

    return(
        <View style={styles.container}>
            <Text style={{fontFamily: 'LeeSeoyun'}}>{ JSON.stringify(route.params) }</Text>
        </View>
    );
}

export default ProfileScreen2;

const styles = StyleSheet.create({
    container: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 80,
      height: 80,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      marginTop: 20,
    },
  });