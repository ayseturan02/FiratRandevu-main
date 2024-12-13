import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  button_position: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  button_style: {
    backgroundColor: '#7C1241',
    height: windowWidth * 0.14,
    width: windowWidth * 0.7,
    borderRadius: windowWidth * 0.035,
    borderColor: 'white',
    borderWidth: windowWidth * 0.008,
  },
  button_text_position: {
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth * 0.12,
  },
  button_text: {
    color: 'white',
    fontFamily: 'Alata',
    fontSize: windowWidth * 0.045,
  },
});
