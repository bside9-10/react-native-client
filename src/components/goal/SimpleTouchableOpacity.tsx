import PropTypes from 'prop-types';
import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

interface PropTypes {
  // eslint-disable-next-line react/require-default-props
  onPress?: () => void;
  category: string;
}

const SimpleTouchableOpacity = (props: PropTypes) => {
  const {onPress, category} = props;

  const StyledTouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 12px;
    padding-right: 12px;
    align-items: center;
    /*justify-content: center; */
  `;
  return (
    <SafeAreaView>
      <StyledTouchableOpacity onPress={onPress}>
        <Image
          source={require('../../../assets/images/todayLaffleCategory.png')}
          resizeMode="contain"
        />
        <Text style={{marginLeft: 5}}> {category} </Text>
      </StyledTouchableOpacity>
    </SafeAreaView>
  );
};

export default SimpleTouchableOpacity;
