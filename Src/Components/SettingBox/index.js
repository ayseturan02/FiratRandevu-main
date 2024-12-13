import {StyleSheet, Text, Image, TouchableOpacity, View,Switch} from 'react-native';
import React from 'react';
import styles from './styles';
const SettingBox = props => {
  const {icon,icon2, title, hasSwitch, switchValue, onSwitchChange, onPress} = props;

  return (
    <View style={styles.box} onPress={onPress}>
      <View style={styles.iconPosition}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.textPosition}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {hasSwitch ? (
        <Switch value={switchValue} onValueChange={onSwitchChange} />
      ) : (
        <TouchableOpacity style={styles.switchPosition} >
        <Image source={icon2} style={styles.icon2} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SettingBox;
