import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  icon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    bottom: windowHeight * 0.03,
  },
  plusButton: {
    position: 'absolute',
    backgroundColor: '#7C1241',
    borderRadius: windowWidth * 0.1,
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
  },
  plusIcon: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    tintColor: 'white',
    margin: windowWidth * 0.03,
  },
});
