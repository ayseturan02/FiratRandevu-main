import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  backContainer: {
    width: windowWidth * 0.98,
    height: windowWidth / 8,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageBack: {
    width: windowWidth / 13,
    height: windowWidth / 13,
    
  },
});
