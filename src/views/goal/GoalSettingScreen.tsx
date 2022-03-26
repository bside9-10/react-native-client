import React, { useState } from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import { useQuery} from 'react-query';
// import { QueryClient, QueryClientProvider } from 'react-query';
import SimpleTouchableOpacity from '../../components/goal/SimpleTouchableOpacity';
import ProgressBar from '../../components/goal/ProgressBar'
// import { IRecommendWords } from '../../helper/types';
import getRecommendWordsApi from '../../helper/api/recommendWordsAPI';

// const SampleAPI = () => { 
//    const result = useQuery('title', getApi);
//   // const result2 = useQuery('title', getMethod<IRecommendWords>(IRecommendWords.getData(''), '/url'));
//   const { data, error, isLoading } = result;

//   if (isLoading) return <Text>로딩 중..</Text>
//   if (error) return <Text>오류발생</Text>
  
//   console.log(data);

//   return (
//    );
// }


const GoalSettingScreen = () => {
  const [selectedText1, setSelectedText1] = useState<string>('');

  const resultQuery = useQuery('recommendWords', getRecommendWordsApi);

  if (!resultQuery.data) { 
    return (
      <View style={styles.title1}>
        <Text style={styles.text}> 데이터가 없습니다. </Text>
      </View>
    );

  }

  // const [selectedText2, setSelectedText2] = useState<string>('');
  // const [selectedText3, setSelectedText3] = useState<string>('');

  return (
    <View style={styles.container}>
      <ProgressBar />
      <View style={styles.title1}>
        <Text style={styles.text}>목표 우선순위 정하기</Text>
        <Text style={styles.text2}>(최대 3개)</Text>
      </View>

      {/* 선택되는 키워드가 여기에 떠야 함 */}
      <View style={styles.box}>
        <Text>{selectedText1}</Text>
      </View>
      <View style={styles.box}>{/* <Text>{selectedText2}</Text> */}</View>
      <View style={styles.box}>{/* <Text>{selectedText3}</Text> */}</View>

      <Text style={styles.text3}>선택순서대로 바꿀 수 있어요</Text>

      <View style={styles.test}>
        {resultQuery.data.response.map(element => {
          console.log(element);
          return (
            <SimpleTouchableOpacity
              text={element.goalTitle}
              onPress={() => {
                setSelectedText1(element.goalTitle);
              }}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          backgroundColor: 'blue',
          marginTop: 70,
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, color: 'white', alignItems: 'center'}}>
          {' '}
          다 골랐어요!{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default GoalSettingScreen;


const styles = StyleSheet.create({
  container: {
    width: 200,
    paddingTop: 100,
    paddingLeft: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  progressbar: {
    width: 50,
    height: 10,
    backgroundColor: 'pink',
  },
  title1: {
    width: 500,
    paddingStart: 10,
    paddingTop: 10,
  },
  box: {
    width: 250,
    paddingLeft: 80,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'blue',
    padding: 20,
    margin: 10,
  },
  text: {
    paddingTop: 30,
    fontSize: 30,
    color: 'blue',
  },
  text2: {
    fontSize: 20,
    color: 'blue',
    paddingLeft: 70,
    paddingBottom: 50,
  },
  text3: {
    fontSize: 15,
    color: 'blue',
    paddingLeft: 50,
    paddingBottom: 50,
    width: 500,
  },
  test: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: 300,
  },
});

// const data = [
//   {
//     title: '👻 책읽기',
//   },
//   {
//     title: '👻 다이어트',
//   },
//   {
//     title: '👻 공부',
//   },
//   {
//     title: '👻 독서',
//   },
//   {
//     title: '👻 아직',
//   },
// ];

