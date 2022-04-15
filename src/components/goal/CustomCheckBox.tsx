import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity , SafeAreaView, View, Text, StyleSheet, Image, useWindowDimensions, Dimensions } from 'react-native'
import RNBounceable from "@freakycoder/react-native-bounceable";
import AutoHeightImage from "react-native-auto-height-image";
import checkBoxMenuImg from '../../../assets/images/checkBoxMenu.png'
import SimpleTouchableOpacity from './SimpleTouchableOpacity';
import ModalView from '../ModalView';

interface PropTypes { 
  toDos: string;
  date: string;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomCheckbox = (props : PropTypes) => { 
  // const bouncyCheckboxRef: BouncyCheckbox | null = null;
  // const [checkboxState, setCheckboxState] = React.useState(false);
  // const { width } = useWindowDimensions(); 
  const [modalVisible, setModalVisible] = useState(false);
  
  const { toDos, date } = props;

  const onPress = () => {
    console.log("press the menu button");
    setModalVisible(true);
  }

  const onClose = () => { 
    setModalVisible(false);
  }

  return (
    <SafeAreaView> 
      {/* 카테고리 */}
      <SimpleTouchableOpacity text="운동" />
        {/* 체크박스 프레임 */}
        <TouchableOpacity activeOpacity={1}
          // onPress={onPress}
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
            {/* 체크박스 */}
        <BouncyCheckbox
              style= {{paddingTop: 25}}
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text={toDos}
              iconStyle={{ borderColor: "red" }}
              onPress={(isChecked: boolean) => { console.log("ss") }}
            />
            <Text style={{
                color: '#000000',
                paddingLeft: 40
            }}>{date}</Text>

            {/* 메뉴 버튼 */}
            <ModalView text="다음 날로 미루기 !" contents="d"/>
            {/* <TouchableOpacity onPress={onPress}>
              <AutoHeightImage source={checkBoxMenuImg} width={28} style={{position: 'absolute', right: -150, top:-20}} />
            </TouchableOpacity> */}
      </TouchableOpacity>
     
      </SafeAreaView>
  );
}

export default CustomCheckbox;

const styles = StyleSheet.create({
  bottomText : {
    
  },
  viewStyle: {
    
  }
});