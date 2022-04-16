import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { SwipeablePanel } from 'rn-swipeable-panel';
import CustomCheckbox from '../components/goal/CustomCheckBox';

const TodayLaffleScreen = () => { 
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
       
        smallPanelHeight: 11,
        onlySmall: true,
        scrollViewProps: {},
        closeOnTouchOutside : true
      });
      const [isPanelActive, setIsPanelActive] = useState(true);
      
    
      const openPanel = () => {
        setIsPanelActive(true);
      };
    
      const closePanel = () => {
        setIsPanelActive(false);
      };
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Button title="눌러바" onPress={openPanel} />
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                {/* marginHorizontal: 10, */}
                <ScrollView style={{top:100, backgroundColor : "white", }}>
                {/* <SwipeablePanel {...panelProps} isActive={isPanelActive}> */}
                  <CustomCheckbox toDos="오늘 뭐하지" date="매주금요일" />  
                {/* </SwipeablePanel> */}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default TodayLaffleScreen;

const styles = StyleSheet.create({
    container: {},
    welcome: {},
    instructions: {}
})