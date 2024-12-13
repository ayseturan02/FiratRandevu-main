import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {Back} from '../../Components/index';
import {arrow} from '../../Assets/icons';
import React from 'react';
import styles from './styles';
const ProfileDetails = props => {
  const {title, name, image, type, email, callnumber} = props;
  return (
    <View>
      <View style={styles.view}>
        <Back left={arrow} />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.imagePosition}>
            <Image source={image} style={styles.imageSize} />
          </View>
          <View style={styles.textPosition}>
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.unvanStyle}>{title}</Text>
            <View style={styles.telPosition}>
              <Text style={styles.telStyle}>{callnumber}</Text>
              <Text style={styles.emailStyle}>{email}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetails;
