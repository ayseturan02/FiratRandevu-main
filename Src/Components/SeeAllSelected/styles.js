import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    height: windowWidth * 0.24,
    width: windowWidth * 1,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: windowWidth * 0.03,
    borderTopRightRadius: windowWidth * 0.03,
  },
  text_position: {justifyContent: 'center', height: windowWidth * 0.24},
  text_size: {
    flexDirection: 'row',
    width: windowWidth * 0.8,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  text: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'InriaSans',
    color: '#7C1241',
  },
  underline: {
    height: windowWidth * 0.01,
    width: windowWidth * 0.2,
    borderRadius: windowWidth * 0.01,
    backgroundColor: '#7C1241',
    marginTop: windowHeight * 0.005,
  },
});
