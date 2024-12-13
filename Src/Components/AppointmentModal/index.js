import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';
const AppointmentModal = props => {
  const {title, name, date, hour, subject, modalVisible, setModalVisible} =
    props;

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.subheader}>
              <Text style={styles.subtitle}>{title}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{date}</Text>
              <Text style={styles.infoText}>{hour}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.contentText}>{subject}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>İptal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => console.log('Gönder')}>
                <Text style={styles.buttonText2}>Gönder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default AppointmentModal;
