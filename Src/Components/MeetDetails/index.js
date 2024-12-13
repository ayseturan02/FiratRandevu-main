import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
const MeetDetails = props => {
  const {description, clock, date} = props;
  return (
    <View style={styles.dateView}>
      <View style={styles.datePosition}>
        <Text style={styles.dateStyle}>{date}</Text>
        <Text style={styles.clockStyle}> | {clock}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.description_style}>{description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.toReject}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.textToReject}>Reddet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toAccept}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.textToAccept}>Onayla</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MeetDetails;
