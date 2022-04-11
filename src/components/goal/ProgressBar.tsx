import React from "react";
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const styles = StyleSheet.create({
    progressbar: {
        width: 50,
        height: 10,
        backgroundColor: 'pink',
    },
});

const ProgressBar = () => {
    return (
        <View style={styles.progressbar}>
            <Progress.Bar progress={0.5} width={280} height={30} />
        </View>
    )
}

export default ProgressBar;
