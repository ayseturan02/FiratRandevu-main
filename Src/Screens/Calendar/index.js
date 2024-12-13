import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {right_arrow, left_arrow} from '../../Assets/icons';
import {Calendar_Strcr} from '../../Components';

const Calendar = () => {
  return (
    <View>
      <View style={styles.goback}></View>
      <View>
        <Calendar_Strcr />
      </View>
    </View>
  );
};

export default Calendar;
