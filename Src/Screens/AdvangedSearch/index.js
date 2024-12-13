import {View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  Back,
  TwoChocieForSearch,
  SelectListBox,
  Button,
} from '../../Components';
import styles from './style';
import {leftArrow} from '../../Assets/icons/index';
const AdvangedSearch = ({navigation}) => {
  return (
    <SafeAreaView>
      <Back left={leftArrow} />
      <View style={styles.SecenekContainer}>
        <TwoChocieForSearch isim={'Akademik'} Yer={'Left'} />
        <TwoChocieForSearch isim={'Kurumsal'} Yer={'Right'} />
      </View>
      <SelectListBox />
      <Button
        onPress={() => navigation.navigate(RouterNames.LIST_SCREEN)}
        name={'Listele'}
      />
    </SafeAreaView>
  );
};

export default AdvangedSearch;
