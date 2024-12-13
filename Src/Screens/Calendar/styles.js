import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  goback: {
    width: windowWidth,
    height: windowHeight * 0.07,
    backgroundColor: 'white',
  },
  calendar_conteiner: {
    width: windowWidth,
    height: windowHeight * 0.46,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    elevation: 5,
  },
});
export default styles;
