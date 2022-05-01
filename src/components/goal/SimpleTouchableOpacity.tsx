import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

interface PropTypes {
  // eslint-disable-next-line react/require-default-props
  onPress ?: () => void;
  text: string;
}

const SimpleTouchableOpacity = (props: PropTypes) => {

  const { onPress, text } = props;

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor : '#C4C4C4',
          width:50,
          height: 33,
          borderColor: 'black',
          marginTop: 10,
          marginLeft:30,
          borderRadius: 18,
          borderWidth: 1.3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text> {text} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SimpleTouchableOpacity;
