import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';
import {theme} from '../../theme';
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

const {
  colors: {grey300, grey400, grey600},
} = theme;

const CustomCheckbox = (props: PropTypes) => {
  const [modalVisible, setModalVisible] = useState(false);

  const CategoryView = styled.View`
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.colors.grey100};
    border-radius: 20px;
    padding-bottom: 20px;
  `;

  const StyledCheckboxFrame = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.white};
    width: 90%;
    margin: auto;
    height: 70;
    border-color: white;
    padding-left: 20;
    border-radius: 13;
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
      {/* 카테고리명 */}
      <SimpleTouchableOpacity category={category} />

      {goalDetails.map((v, i) => {
        return (
          <StyledCheckboxFrame key={i} activeOpacity={1}>
            <BouncyCheckbox
              style={styles.checkbox}
              fillColor={grey600}
              text={v.title}
              isChecked={true}
              textStyle={{color: grey600}}
              iconStyle={{
                width: 17,
                height: 17,
                borderRadius: 4,
                borderColor: grey600,
              }}
              onPress={(isChecked: boolean) => {
                console.log('ss');
              }}
            />
            <Text style={styles.text}>
              {v.goalDateStatusDesc} / {v.startTime}
            </Text>

            {/* <ModalView text="다음 날로 미루기 !" contents="d" /> */}
          </StyledCheckboxFrame>
        );
      })}
    </CategoryView>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkbox: {
    paddingTop: 25,
  },
  text: {
    color: grey400,
    paddingLeft: 40,
  },
});
