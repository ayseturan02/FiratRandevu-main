import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const AgendaNotes = ({backgroundColor, color, hour}) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.margin}>
        <Text style={styles.hourText}>{hour}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={[styles.dart, {backgroundColor: color}]}></View>
      <View style={[styles.notes, {backgroundColor: backgroundColor}]}></View>
    </View>
  );
};

export default AgendaNotes;
