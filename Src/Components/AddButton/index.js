import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {plus} from '../../Assets/icons';
import {useNavigation} from '@react-navigation/native';

const AddButton = () => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.flexT}
      onPress={() => Navigation.navigate(RouterNames.CALENDAR)}>
      <View style={styles.conteiner}>
        <Image style={styles.plusButton} source={plus} />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;
