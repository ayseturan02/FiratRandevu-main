import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  box: {
    width: windowWidth * 0.98,
    height: windowHeight * 0.08,
    borderBottomWidth: windowWidth * 0.002,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: windowWidth * 0.01,
    flexDirection: 'row',
  },
  iconPosition: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.08,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: windowWidth * 0.055,
    height: windowWidth * 0.055,
    alignSelf: 'center',
  },
  textPosition: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.07,
    justifyContent: 'center',
  },
  title: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'ABeeZee',
    color: 'black',
    fontWeight: '600',
  },
  switchPosition: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.08,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon2: {
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
    alignSelf: 'center',
  },
});

export default styles;
