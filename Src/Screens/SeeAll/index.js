import {
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  SeeAllHeader,
  SeeAllSelected,
} from '../../Components/index';
const SeeAll = () => {
  return (
    <SafeAreaView
      style={{backgroundColor: '#F2F2F2', height: windowHeight * 1}}>
      <SeeAllHeader />
      <SeeAllSelected />
    </SafeAreaView>
  );
};

export default SeeAll;
