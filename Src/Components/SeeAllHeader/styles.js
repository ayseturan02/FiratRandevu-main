import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    bottom: windowHeight * 0.09,
  },
  header2_position: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.45,
    left: windowWidth * 0.1,
  },
  header1_position: {
    left: windowWidth * 0.18,
    height: windowWidth * 0.3,
    width: windowWidth * 0.45,
    transform: [{rotate: '90deg'}],
  },
  header_color: {
    height: windowHeight * 0.2,
    width: windowWidth * 1,
    backgroundColor: '#7C1241',
  },
  logo_position: {bottom: windowHeight * 0.12, left: windowWidth * 0.12},
  logo_size: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    transform: [{rotate: '-45deg'}],
  },
  logo_opacity: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    backgroundColor: '#79133F',
    position: 'absolute',
    transform: [{rotate: '-45deg'}],
    opacity: 0.7,
  },
  logo2_position: {bottom: windowHeight * 0.14, left: windowWidth * 0.4},
  logo2_size: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    transform: [{rotate: '-45deg'}],
  },
  logo2_opacity: {
    height: windowWidth * 0.4,
    width: windowWidth * 0.4,
    backgroundColor: '#79133F',
    position: 'absolute',
    transform: [{rotate: '-45deg'}],
    opacity: 0.7,
  },
});
