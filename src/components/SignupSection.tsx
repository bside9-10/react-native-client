import React from 'react';
//import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';

const SignupSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account</Text>
      <Text style={styles.text}>Forgot Password?</Text>
    </View>
  );
};

const DEVICE_WIDTH = Dimensions.get('window').width;
//const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -40,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default SignupSection;
