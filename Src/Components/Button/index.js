import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './style';

const Button = props => {
  const {onPress,name} = props;
  return (
    <TouchableOpacity
      onPress={() => {onPress();}}
      activeOpacity={0.8}
      style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
