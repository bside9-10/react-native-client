import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';
import fetcher from '../utils/fetcher';
import getMyPageInfo from '../helper/api/myPageAPI';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyPageScreen = () => {
  const StyledTouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 12px;
    padding-right: 12px;
    align-items: center;
    background-color: '#F4F4F4';
    /*justify-content: center; */
  `;

  const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    margin: 20px;
    background-color: ${({theme}) => theme.colors.grey100};
    border-radius: 20px;
  `;

  const RoundView = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.grey100};
    border-radius: 10px;
  `;

  // TODO: 로그인한 사용자 아이디
  const userId = 2;
  const {data: myInfo} = useQuery(['getMyPageInfo', userId], () =>
    fetcher({
      queryKey: `/api/v1/users/${userId}/me`,
    }),
  );

  console.log(myInfo);

  return (
    <SafeAreaView>
      <View style={styles.accountView}>
        <Text style={styles.textName}> {myInfo?.response.name} </Text>
        <Text style={styles.textEmail}> {myInfo?.response.email} </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.mainText}>
          라플과 함께한 {myInfo?.response.joinPeriod}일 동안{' '}
        </Text>
        <Text style={styles.mainText}>
          {myInfo?.response.successGoalDetailCount}개의 계획을 실천했어요
        </Text>
        <StyledView>
          <StyledTouchableOpacity>
            <Text style={styles.time}>
              실천가능시간 {myInfo?.response.totalAvailableTime}시간
            </Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity>
            <Text style={styles.time}>
              만든라플 {myInfo?.response.goalCount}개
            </Text>
          </StyledTouchableOpacity>
        </StyledView>
        <View>
          <Text style={styles.goalRate}>달성율</Text>
          <View style={{marginTop: 24, marginLeft: 24, marginRight: 24}}>
            <RoundView>
              <Image
                source={require('../../assets/images/character1.png')}
                resizeMode="contain"
                style={{margin: 20}}
              />
              <View>
                <Text style={{marginTop: 17}}>레이블 1</Text>
                <Image
                  source={require('../../assets/images/progressbar2.png')}
                  resizeMode="contain"
                  style={{marginTop: 9}}
                />
              </View>
            </RoundView>
          </View>
          <View style={{marginTop: 6, marginLeft: 24, marginRight: 24}}>
            <RoundView>
              <Image
                source={require('../../assets/images/character2.png')}
                resizeMode="contain"
                style={{margin: 20}}
              />
              <View>
                <Text style={{marginTop: 17}}>레이블 2</Text>
                <Image
                  source={require('../../assets/images/progressbar1.png')}
                  resizeMode="contain"
                  style={{marginTop: 9}}
                />
              </View>
            </RoundView>
          </View>
          <View style={{marginTop: 6, marginLeft: 24, marginRight: 24}}>
            <RoundView>
              <Image
                source={require('../../assets/images/character3.png')}
                resizeMode="contain"
                style={{margin: 20}}
              />
              <View>
                <Text style={{marginTop: 17}}>레이블 2</Text>
                <Image
                  source={require('../../assets/images/progressbar3.png')}
                  resizeMode="contain"
                  style={{marginTop: 9}}
                />
              </View>
            </RoundView>
          </View>
          <View style={{marginTop: 6, marginLeft: 24, marginRight: 24}}>
            <RoundView>
              <Image
                source={require('../../assets/images/character4.png')}
                resizeMode="contain"
                style={{margin: 20}}
              />
              <View>
                <Text style={{marginTop: 17}}>레이블 2</Text>
                <Image
                  source={require('../../assets/images/progressbar4.png')}
                  resizeMode="contain"
                  style={{marginTop: 9}}
                />
              </View>
            </RoundView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  accountView: {
    // fontFamily: 'LeeSeoyun'
    height: 200,
    backgroundColor: '#5A50CF',
    paddingTop: 50,
  },
  textName: {
    fontFamily: 'LeeSeoyun',
    fontSize: 24,
    color: 'white',
    marginLeft: 24,
  },
  textEmail: {
    // fontFamily: 'LeeSeoyun',
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    marginLeft: 24,
  },
  scrollView: {
    position: 'absolute',
    top: windowHeight / 4.72,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
    //  ß
    // marginHorizontal: 10
  },
  box: {
    backgroundColor: '#F4F4F4',
    // height: (windowHeight)/2,
  },
  mainText: {
    marginLeft: 24,
    marginTop: 18,
    fontSize: 20,
    fontWeight: '800',
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  goalRate: {
    marginLeft: 24,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
});
