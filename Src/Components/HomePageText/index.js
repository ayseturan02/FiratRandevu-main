import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomePageText = props => {
  const Navigation = useNavigation();

  return (
    <View style={styles.text_position}>
      <View style={{justifyContent: 'flex-end'}}>
        <Text style={styles.left_text_style}>Yaklaşan Randevu</Text>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => Navigation.navigate(RouterNames.SEE_ALL)}>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={styles.right_text_style}>tümünü gör</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePageText;
