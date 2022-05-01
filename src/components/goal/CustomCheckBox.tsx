import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity , SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native'
import SimpleTouchableOpacity from './SimpleTouchableOpacity';
import ModalView from '../ModalView';

interface PropTypes { 
  toDos: string;
  date: string;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomCheckbox = (props : PropTypes) => { 
  
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
      {/* <SimpleTouchableOpacity text="운동" /> */}
        {/* 체크박스 프레임 */}
        <TouchableOpacity activeOpacity={1}
          style={styles.checkboxFrame}>
            {/* 체크박스 */}
            <BouncyCheckbox
              style= {styles.checkbox}
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text={toDos}
              iconStyle={{ borderColor: "red" }}
              onPress={(isChecked: boolean) => { console.log("ss") }}
            />
            <Text style={styles.text}>{date}</Text>
            {/* 메뉴 버튼 */}
            <ModalView text="다음 날로 미루기 !" contents="d"/>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkboxFrame: {
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
  },
  checkbox: {
    paddingTop: 25
  },
  text: {
    color: '#000000',
    paddingLeft: 40
  }
});