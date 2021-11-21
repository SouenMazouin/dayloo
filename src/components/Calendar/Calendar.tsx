/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useContext, useState } from 'react';
import { View, Pressable, Image, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './Calendar.style';
import { DateContext } from '../../services/dateProvider/dateProvider';

const Calendar = () => {
  const { state, dispatch } = useContext(DateContext);
  const [calendarState, setCalendarState] = useState({
    date: new Date(),
    mode: 'date',
    show: false,
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || calendarState.date;
    // dispatch({ type: 'UPDATE_TIMESTAMP', date: currentDate.setHours(0, 0, 0, 0) });
    setCalendarState({ ...calendarState, date: currentDate, show: false });
  };
  const showPicker = (currentMode) => {
    setCalendarState({ ...calendarState, show: true });
  };

  return (
    <View>
      <View style={styles.buttonMenuContainer}>
        <Pressable
          onPress={showPicker}
          android_ripple={{ color: 'rgba(189, 189, 189, 0.4)', borderless: true }}>
          <Image style={styles.icons} source={{ uri: 'asset:/images/icons/fa-calendar.png' }} />
        </Pressable>
      </View>
      {calendarState.show && (
        <DateTimePicker
          maximumDate={new Date()}
          minimumDate={new Date(2020, 1, 1)}
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={calendarState.date}
          mode={calendarState.mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Calendar;
