import {View, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {search} from '../../Assets/icons';
const SearchBar = () => {
  return (
    <View style={styles.serchcontainer}>
      <Image style={styles.imagesearch} source={search}></Image>
      <TextInput
        placeholder="Bölüm,Personel Ara"
        placeholderTextColor="#6F718C"
        style={styles.textinput}></TextInput>
    </View>
  );
};

export default SearchBar;
