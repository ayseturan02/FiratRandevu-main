import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {SelectList} from 'react-native-dropdown-select-list';

const TimeRange = () => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: '09.00'},
    {key: '2', value: '10.00'},
    {key: '3', value: '11.00'},
    {key: '4', value: '12.00'},
    {key: '5', value: '13.00'},
    {key: '6', value: '14.00'},
    {key: '7', value: '15.00'},
  ];

  return (
    <SelectList
      setSelected={val => setSelected(val)}
      data={data}
      save="value"
      placeholder="Seçili Değil"
      boxStyles={styles.box}
      dropdownStyles={styles.dropdown}
    />
  );
};
export default TimeRange;
