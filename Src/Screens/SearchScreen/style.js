import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default style = StyleSheet.create({
  mainpage: {
    flex: 1,
    backgroundColor: '#F9F8F8',
  },
  genelContainer: {
    height: windowHeight * 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icerikContainer: {
    width: windowWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  AnaYaziContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AnaYazi: {
    fontSize: windowWidth * 0.07,
    color: '#785858',
    opacity: 0.8,
    fontFamily: 'Alata',
  },
  DescriptionContainer: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Description: {
    fontSize: windowWidth * 0.035,
    color: '#785858',
    opacity: 0.8,
    textAlign: 'center',
    fontFamily: 'Alata',
  },
});
