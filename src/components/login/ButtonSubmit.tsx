import React, {useState} from 'react';
import {Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Image,
  View,
} from 'react-native';

import spinner from '../../../assets/images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

const ButtonSubmit = () => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [buttonAnimated, setButtonAnimated] = useState(new Animated.Value(0));
  const [growAnimated, setGrowAnimated] = useState(new Animated.Value(0));

  // const onPress = () => {
  //   if (loadingStatus) {
  //     return;
  //   }

  //   setLoadingStatus(true);

  //   Animated.timing(buttonAnimated, {
  //     toValue: 1,
  //     duration: 200,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start;

  //   setTimeout(() => {
  //     onGrow();
  //   }, 2000);

  //   setTimeout(() => {
  //     Actions.secondScreen();
  //     setLoadingStatus(false);
  //     setButtonAnimated(new Animated.Value(0));
  //     setGrowAnimated(new Animated.Value(0));
  //   }, 2300);
  // };

  // const onGrow = () => {
  //   Animated.timing(growAnimated, {
  //     toValue: 1,
  //     duration: 200,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start();
  // };

  const changeWidth = buttonAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
  });
  const changeScale = growAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, MARGIN],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ width: changeWidth }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log()}
          activeOpacity={1}>
          {loadingStatus ? (
            <Image source={spinner} style={styles.image} />
          ) : (
            <Text style={styles.text}>LOGIN</Text>
          )}
        </TouchableOpacity>
        <Animated.View
          style={[styles.circle, { transform: [{ scale: changeScale }] }]}
        />
      </Animated.View>
    </View>
  );
}

export default ButtonSubmit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});