import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  button: {
    width: windowWidth * 0.9,
    height: windowWidth / 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C1241',
    borderRadius: windowWidth * 0.035,
    borderColor: 'white',
    borderWidth: windowWidth * 0.008,
    alignSelf: 'center',
    marginTop: windowWidth * 0.15,
  },
  buttonText: {
    fontSize: windowWidth * 0.05,
    fontFamily:"Alata",
    color: '#fff',
  },
});
