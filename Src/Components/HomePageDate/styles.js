import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  dayStyle: {
    color: '#7C1241',
    fontSize: windowWidth * 0.13,
    fontFamily: 'Aclonica',
  },
  monthStyle: {
    color: '#7C1241',
    fontSize: windowWidth * 0.05,
    fontFamily: 'Aclonica',
  },
  date_position: {
    alignItems: 'center',
    width: windowWidth * 0.33,
  },
});
