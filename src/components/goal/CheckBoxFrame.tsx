import React from 'react';
import { SafeAreaView, TouchableOpacity, Dimensions, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import CustomCheckbox from './CustomCheckBox';


interface PropTypes {
  // eslint-disable-next-line react/require-default-props
  onPress ?: () => void;
  text: string;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CheckBoxFrame = (props: PropTypes) => {
  
  const {onPress, text} = props;

  return (
    <SafeAreaView>
      <TouchableOpacity activeOpacity={1}
        onPress={onPress}
        style={{
          backgroundColor : '#FFFFFF',
          width: windowWidth-65,
          height: 70,
          borderColor: 'black',
          marginTop: 10,
          marginLeft: 30,
          paddingLeft : 20,
          borderRadius: 18,
          borderWidth: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        
        {/* <CustomCheckbox toDos='매주 헬스가기' date='금/월 오후 9시' /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckBoxFrame;