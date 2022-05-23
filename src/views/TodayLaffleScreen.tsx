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
import getTodayLaffle from '../helper/api/TodayLaffleAPI';
import {
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
  CalendarProps,
} from 'react-native-calendars';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const INITIAL_DATE = '2022-04-15';

const TodayLaffleScreen = () => {
  // console.log(windowHeight);

  const resultQuery = useQuery('getTodayLaffle', getTodayLaffle);

  const [selected, setSelected] = useState(INITIAL_DATE);
  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    setSelected(day.dateString);
  }, []);
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red',
      },
    };
  }, [selected]);

  const {data} = resultQuery;
  return (
    <SafeAreaView>
      <View>
        {/* <View style={styles.calendarView}> */}
        {/* <Fragment> */}
        {/* <Text>Calendar with selectable date</Text> */}
        <WeekCalendar
          // testID={testIDs.calendars.FIRST}
          enableSwipeMonths
          current={INITIAL_DATE}
          onDayPress={onDayPress}
          markedDates={marked}
        />
        {/* </Fragment> */}
        {/* </View> */}
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
    top: 20,
    height: windowHeight,
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    // marginHorizontal: 10
  },
  calendarView: {
    top: 60,
    flex: 1,
  },
});
