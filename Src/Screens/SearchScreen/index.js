import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import {SearchBar, Back, Button} from '../../Components';
import {leftArrow} from '../../Assets/icons/index';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.mainpage}>
      <SafeAreaView>
        <Back left={leftArrow} />
        <SearchBar />
        <View style={styles.genelContainer}>
          <View style={styles.icerikContainer}>
            <View style={styles.AnaYaziContainer}>
              <Text style={styles.AnaYazi}>
                Fırat Üniversitesi Randevu Sistemi
              </Text>
            </View>
            <View style={styles.DescriptionContainer}>
              <Text style={styles.Description}>
                Arama Yapmak için Arama kutusuna yazabilirsiniz
              </Text>
            </View>
            <Button
              onPress={() => navigation.navigate(RouterNames.ADVANCED_SEARCH)}
              name={'Gelişmiş Arama'}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;
