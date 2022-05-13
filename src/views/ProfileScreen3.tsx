/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import nextButtonOff from '../../assets/images/nextButtonOff.png'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
interface UserInputPropTypes {
  source: number;
  placeholder: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: string;
  returnKeyType?: string;
}

const ProfileScreen3 = (props: UserInputPropTypes) => {
  const { source, placeholder, secureTextEntry, autoCorrect } = props;
  const [weekday, setWeekday] = useState(''); 
  const [weekdEndDay, setWeekdEndDay] = useState('');
  
  const route = useRoute();
  
  const onChangedWeek = (text: string) => {
    setWeekday(text);
  }
  const onChangedWeekend = (text: string) => {
    setWeekdEndDay(text);
  }

  const onPressNextButton = () => {
    setWeekdEndDay("fdsf");
    // 백으로 보내기
   }

    return(
        <View style={styles.container}>
        {/* <Text style={{fontFamily: 'LeeSeoyun'}}>{ JSON.stringify(route.params) }</Text> */}
        <View style={styles.descriptionTextContainerTop}>
          <Text style={styles.descriptionText}> 일일 실천 가능 시간 찾기 </Text>
          <Text style={styles.descriptionText}> 쓸 수 있는 시간을 알면 </Text>
          <Text style={styles.descriptionText}> 달성 할 가능성이 더 높아져요. </Text>
        </View>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.inputLabel}> 평일 하루 </Text>
            <TextInput
              style={styles.input}
              // placeholder={placeholder}
              // secureTextEntry={secureTextEntry}
              // autoCorrect={autoCorrect}
              keyboardType='number-pad'
              onChangeText={(text : string) => onChangedWeek(text)}
              value={weekday}
              maxLength={2}
              placeholderTextColor="gray"
              underlineColorAndroid="transparent"
            />
            <Text style={styles.inputLabel}>시간</Text>
          </View>
        
          <View style={{flexDirection:"row"}}>
            <Text style={styles.inputLabel}> 주말 하루 </Text>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
            //  secureTextEntry={secureTextEntry}
             // autoCorrect={autoCorrect}
              keyboardType='numeric'
              onChangeText={(text : string)=> onChangedWeekend(text)}
              value={weekdEndDay}
              maxLength={2}
              placeholderTextColor="gray"
              underlineColorAndroid="transparent"
            />
            <Text style={styles.inputLabel}>시간</Text>
          </View>
          <View style={styles.descriptionTextContainerBottom}>
              <Text style={styles.descriptionText}> 실천가능 시간은 언제든 </Text>
              <Text style={styles.descriptionText}>마이페이지에서 수정할 수 있어요</Text>
          </View>
          <TouchableOpacity onPress={onPressNextButton}>
            <Image source={nextButtonOff} style={styles.nextButton}/>
                {/* <AutoHeightImage source={nextButtonOff} width={28} style={{right: -270, top:-105}} /> */}
          </TouchableOpacity>
        </View>
    );
}

export default ProfileScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  inputLabel: {
    // justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 20,
  },
  input: {
    // justifyContent: 'flex-end',
    width: DEVICE_WIDTH - 300,
    height: 30,
    // marginHorizontal: 20,
    // paddingLeft: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    // borderRadius: 20,
    color: 'black',
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
  descriptionTextContainerTop: {
    alignItems: 'center',
    top: ( DEVICE_HEIGHT / 10) * -1 ,
    
  },
  descriptionTextContainerBottom: {
    alignItems: 'center',
    top: ( DEVICE_HEIGHT / 10 )  ,
  },
  descriptionText: {
    color: 'gray',
  },
  nextButton: {
   top: DEVICE_HEIGHT / 4,
  }
});
