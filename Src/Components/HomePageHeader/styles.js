import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  header_color: {
    flex: 1,
    width: windowWidth * 0.32,
    height: windowWidth * 0.23,
    backgroundColor: '#7C1241',
    borderBottomRightRadius: windowWidth * 0.2,
  },
  icon_size: {width: windowWidth * 0.06, height: windowWidth * 0.06},
  date_position: {
    alignItems: 'center',
    width: windowWidth * 0.3,
    justifyContent: 'center',
  },
  day_style: {
    color: '#7C1241',
    fontSize: windowWidth * 0.13,
    fontFamily: 'Aclonica',
  },
  month_style: {
    color: '#7C1241',
    fontSize: windowWidth * 0.07,
    fontFamily: 'Aclonica',
  },
});
