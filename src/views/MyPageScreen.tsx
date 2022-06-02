import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import fetcher from '../utils/fetcher';
import getMyPageInfo from '../helper/api/myPageAPI';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyPageScreen = () => {
  // 로그인한 사용자 아이디
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
          {myInfo?.response.successGoalDetailCount}개의 계획을 실천했어요
        </Text>
        <TouchableOpacity style={styles.box}>
          <Text>실천가능시간 {myInfo?.response.totalAvailableTime}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  accountView: {
    // fontFamily: 'LeeSeoyun'
    height: windowHeight - windowHeight / 4.72,
    backgroundColor: '#5A50CF',
    paddingTop: 80,
  },
  textName: {
    // fontFamily: 'LeeSeoyun',
    fontSize: 24,
    color: 'white',
    marginLeft: 24,
  },
  textEmail: {
    // fontFamily: 'LeeSeoyun',
    fontSize: 18,
    color: 'white',
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
    margin: 24,
    fontSize: 24,
    fontWeight: '500',
  },
});
