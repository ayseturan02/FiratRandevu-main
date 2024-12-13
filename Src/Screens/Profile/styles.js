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
  image_position: {padding: windowWidth * 0.2, bottom: windowHeight * 0.02},
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
  name_text_position: {alignItems: 'center', bottom: windowHeight * 0.12},
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
  desc: {
    justifyContent: 'space-around',
    height: windowHeight * 0.28,
    width: windowWidth * 1,
    alignItems: 'flex-end',
    bottom: windowHeight * 0.1,
    alignSelf: 'flex-end',
  },
  pin_view: {
    width: windowWidth * 0.92,
    backgroundColor: '#F2ECEE',
    borderTopLeftRadius: windowWidth * 0.08,
    padding: windowWidth * 0.04,
  },
  icon_position: {flexDirection: 'row', alignItems: 'center'},
  icon_size: {
    height: windowWidth * 0.05,
    width: windowWidth * 0.05,
  },
  text_position: {
    marginLeft: windowWidth * 0.04,
    flex: 1,
  },
  pin_style: {
    color: '#4C4E70',
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
  },
  phone_position: {
    width: windowWidth * 0.92,
    backgroundColor: '#F2ECEE',
    padding: windowWidth * 0.04,
  },
  phone_style: {
    color: '#4C4E70',
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
  },
  email_view: {
    width: windowWidth * 0.92,
    backgroundColor: '#F2ECEE',
    borderBottomLeftRadius: windowWidth * 0.08,
    padding: windowWidth * 0.04,
  },
  email: {
    color: '#4C4E70',
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.035,
    textDecorationLine: 'underline',
  },
});
