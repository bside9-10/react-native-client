import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

interface PropTypes {
  onPress: () => void;
  text: string;
}

const SimpleTouchableOpacity = (props: PropTypes) => {
  //const [text, setText] = useState<string>('');
  const {onPress, text} = props; //구조분해 할당

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 33,
          borderColor: 'blue',
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
