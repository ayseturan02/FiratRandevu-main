import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomePageButton = props => {
  const Navigation = useNavigation();
  return (
    <View style={styles.button_position}>
      <TouchableOpacity
        onPress={() => Navigation.navigate(RouterNames.SEARCH_SCREEN)}>
        <View style={styles.button_style}>
          <View style={styles.button_text_position}>
            <Text style={styles.button_text}>Randevu Al</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageButton;
