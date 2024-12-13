import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {calendar2} from '../../Assets/icons';
const AppointmentDate = () => {
  return (
    <View style={styles.conteiner}>
      <View>
        <Text>Randevu Tarihi</Text>
      </View>
      <View style={styles.row_conteiner}>
        <View>
          <Image style={styles.image} source={calendar2} />
        </View>
      </View>
    </View>
  );
};

export default AppointmentDate;
