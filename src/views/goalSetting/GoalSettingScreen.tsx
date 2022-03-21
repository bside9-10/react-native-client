import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import * as Progress from 'react-native-progress';
import { StyleSheet } from "react-native";
import SimpleTouchableOpacity from '../../components/goal/SimpleTouchableOpacity';
import { Alert } from "react-native";
import { useState } from 'react';
import PropTypes from 'prop-types';

//Felx layout으로 추후에 바꿔도 됨
const styles = StyleSheet.create({
    container: {
        width:200,
        paddingTop: 100,
        paddingLeft:50,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    progressbar: {
        width: 50,
        height: 10,
        backgroundColor : 'pink'
    },
    title1: {
        width: 500,
        paddingStart: 10,
        paddingTop:10
    },
    box: {
        width:250,
        paddingLeft: 80,
        borderWidth: 3,
        borderRadius:5,
        borderColor: 'blue',
        padding: 20,
        margin: 10,
    },
    text: {
        paddingTop:30,
        fontSize: 30,
        color: 'blue',
    },
    text2: {
        fontSize: 20,
        color: 'blue',
        paddingLeft: 70,
        paddingBottom:50
    },
    text3: {
        fontSize: 15,
        color: 'blue',
        paddingLeft: 50,
        paddingBottom: 50,
        width:500
    },
    test: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: 300,
    }
});

//1. 목표우선순위 정하기 라는 과정이 총 몇단계인지 알것 -> 진행되는 과정에따라 프로그래스가 차올라야 함
//2. 밑에 뜨는 추천 단어는 back에서 최근 단어를 받아서 뿌리는 방식으로 진행해야 할듯
    //얘네는 button형
//3. 선택되면 테두리박스에 추가가 되도록 해야함
//4. 1개 이상을 선택하면 제일 하단에 다골랐어요 버튼이 떠야함
const data = {
    item1: {
        text: '👻 책읽기'
    },
    item2: {
        text: '👻 다이어트'
    }
}

export default function GoalSettingScreen() { 
    const [selectedText1, setSelectedText1] = useState<string>('');
    const [selectedText2, setSelectedText2] = useState<string>('');
    const [selectedText3, setSelectedText3] = useState<string>('');

    //해당 프로그레스바는 목표우선순위의 진행률을 나타내는듯.
    return (
        <View style={styles.container}>
            <View style={styles.progressbar}><Progress.Bar progress={0.5} width={280} height={30} /></View>
            <View style={styles.title1}>
                <Text style={styles.text}>
                    목표 우선순위 정하기
                </Text>
                <Text style={styles.text2}>
                    (최대 3개)
                </Text>
            </View>
            
            {/* 선택되는 키워드가 여기에 떠야 함*/}
            <View style={styles.box}>
                <Text>{selectedText1}</Text>
            </View>
            <View style={styles.box}>
                <Text>{selectedText2}</Text>
            </View>
            <View style={styles.box}>
                <Text>{selectedText3}</Text>
            </View>
            
            <Text style={styles.text3}>
                    선택순서대로 바꿀 수 있어요
            </Text>

            {/* 추천되는 단어갯수만큼 map */}
            <View style={styles.test}>
                
                <SimpleTouchableOpacity text={data.item1.text} onPress={() => {setSelectedText1(data.item1.text)}} />
                <SimpleTouchableOpacity text={data.item2.text} onPress={() => { }} />
                <SimpleTouchableOpacity text={'👻 공부'} onPress={() => { }} />
                <SimpleTouchableOpacity text={'👻 독서'} onPress={() => { }} />
                <SimpleTouchableOpacity text={'👻 아직'} onPress={() => { }} />
            </View>
            

            <TouchableOpacity style={{height: 40,backgroundColor: 'blue',marginTop:70,width:300,justifyContent: "center",alignItems: "center"}}>
                <Text style={{fontSize:25, color:'white',alignItems:'center'}}> 다 골랐어요! </Text>
            </TouchableOpacity>
        </View>
    );
}