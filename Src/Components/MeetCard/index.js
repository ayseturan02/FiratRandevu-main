import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from './style';
import {Bilal} from './../../Assets/images/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const MeetCard = props => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.GenelContainer}
      onPress={() => Navigation.navigate(RouterNames.FOR_APPOINTMENT)}>
      <View style={styles.BilgiContainer}>
        <View style={styles.Bilgi2Container}>
          <View style={styles.ResimContainer}>
            <Image source={Bilal} style={styles.image_size} />
          </View>
          <View style={styles.DescriptionContainer}>
            <View style={styles.NameContainer}>
              <Text style={styles.Nametext}>Prof.Dr Bilal </Text>
            </View>
            <View style={styles.UnvanContainer}>
              <Text style={styles.Unvantext}>Rektör Yardımcısı</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.RandevuContainer}>
        <Text style={styles.Randevutext}>Randevu Talep Et</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MeetCard;
