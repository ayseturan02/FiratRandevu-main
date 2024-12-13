import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Back from '../Back';
import {arrow} from '../../Assets/icons';
import {useNavigation} from '@react-navigation/native';
const HeaderNotifications = props => {
  const Navigation = useNavigation();
  return (
    <View style={styles.headerBox}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.back_position}>
          <Back left={arrow} />
        </View>
        <View style={styles.text_position}>
          <Text style={styles.headerText}>Bildirimler</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderNotifications;
