import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
const Back = (props) => {
  const {left} =props;
  const Navigation = useNavigation();

  return (
    <View style={styles.backContainer}>
      <TouchableOpacity onPress={() => Navigation.goBack()} activeOpacity={0.5}>
        <Image style={styles.imageBack} source={left}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Back;
