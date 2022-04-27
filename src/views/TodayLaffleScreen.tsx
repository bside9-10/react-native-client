import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import CustomCheckbox from '../components/goal/CustomCheckBox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TodayLaffleScreen = () => { 
    // console.log(windowHeight);
    
    return (
        <SafeAreaView>
          <View>                
            <ScrollView style={styles.scrollView}>
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
              <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" /> 
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