import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  screen: {backgroundColor: 'white', height: windowHeight},
  üst_view: {width: windowWidth * 1, alignItems: 'flex-end'},

  view: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.95,
    backgroundColor: '#E8E8E8',
    borderBottomLeftRadius: windowWidth * 0.08,
  },
  image_position: {
    justifyContent: 'center',
    height: windowHeight * 0.25,
    width: windowWidth * 0.38,
    left: windowWidth * 0.04,
  },
  image_size: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.3,
    borderRadius: windowWidth * 0.02,
  },
  text_position: {
    height: windowHeight * 0.12,
    justifyContent: 'flex-end',
    width: windowWidth * 0.55,
  },
  text_style: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'DoppioOne',
    color: '#4B4E6F',
  },
  unvan_style: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'ABeeZee',
    color: '#4B4E6F',
  },
  tel_position: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.55,
    justifyContent: 'center',
  },
  tel_style: {
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
    color: '#AFAFAF',
  },
  email_style: {
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
    color: '#AFAFAF',
    textDecorationLine: 'underline',
  },
  view3: {
    height: windowWidth * 1.35,
    width: windowWidth * 0.25,
    backgroundColor: '#E8E8E8',
    position: 'absolute',
  },
  date_view: {
    width: windowWidth * 0.94,
    backgroundColor: 'white',
    borderTopRightRadius: windowWidth * 0.08,
    padding: windowWidth * 0.06,
  },
  date_position: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: windowWidth * 0.6,
  },
  date_style: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'DoppioOne',
    color: '#4B4E6F',
  },
  clock_style: {
    fontSize: windowWidth * 0.045,
    fontFamily: 'DoppioOne',
    color: '#4B4E6F',
  },
  description: {
    height: windowHeight * 0.6,
    width: windowWidth * 0.85,
    padding: windowWidth * 0.02,
    top: windowWidth * 0.04,
  },
  description_style: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'Asap',
    color: '#6F718C',
  },
});
