import PropTypes from 'prop-types';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

interface PropTypes {
  // eslint-disable-next-line react/require-default-props
  onPress?: () => void;
  text: string;
}

const SimpleTouchableOpacity = (props: PropTypes) => {
  const {onPress, text} = props;

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#C4C4C4',
          width: 300,
          height: 33,
          borderColor: 'black',
          marginTop: 10,
          marginLeft: 30,
          borderRadius: 12,
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
