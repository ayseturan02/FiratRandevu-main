import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  containerRight: {
    flex: 0.5,
    height: '100%',
    backgroundColor: '#EAE8E9',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: windowWidth * 0.03,
    borderBottomRightRadius: windowWidth * 0.03,
  },
  containerLeft: {
    flex: 0.5,
    height: '100%',
    backgroundColor: '#7C1241',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: windowWidth * 0.03,
    borderBottomLeftRadius: windowWidth * 0.03,
  },
  text: {
    color: 'white',
    fontSize: windowWidth * 0.043,
    fontFamily:"Alata"

  },
   
});
