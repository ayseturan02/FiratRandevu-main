import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  dateView: {
    width: windowWidth * 0.94,
    backgroundColor:"white",
    height: windowHeight * 0.7,
    borderTopRightRadius: windowWidth * 0.08,
    padding: windowWidth * 0.06,
  },
  datePosition: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: windowWidth * 0.6,
  },
  dateStyle: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'DoppioOne',
    color: '#4B4E6F',
  },
  clockStyle: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'DoppioOne',
    color: '#4B4E6F',
  },
  description: {
    height: windowHeight * 0.25,
    width: windowWidth * 0.85,
    padding: windowWidth * 0.02,
    top: windowWidth * 0.06,
  },
  description_style: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'Asap',
    color: '#6F718C',
    textAlign: 'justify',
  },
  toReject: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.055,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.03,
    borderWidth: windowWidth * 0.01,
    borderColor: '#7C1241',
    justifyContent: 'center',
  },
  textToReject: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    color: '#7c1241',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
    fontFamily: 'Alata',
  },
  toAccept: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.055,
    backgroundColor: '#7c1241',
    borderRadius: windowWidth * 0.03,
    borderWidth: windowWidth * 0.01,
    borderColor: '#7C1241',
    justifyContent: 'center',
  },
  textToAccept: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
    fontFamily: 'Alata',
  },
});
export default styles;
