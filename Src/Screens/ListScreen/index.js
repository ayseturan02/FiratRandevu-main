import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Back, SearchBar, MeetCard} from '../../Components';
import styles from './style';
import {leftArrow} from '../../Assets/icons/index';

const ListScreen = () => {
  return (
    <SafeAreaView>
      <Back left={leftArrow} />
      <SearchBar />
      <View style={styles.ScrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MeetCard />
          <MeetCard />
          <MeetCard />
          <MeetCard />
          <MeetCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
