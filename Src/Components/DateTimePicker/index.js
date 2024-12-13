import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import DatePicker from './../DatePicker';
import TimePicker from './../TimePicker';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DateTimePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <View>
      <View
        style={{
          height: windowWidth * 0.15,
          width: windowWidth * 0.9,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: windowWidth * 0.03,
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: windowWidth * 0.03,
          }}>
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <TimePicker time={selectedTime} setTime={setSelectedTime} />
        </View>
      </View>
    </View>
  );
};

export default DateTimePickerExample;
