import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

import logoImg from '../../../assets/images/logo.png';

const Logo = () => {
    return (
      <View style={styles.container}>
        <ImageBackground source={logoImg} style={styles.image} />
        <Text style={styles.text}>REACT NATIVE</Text>
      </View>
    );
}

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

export default Logo;