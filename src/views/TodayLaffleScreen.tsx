import React, {useCallback, useMemo, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Calendar, CalendarProps, LocaleConfig} from 'react-native-calendars';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';
import CustomCheckbox from '../components/goal/CustomCheckBox';
import {theme} from '../theme';
import fetcher from '../utils/fetcher';

const {
  colors: {
    grey100,
    grey200,
    grey300,
    grey400,
    grey500,
    grey600,
    dreamPurple100,
    dreamPurple200,
    dreamPurple300,
    dreamPurple400,
    white,
  },
} = theme;
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
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        // selectedColor: 'orange',
        // selectedTextColor: 'white',
      },

      '2022-06-02': {selected: true, marked: true},
      '2022-06-03': {marked: true},
      '2022-06-04': {marked: true},
      '2022-06-05': {marked: true},
      '2022-06-07': {marked: true},
      '2022-06-09': {marked: true},
      '2022-06-11': {marked: true},
      '2022-06-15': {marked: true},
      '2022-06-17': {marked: true},
      '2022-06-13': {marked: true},

      // '2022-06-26': {selected: true},
      '2022-06-27': {marked: true},
      '2022-06-28': {marked: true},
    };
  }, [selected]);
  // const marked = {
  //   '2022-06-02': {selected: true, marked: true},
  //   '2022-06-03': {marked: true},
  //   '2022-06-04': {marked: true},
  //   '2022-06-05': {marked: true},

  //   // '2022-06-26': {selected: true},
  //   '2022-06-27': {marked: true},
  //   '2022-06-28': {marked: true},
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
          calendarBackground: dreamPurple300,
          textSectionTitleColor: grey300, // 요일 색
          // textSectionTitleDisabledColor: 'yellow',
          selectedDayBackgroundColor: dreamPurple400,
          selectedDayTextColor: '#ffffff',
          todayTextColor: white,
          dayTextColor: white,
          textDisabledColor: grey400,
          dotColor: white,
          // selectedDotColor: '#ffffff',
          arrowColor: '#AECFFF',
          // disabledArrowColor: '#d9e1e8',
          monthTextColor: white,
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
      {/* TODO : 스크롤 이슈 */}
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
  },
});
