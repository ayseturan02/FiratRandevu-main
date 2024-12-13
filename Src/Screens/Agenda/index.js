import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {AddButton, AgendaNotes, CalendarAnimated} from '../../Components';

const Agenda = () => {
  return (
    <View>
      <View style={styles.geri}></View>
      <CalendarAnimated />
      <ScrollView>
        <AgendaNotes backgroundColor="#9B1E4835" color="gray" hour="09.00 PM" />
        <AgendaNotes backgroundColor="#D6DF5435" color="gray" hour="10.00 PM" />
        <AgendaNotes backgroundColor="#5460DF35" color="gray" hour="11.00 PM" />
        <AgendaNotes backgroundColor="#54DF6035" color="gray" hour="12.00 PM" />
        <AgendaNotes backgroundColor="#DF54C835" color="gray" hour="13.00 PM" />
        <AgendaNotes backgroundColor="#DF545435" color="gray" hour="14.00 PM" />
        <AgendaNotes backgroundColor="#DF54C335" color="gray" hour="15.00 PM" />
        <AgendaNotes backgroundColor="#5460DF35" color="gray" hour="16.00 PM" />
        <AgendaNotes backgroundColor="#54DF6035" color="gray" hour="17.00 PM" />
      </ScrollView>
      <AddButton />
    </View>
  );
};

export default Agenda;
