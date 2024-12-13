import {StyleSheet, Dimensions, TextInput} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  box: {
    width: windowWidth * 0.32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.055,
    margin: windowHeight * 0.003,
  },
  dropdown: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.25,
    height: windowWidth * 0.23,
  },
});
export default styles;
