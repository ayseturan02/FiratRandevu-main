import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;


export default style = StyleSheet.create({
  SecenekContainer: {
    width: windowWidth * 0.9,
    alignSelf: 'center',
    height: windowWidth / 8,
    flexDirection: 'row',
    marginTop: windowWidth * 0.02,
  },
});
