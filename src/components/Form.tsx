import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import UserInput from './UserInput';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import {useState} from 'react';

const Form = () => {
  const [showPass, setShowPass] = useState(true);
  const [press, setPress] = useState(false);

  const showPassF = () => {
    press === false ? setShowPass(cur => cur) : setShowPass(cur => !cur);
    press === false ? setPress(cur => !cur) : setPress(cur => cur);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <UserInput
        source={usernameImg}
        placeholder="Username"
        autoCapitalize={'none'}
        returnKeyType={'done'}
        autoCorrect={false}
      />
      <UserInput
        source={passwordImg}
        secureTextEntry={showPass}
        placeholder="Password"
        returnKeyType={'done'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnEye}
        onPress={showPassF}>
        <ImageBackground source={eyeImg} style={styles.iconEye} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});

export default Form;
