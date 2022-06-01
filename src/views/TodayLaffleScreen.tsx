import React, {Fragment, useCallback, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {useQuery} from 'react-query';
import CustomCheckbox from '../components/goal/CustomCheckBox';
import {Calendar, CalendarProps} from 'react-native-calendars';
import fetcher from '../utils/fetcher';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const today = new Date().toISOString().split('T')[0];

const TodayLaffleScreen = () => {
  const [selected, setSelected] = useState(today);

  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const {data: todayLaffle, isLoading} = useQuery(
    ['getTodayLaffle', selected],
    () =>
      fetcher({
        queryKey: `/api/v1/goals/2/today?date=${selected.replace(/-/gi, '')}`,
      }),
  );

  const marked = useMemo(() => {
    return {
      [selected]: {
        marked: true,
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red',
      },
    };
  }, [selected]);
  // const marked = {
  //   '2022-02-26': {selected: true},
  //   '2022-02-27': {marked: true},
  //   '2022-02-28': {marked: true},
  // };
  // const {data} = resultQuery;
  // console.log('todayLaffle', todayLaffle);
  return (
    <SafeAreaView>
      <View>
        <Calendar
          enableSwipeMonths
          current={today}
          onDayPress={onDayPress}
          markedDates={marked}
        />
        <ScrollView style={styles.scrollView}>
          {todayLaffle?.response.map((v, i) => {
            console.log(v);
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
    top: 20,
    height: windowHeight,
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    // marginHorizontal: 10
  },
});
