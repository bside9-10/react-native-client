import React, {useCallback, useMemo, useState} from 'react';
import {
  Dimensions,
  RecyclerViewBackedScrollViewBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {Calendar, CalendarProps, LocaleConfig} from 'react-native-calendars';
import {useQueries, useQuery} from 'react-query';
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
  /* flex: 1; */
`;
const NoData = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

const TodayLaffleScreen = () => {
  const [selected, setSelected] = useState(today);
  const [month, setMonth] = useState(today);

  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  // const result = useQueries([
  //   {
  //     queryKey: ['getMonthlyData', month],
  //     queryFn: () =>
  //       fetcher({
  //         queryKey: `/api/v1/goals/2/today/stamp?month=${month.replace(
  //           /-/gi,
  //           '',
  //         )}`,
  //       }),
  //   },
  //   {
  //     queryKey: ['getTodayLaffle', selected],
  //     queryFn: () =>
  //       fetcher({
  //         queryKey: `/api/v1/goals/2/today?date=${selected.replace(/-/gi, '')}`,
  //       }),
  //   },
  // ]);

  // console.warn(result);
  // const monthlyData = result && result[0].data.response;
  // console.log('monthlyData', monthlyData);

  const {data: monthlyData, isLoading} = useQuery(
    ['getMonthlyData', month],
    () =>
      fetcher({
        queryKey: `/api/v1/goals/2/today/stamp?month=${month.replace(
          /-/gi,
          '',
        )}`,
      }),
  );

  const {data: todayLaffle} = useQuery(['getTodayLaffle', selected], () =>
    fetcher({
      queryKey: `/api/v1/goals/2/today?date=${selected.replace(/-/gi, '')}`,
    }),
  );

  interface IMonthlyData {
    goalDate: string;
  }

  interface IDailyMark {
    goalDate: string;
  }

  let dailyMark: {[key: string]: any} = {};

  monthlyData?.response.forEach((value: IMonthlyData, i: number) => {
    const date = value.goalDate;
    dailyMark[date] = {marked: true};
  });

  let selectedMark: {[key: string]: any} = {};
  selectedMark[selected] = {selected: true};
  const marked = {
    ...selectedMark,
    ...dailyMark,
  };

  // const marked = useMemo(
  //   (...dailyMark) => {
  //     return {
  //       dailyMark,
  //       [selected]: {
  //         selected: true,
  //         disableTouchEvent: true,
  //       },
  //     };
  //   },
  //   [selected],
  // );

  // const marked = useMemo(() => {
  //   return {
  //     ...dailyMark,
  //     [selected]: {
  //       selected: true,
  //       disableTouchEvent: true,
  //       // selectedColor: 'orange',
  //       // selectedTextColor: 'white',
  //     },
  //     // '2022-06-02': {selected: true},
  //     // '2022-06-02': {marked: true},
  //     // '2022-06-05': {marked: true},
  //     // '2022-06-07': {marked: true},
  //     // '2022-06-09': {marked: true},
  //     // '2022-06-11': {marked: true},
  //     // '2022-06-15': {marked: true},
  //     // '2022-06-17': {marked: true},
  //     // '2022-06-13': {marked: true},
  //     // '2022-06-26': {selected: true},
  //     // '2022-06-27': {marked: true},
  //     // '2022-06-28': {marked: true},
  //   };
  // }, [selected]);

  // // const {data} = resultQuery;
  // console.log('todayLaffle', todayLaffle);

  return (
    // <SafeAreaView style={styles.container}>
    <TLView style={styles.container}>
      <Calendar
        monthFormat={'yyyy년 MM월'}
        firstDay={1}
        enableSwipeMonths
        current={today}
        onDayPress={onDayPress}
        markingType={'custom'}
        markedDates={marked}
        onMonthChange={currentMonth => {
          // console.warn('month changed', currentMonth);
          setMonth(currentMonth.dateString);
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{paddingBottom: 60}}>
        {todayLaffle?.response.flag ? (
          todayLaffle.response.data.map(
            (v, i) =>
              v.goalDetails.length !== 0 && (
                <CustomCheckbox key={i} categoryInfo={v} />
              ),
          )
        ) : (
          <NoData>
            <Image
              style={styles.image}
              source={require('../../assets/images/character5_surfing.png')}
            />
            <Text>오늘은 자유</Text>
          </NoData>
        )}
      </ScrollView>
    </TLView>
    // </SafeAreaView>
  );
};

export default TodayLaffleScreen;

const styles = StyleSheet.create({
  scrollView: {
    top: 20,
    // height: windowHeight,
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 24,
    paddingTop: 46,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
  },
  image: {width: 150, height: 150},
});
