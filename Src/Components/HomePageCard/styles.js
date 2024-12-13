import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  card_position: {
    alignSelf: 'center',
    marginTop: windowHeight * 0.03,
  },
  card_style: {
    backgroundColor: 'white',
    height: windowWidth * 0.45,
    width: windowWidth * 0.93,
    borderRadius: windowWidth * 0.02,
    shadowColor: 'black',
    shadowOpacity: '0.5',
    elevation: 5,
    shadowOffset: {
      width: windowWidth * 0.03,
      height: windowWidth * 0.03,
    },
    borderWidth: windowWidth * 0.001,
  },
  image_position: {
    height: windowWidth * 0.45,
    justifyContent: 'center',
    width: windowWidth * 0.38,
    alignItems: 'center',
  },
  image_size: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    borderRadius: windowWidth * 0.02,
  },
  text_position: {
    height: windowWidth * 0.18,
    width: windowWidth * 0.5,
  },
  name_text_style: {
    fontSize: windowWidth * 0.043,
    fontFamily: 'DoppioOne',
    color: '#747982',
  },
  text_style: {
    fontSize: windowWidth * 0.033,
    fontFamily: 'ABeeZee',
    color: '#959DAD',
  },
  icon_position: {
    height: windowWidth * 0.1,
    justifyContent: 'space-between',
  },
  icon_calendar: {
    height: windowWidth * 0.04,
    width: windowWidth * 0.04,
  },
  text_calendar: {
    color: '#969FAF',
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.033,
  },
  icon_clock: {
    height: windowWidth * 0.045,
    width: windowWidth * 0.045,
  },
  text_clock: {
    color: '#969FAF',
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.03,
  },
  date_position: {
    justifyContent: 'center',
    left: windowWidth * 0.02,
  },
});
