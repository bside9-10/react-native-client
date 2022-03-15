import React from 'react';
import {StyleSheet, View, TextInput, ImageBackground} from 'react-native';
import {Dimensions} from 'react-native';
//import PropTypes from 'prop-types';

const UserInput: React.FunctionComponent<UserInputPropTypes> = props => {
  return (
    <View style={styles.inputWrapper}>
      <ImageBackground source={props.source} style={styles.inlineImg} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        //returnKeyType={props.returnKeyType}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

interface UserInputPropTypes {
  source: number;
  placeholder: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: string;
  returnKeyType?: string;
}

const DEVICE_WIDTH = Dimensions.get('window').width;
//const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});

export default UserInput;
