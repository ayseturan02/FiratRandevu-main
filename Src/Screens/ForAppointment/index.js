import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Bilal, header3} from './../../Assets/images/index';
import {
  phoneCall,
  email,
  pin,
  arrow,
  leftArrowWhite,
} from './../../Assets/icons/index';

import styles from './styles';
import {
  Button,
  Back,
  DateTimePickerExample,
  AppointmentModal,
} from './../../Components/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const personalInfo = {
  name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
  title: 'Rektör Yardımcısı',
  location: 'Fırat Üniversites Rektörlük Kampüsü Merkez/Elazığ',
  phone: '424-235225-000',
  email: 'bustundag@gmail.com',
};

const ForAppointment = () => {
  const [textInputHeight, setTextInputHeight] = useState(windowWidth * 0.3);
  const [textInputValue, setTextInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const _onPress = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView>
      <View>
        <Image source={header3} style={styles.header3} />
        <Back left={leftArrowWhite} />
        <View style={styles.image_position}>
          <View style={styles.image_view}>
            <View style={{padding: windowWidth * 0.023}}>
              <Image source={Bilal} style={styles.image_size} />
            </View>
          </View>
        </View>
        <View style={styles.name_text_position}>
          <Text style={styles.text_style}>{personalInfo.name}</Text>
          <Text style={styles.unvan_style}>{personalInfo.title}</Text>
        </View>
      </View>
      <View style={styles.white_view_position}>
        <View style={styles.view}>
          <View style={{justifyContent: 'space-around', flex: 1}}>
            <View style={styles.icon_position}>
              <View style={{justifyContent: 'center'}}>
                <Image source={pin} style={styles.icon_size} />
              </View>
              <View style={styles.location_position}>
                <Text style={styles.text_size}>{personalInfo.location}</Text>
              </View>
            </View>
            <View style={{padding: windowWidth * 0.035}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.phone_position}>
                  <View>
                    <Image source={phoneCall} style={styles.icon_size} />
                  </View>
                  <View style={{marginLeft: windowWidth * 0.02}}>
                    <Text style={styles.text_size}>{personalInfo.phone}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.email_position}>
                <View>
                  <Image source={email} style={styles.icon_size} />
                </View>
                <View style={{marginLeft: windowWidth * 0.02}}>
                  <Text style={styles.text_size}>{personalInfo.email}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{top: windowHeight * 0.02}}>
        <DateTimePickerExample />
      </View>
      <View style={{alignItems: 'center', top: windowHeight * 0.04}}>
        <TextInput
          placeholder="Randevu Açıklaması"
          placeholderTextColor="#B0B0B0"
          style={{
            height: textInputHeight,
            minHeight: windowWidth * 0.3, // Set minimum height for 3 lines
            width: windowWidth * 0.9,
            backgroundColor: 'white',
            borderRadius: windowWidth * 0.03,
            textAlignVertical: 'top',
            padding: windowWidth * 0.03,
            fontSize: windowWidth * 0.036,
            color: 'black',
          }}
          multiline
          onContentSizeChange={event => {
            setTextInputHeight(
              Math.max(windowWidth * 0.3, event.nativeEvent.contentSize.height),
            );
          }}
          onChangeText={text => setTextInputValue(text)}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button name="Randevu Talep Et" onPress={_onPress} />
      </View>
      <AppointmentModal
        name={personalInfo.name}
        title={personalInfo.title}
        date={'12.08.2024'}
        hour={'12.00-13.00'}
        subject={textInputValue}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default ForAppointment;
