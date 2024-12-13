import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  ScrollContainer: {
    width: '95%',
    height: '79%',
    alignSelf: 'center',
    marginTop: windowWidth * 0.05,
  },
});
