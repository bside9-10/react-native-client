import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyPageScreen = () => { 
    return (
        <SafeAreaView>
            <View style={styles.accountView}>
                <Text style={styles.text}> 이주영 </Text>
                <Text style={styles.text}> 애플 로그인 계정 </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <Text>라플과 함께한 100일 동안 50개의 계획을 실천했어요</Text>
                <TouchableOpacity style={styles.box}>
                    <Text>실천</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );
}

export default MyPageScreen;

const styles = StyleSheet.create({
    accountView: {
        // fontFamily: 'LeeSeoyun'
         height: windowHeight - (windowHeight / 4.72),
        backgroundColor: '#5A50CF',
         paddingTop : 80
    },
    text: {
        fontFamily: 'LeeSeoyun',
        fontSize: 16,
        color: 'white',
    },
    scrollView: {
      position: 'absolute',
      top: (windowHeight / 4.72) ,
      height: (windowHeight),
      width: (windowWidth),
      backgroundColor: 'white',
    //  ß
      // marginHorizontal: 10
    },
    box: {
        backgroundColor: '#F4F4F4',
        // height: (windowHeight)/2,
    }
  })