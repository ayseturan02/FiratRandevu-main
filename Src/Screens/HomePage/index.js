import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import styles from './styles';
import {
  HomePageHeader,
  HomePageCard,
  HomePageButton,
  HomePageText,
  SearchBar,
} from '../../Components/index';

const HomePage = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F2F2F2'}}>
      <HomePageHeader />
      <View style={{top: windowWidth * 0.04}}>
        <SearchBar />
      </View>
      <HomePageText />
      <View style={styles.card_position}>
        <HomePageCard />
      </View>
      <View style={{top: windowHeight * 0.04}}>
        <HomePageButton />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
