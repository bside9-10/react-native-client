import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';
import ModalView from '../ModalView';
import SimpleTouchableOpacity from './SimpleTouchableOpacity';

interface PropTypes {
  categoryInfo: {
    category: string;
    goalId: number;
    goalDetails: [
      {
        goalDetailId: number;
        title: string;
        startTime: string;
        goalDateStatusDesc: string;
      },
    ];
  };
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomCheckbox = (props: PropTypes) => {
  const [modalVisible, setModalVisible] = useState(false);

  const CategoryView = styled.View`
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.colors.grey100};
    border-radius: 20px;
  `;
  const {
    categoryInfo,
    categoryInfo: {category, goalDetails},
  } = props;

  const onPress = () => {
    console.log('press the menu button');
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
  };

  return (
    <CategoryView>
      <SimpleTouchableOpacity category={category} />
      {goalDetails.map((v, i) => {
        return (
          <TouchableOpacity
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            activeOpacity={1}
            style={styles.checkboxFrame}>
            <BouncyCheckbox
              style={styles.checkbox}
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text={v.title}
              iconStyle={{borderColor: 'red'}}
              onPress={(isChecked: boolean) => {
                console.log('ss');
              }}
            />
            <Text style={styles.text}>
              {v.goalDateStatusDesc} / {v.startTime}
            </Text>
            <ModalView text="다음 날로 미루기 !" contents="d" />
          </TouchableOpacity>
        );
      })}
    </CategoryView>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkboxFrame: {
    backgroundColor: '#FFFFFF',
    width: windowWidth - 65,
    height: 70,
    borderColor: 'black',
    marginTop: 10,
    marginLeft: 30,
    paddingLeft: 20,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  checkbox: {
    paddingTop: 25,
  },
  text: {
    color: '#000000',
    paddingLeft: 40,
  },
});
