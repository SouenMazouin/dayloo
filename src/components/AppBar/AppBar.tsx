import React, { useContext, useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';

import styles from './AppBar.style';
import { DateContext } from '../../services/dateProvider/dateProvider';
import DateTimePicker from '@react-native-community/datetimepicker';

import Calendar from '../Calendar/Calendar';

const AppBar = (props: StackHeaderProps): JSX.Element => {
  const { state, dispatch } = useContext(DateContext);
  const [calendarState, setCalendarState] = useState({
    date: new Date(),
    show: false,
  });
  const onChange = (event, selectedDate) => {
    const currentDate: Date = selectedDate || calendarState.date;
    setCalendarState({ ...calendarState, date: currentDate, show: false });
  };
  const showPicker = () => {
    setCalendarState({ ...calendarState, show: true });
  };

  // dispatch({
  //   type: 'UPDATE_TIMESTAMP',
  //   date: calendarState.date.setHours(0, 0, 0, 0),
  // });
  return (
    <>
      <View style={styles.appBarContainer}>
        <View style={styles.buttonMenuContainer}>
          <Pressable
            onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
            android_ripple={{ color: 'rgba(189, 189, 189, 0.4)', borderless: true }}>
            <Image style={styles.icons} source={{ uri: 'asset:/images/icons/fa-bars.png' }} />
          </Pressable>
        </View>
        <View style={styles.buttonMenuContainer}>
          <Pressable
            onPress={showPicker}
            android_ripple={{ color: 'rgba(189, 189, 189, 0.4)', borderless: true }}>
            <Image style={styles.icons} source={{ uri: 'asset:/images/icons/fa-calendar.png' }} />
          </Pressable>
        </View>
      </View>
      {calendarState.show && (
        <DateTimePicker
          maximumDate={new Date()}
          minimumDate={new Date(2020, 1, 1)}
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={calendarState.date}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default AppBar;
