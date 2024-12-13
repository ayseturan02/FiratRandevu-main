import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  view: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.95,
    backgroundColor: '#E8E8E8',
    borderBottomLeftRadius: windowWidth * 0.1,
    marginLeft: windowWidth * 0.05,
  },
  imagePosition: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.28,
    borderRadius: windowWidth * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSize: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.3,
    borderRadius: windowWidth * 0.02,
  },
  textPosition: {
    height: windowHeight * 0.28,
    justifyContent: 'center',
    width: windowWidth * 0.55,
  },
  textStyle: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'DoppioOne',
    color: '#4B4E6F',
  },
  unvanStyle: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'ABeeZee',
    color: '#4B4E6F',
    marginTop: windowWidth * 0.02,
  },
  telPosition: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.55,
    justifyContent: 'center',
  },
  telStyle: {
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
    color: '#AFAFAF',
  },
  emailStyle: {
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
    color: '#AFAFAF',
    textDecorationLine: 'underline',
  },
});

export default styles;
