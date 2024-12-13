import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Modal arka planı
  },
  modalContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.45,
    backgroundColor: 'white',
    borderWidth: windowWidth * 0.002,
    borderRadius: windowWidth * 0.025,
    borderColor: '#747982',
    alignItems: 'center',
  },
  header: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.07,
    marginTop: windowHeight * 0.02,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Lalezar',
    fontSize: windowWidth * 0.055,
    fontWeight: '900',
  },
  subheader: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.04,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: 'ABeZee',
    fontSize: windowWidth * 0.045,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth * 0.7,
    alignItems: 'center',
    marginTop: windowHeight * 0.015,
  },
  infoText: {
    fontFamily: 'ABeZee',
    fontSize: windowWidth * 0.045,
    color: '#969FAF',
  },
  contentContainer: {
    width: windowWidth * 0.75,
    height: windowHeight * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth * 0.75,
    marginTop: windowHeight * 0.02,
  },
  cancelButton: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.055,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.03,
    borderWidth: windowWidth * 0.01,
    borderColor: '#747982',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.055,
    backgroundColor: '#747982',
    borderRadius: windowWidth * 0.03,
    borderWidth: windowWidth * 0.01,
    borderColor: '#747982',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: windowWidth * 0.05,
    color: '#747982',
    fontWeight: '600',
  },
  buttonText2: {
    fontSize: windowWidth * 0.05,
    color: '#747982',
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
