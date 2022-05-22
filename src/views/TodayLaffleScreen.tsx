import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useQuery} from 'react-query';
import CustomCheckbox from '../components/goal/CustomCheckBox';
import getTodayLaffle from '../helper/api/TodayLaffleAPI';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TodayLaffleScreen = () => {
  // console.log(windowHeight);

  const resultQuery = useQuery('getTodayLaffle', getTodayLaffle);

  const {data} = resultQuery;
  return (
    <SafeAreaView>
      <View>
        <ScrollView style={styles.scrollView}>
          {data?.data.response.map((v, i) => {
            return <CustomCheckbox key={i} categoryInfo={v} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TodayLaffleScreen;

const styles = StyleSheet.create({
  scrollView: {
    top: windowHeight / 4.72,
    height: windowHeight,
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    // marginHorizontal: 10
  },
});
