import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  screen: {backgroundColor: '#F2F2F2', height: windowHeight * 1},
  header3: {
    height: windowWidth * 0.48,
    width: windowWidth * 1,
    position: 'absolute',
  },
  image_position: {
    alignItems: 'center',
    height: windowHeight * 0.3,
  },
  image_view: {
    height: windowWidth * 0.56,
    width: windowWidth * 0.6,
    backgroundColor: '#F2F2F2',
    borderRadius: windowWidth * 0.05,
  },
  image_size: {
    height: windowWidth * 0.54,
    width: windowWidth * 0.55,
    borderRadius: windowWidth * 0.05,
  },
  name_text_position: {alignItems: 'center'},
  text_style: {
    fontSize: windowWidth * 0.07,
    fontFamily: 'Lalezar',
    color: '#7C1241',
  },
  unvan_style: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'ABeeZee',
    color: '#7C1241',
    bottom: windowHeight * 0.015,
  },
  white_view_position: {
    alignItems: 'center',
  },
  view: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.03,
  },
  icon_position: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: windowWidth * 0.03,
  },
  icon_size: {
    height: windowWidth * 0.045,
    width: windowWidth * 0.045,
  },
  location_position: {
    justifyContent: 'center',
    height: windowHeight * 0.08,
    width: windowWidth * 0.75,
  },
  text_size: {
    color: '#969FAF',
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.034,
  },
  phone_position: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.01,
  },
  email_position: {flexDirection: 'row', marginTop: windowHeight * 0.01},
});
