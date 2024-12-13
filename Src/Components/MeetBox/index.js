import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {arrows, rightArrow, rightArrowQ} from '../../Assets/icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {useNavigation} from '@react-navigation/native';

const MeetBox = props => {
  const Navigation = useNavigation();
  const {title, image, type, name, status} = props;
  return (
    <View style={styles.box}>
      <View style={styles.boxHeader}>
        <View>
          <Text style={styles.appointmentRequest}>{type}</Text>
        </View>

        <View>
          {status && (
            <View>
              <Text
                style={
                  status === 'ONAYLANDI'
                    ? styles.approvedStatus
                    : styles.rejectedStatus
                }>
                {status}
              </Text>
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.subBox}
        onPress={() => Navigation.navigate('AppointmentDetails')}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style={styles.profile} />

          <View
            style={{
              padding: windowWidth * 0.03,
              flexDirection: 'column',
              width: windowWidth * 0.6,
              height: windowWidth * 0.2,
            }}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
        <View>
          <Image
            source={arrows}
            style={{width: windowWidth * 0.06, height: windowHeight * 0.06}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MeetBox;
