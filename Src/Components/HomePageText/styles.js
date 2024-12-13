import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  text_position: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.93,
    alignSelf: 'center',
    height: windowHeight * 0.1,
  },
  left_text_style: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'ABeeZee',
    color: '#7C1241',
  },
  right_text_style: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'ABeeZee',
    color: '#7C1241',
    textDecorationLine: 'underline',
  },
});
