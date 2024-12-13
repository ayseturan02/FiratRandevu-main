import {Text, View, Dimensions, SafeAreaView, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import {YılmazBey, header3} from './../../Assets/images/index';
import {phoneCall, email, pin} from './../../Assets/icons/index';
import styles from './styles';

const personalInfo = {
  name: 'Yılmaz AYDIN',
  title: 'Araştırma Görevlisi',
  location: 'MÜHENDİSLİK FAKÜLTESİ /YAZILIM MÜHENDİSLİĞİ Merkez/Elazığ',
  phone: '424-235225-000',
  email: 'y.aydin@firat.edu.tr',
};

const Profile = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Image source={header3} style={styles.header3} />
      </View>
      <View style={styles.image_position}>
        <View style={styles.image_view}>
          <View style={{padding: windowWidth * 0.023}}>
            <Image source={YılmazBey} style={styles.image_size} />
          </View>
        </View>
      </View>
      <View style={styles.name_text_position}>
        <Text style={styles.text_style}>{personalInfo.name}</Text>
        <Text style={styles.unvan_style}>{personalInfo.title}</Text>
      </View>
      <View style={styles.desc}>
        <View style={styles.pin_view}>
          <View style={styles.icon_position}>
            <Image source={pin} style={styles.icon_size} />
            <View style={styles.text_position}>
              <Text style={styles.pin_style}>{personalInfo.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.phone_position}>
          <View style={styles.icon_position}>
            <Image source={phoneCall} style={styles.icon_size} />
            <View style={styles.text_position}>
              <Text style={styles.phone_style}>{personalInfo.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.email_view}>
          <View style={styles.icon_position}>
            <Image source={email} style={styles.icon_size} />
            <View style={styles.text_position}>
              <Text style={styles.email}>{personalInfo.email}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
