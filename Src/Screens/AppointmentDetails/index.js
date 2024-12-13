import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ProfileDetails, MeetDetails} from '../../Components';
import {Soner, Bilal} from '../../Assets/images';

const AppointmentDetails = () => {
  const exampleData = {
    type: 'gelen randevu isteği',
    name: 'Prof. Dr. Soner ÖZGEN',
    title: 'Rektör Yardımcısı',
    image: Soner,
    callnumber: '424-235225-00',
    email: 'sozgen@firat.edu.tr',
    status: '',
    description:
      "Randevu içeriği hakkındaki bilgi yazısı...",
    clock: '15:00-16:00',
    date: '14.08.2024',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ProfileDetails
            image={exampleData.image}
            title={exampleData.title}
            name={exampleData.name}
            callnumber={exampleData.callnumber}
            email={exampleData.email}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.leftView}></View>
            <MeetDetails
              date={exampleData.date}
              clock={exampleData.clock}
              description={exampleData.description}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentDetails;
