import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  conteiner: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: windowWidth * 0.1,
    backgroundColor: '#9b1e48',

    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    height: windowWidth * 0.06,
    width: windowWidth * 0.06,
  },
  flexT: {
    flex: 1,
    position: 'absolute',
    top: windowHeight * 0.8,
    left: windowWidth * 0.8,
  },
});
export default styles;
