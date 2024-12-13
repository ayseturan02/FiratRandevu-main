import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  back_position: {
    left: windowWidth * 0.02,
  },
  headerText: {
    fontFamily: 'Alatsi',
    fontSize: windowWidth * 0.06,
    color: '#4C4E70',
  },
  headerBox: {
    width: windowWidth * 1,
    height: windowHeight * 0.1,
    backgroundColor: '#f9f8f8',
    justifyContent: 'center',
  },
  text_position: {
    flex: 0.2,
    position: 'absolute',
    left: windowHeight * 0.07,
    justifyContent: 'center',
    height: windowHeight * 0.06,
  },
});
export default styles;
