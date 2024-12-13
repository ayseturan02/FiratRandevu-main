import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  screen: {
    backgroundColor: '#08080A',
    height: windowHeight,
    width: windowWidth,
  },
  text_position: {
    justifyContent: 'center',
    height: windowHeight * 1,
  },
  text_style: {
    fontFamily: 'Audiowide',
    color: 'white',
    fontSize: windowWidth * 0.23,
  },
  text_style2: {
    fontFamily: 'Audiowide',
    color: 'white',
    fontSize: windowWidth * 0.16,
  },
  image_position: {
    height: windowHeight * 0.0,
    justifyContent: 'flex-end',
  },
  image_size: {height: windowWidth * 0.66, width: windowWidth},
});
