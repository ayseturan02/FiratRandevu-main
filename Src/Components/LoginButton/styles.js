import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({

view:{
    height: windowWidth * 0.15,
    width: windowWidth * 0.9,
    backgroundColor: '#7C1241',
    borderRadius: windowWidth * 0.03,
    borderWidth: windowWidth * 0.01,
    borderColor: 'white',
  },
  button_position:{
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth * 0.12,
  },
  text_style:{
    color: 'white',
    textAlign: 'center',
    fontSize: windowWidth * 0.043,
    fontFamily: 'ABeeZee',
  },
  


});
