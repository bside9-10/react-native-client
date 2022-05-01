import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Dimensions, Text } from 'react-native';
import { useQuery } from 'react-query';
import CustomCheckbox from '../components/goal/CustomCheckBox';
import SimpleTouchableOpacity from '../components/goal/SimpleTouchableOpacity';
import getMyToDos from '../helper/api/toDosAPI';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TodayLaffleScreen = () => { 
    // console.log(windowHeight);
  const resultQuery = useQuery('toDos', getMyToDos);
  // const entries = Object.entries(object);
    
    if (!resultQuery.data) {
      return (
        <View>
          <Text> 데이터가 없습니다. </Text>
        </View>
      );
    }
  // const temp = (text : string) => { 
  //   return (<SimpleTouchableOpacity text={text} />);
  // }
  
    return (
        <SafeAreaView>
          <View>                
          <ScrollView style={styles.scrollView}>
           
            {
              // entries.forEach(([key, value]) => { });
              resultQuery.data.response.map(element => 
                // return (<SimpleTouchableOpacity text="운동" />);
                      
                      element.goalDetails.map(item => {
                        return (
                          <SafeAreaView>
                            <SimpleTouchableOpacity text={element.category} />
                            <CustomCheckbox toDos={item.title} date={item.startDate} />
                          </SafeAreaView>
                        );
                      })
              )
            }
              {/* <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  */}
            </ScrollView>
          </View>
        </SafeAreaView>
    );
};

export default TodayLaffleScreen;

const styles = StyleSheet.create({
  scrollView: {
    top: (windowHeight / 4.72) ,
    height: (windowHeight),
    backgroundColor: "white",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    // marginHorizontal: 10
  }
})