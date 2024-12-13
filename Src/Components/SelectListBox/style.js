import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

export default style = StyleSheet.create({
  GenelContainer: {
    alignSelf: 'center',
    width: '90%',
    marginVertical: windowHeight * 0.01,
  },
  box: {
    width: windowWidth * 0.9,
    alignSelf: 'center',
  },
  dropdown: {
    width: windowWidth * 0.9,
    alignSelf: 'center',
  },
  text: {
    fontSize: windowWidth * 0.05,
    padding: windowWidth * 0.02,
  },
  SelectContainer: {
    height: windowHeight / 2.5,
    marginTop: windowWidth * 0.05,
  },
});
