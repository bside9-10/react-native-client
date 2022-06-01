import React, {useCallback, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useQuery} from 'react-query';
import CustomCheckbox from '../components/goal/CustomCheckBox';
import {Calendar, CalendarProps} from 'react-native-calendars';
import fetcher from '../utils/fetcher';
import styled from 'styled-components/native';
import {theme} from '../theme';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['ko'] = {
  monthNames: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],

  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const today = new Date().toISOString().split('T')[0];

const TLView = styled.View`
  background-color: ${({theme}) => theme.colors.dreamPurple300};
  padding-top: 50px;
`;

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
        selected: true,
        disableTouchEvent: true,
        // selectedColor: 'orange',
        // selectedTextColor: 'white',
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
    // <SafeAreaView>
    <TLView>
      {/* <TLSafeAreaView></TLSafeAreaView> */}
      <Calendar
        monthFormat={'yyyy년 MM월'}
        firstDay={1}
        enableSwipeMonths
        current={today}
        onDayPress={onDayPress}
        markingType={'custom'}
        markedDates={marked}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        theme={{
          // backgroundColor: theme.colors.dreamPurple200,
          calendarBackground: theme.colors.dreamPurple300,
          textSectionTitleColor: theme.colors.grey300, // 요일 색
          // textSectionTitleDisabledColor: 'yellow',
          selectedDayBackgroundColor: theme.colors.dreamPurple400,
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: theme.colors.white,
          textDisabledColor: theme.colors.grey400,
          // dotColor: '#00adf5',
          // selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          // disabledArrowColor: '#d9e1e8',
          monthTextColor: theme.colors.white,
          // indicatorColor: 'blue',
          // textDayFontFamily: 'monospace',
          // textMonthFontFamily: 'monospace',
          // textDayHeaderFontFamily: 'monospace',
          // textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          // textDayFontSize: 16,
          // textMonthFontSize: 16,
          // textDayHeaderFontSize: 14,
        }}
      />
      <ScrollView style={styles.scrollView}>
        {todayLaffle?.response.map((v, i) => {
          // console.log(v);
          return <CustomCheckbox key={i} categoryInfo={v} />;
        })}
      </ScrollView>
    </TLView>
    // </SafeAreaView>
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
    paddingHorizontal: 24,
    paddingVertical: 46,
    // marginHorizontal: 10
  },
});
