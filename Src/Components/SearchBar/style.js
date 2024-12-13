import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  serchcontainer: {
    width: windowWidth * 0.94,
    height: windowWidth / 8,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffff',
    marginTop: windowWidth * 0.03,
    borderRadius: windowWidth * 0.02,
    borderWidth: windowWidth * 0.003,
    borderColor: '#969FAF',
  },
  imagesearch: {
    width: windowWidth / 18,
    height: windowWidth / 18,
    marginLeft: windowWidth * 0.02,
  },
  textinput: {
    flex: 1,
    padding: windowWidth * 0.02,
    color: '#6F718C',
    height: '100%',
    fontSize: windowWidth * 0.035,
  },
});
