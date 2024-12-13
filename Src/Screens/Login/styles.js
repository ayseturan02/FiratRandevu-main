import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  logo_position: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight * 0.3,
  },
  logo_size: {
    width: windowWidth * 0.38,
    height: windowWidth * 0.38,
  },
  text_style: {
    fontSize: windowWidth * 0.07,
    color: '#4C4E70',
    fontFamily: 'Bevan',
  },
  textInput_position: {
    justifyContent: 'center',
    height: windowHeight * 0.22,
    justifyContent: 'space-evenly',
    Width: windowWidth * 0.9,
    top: windowHeight * 0.04,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: windowWidth*0.05,
    height: windowWidth*0.05,
    backgroundColor:"#FFFFFF",
    borderWidth: windowWidth*0.006,
    borderRadius:windowWidth*0.01,
    borderColor: '#CBCFD7',
  },
  checkedCheckbox: {
    backgroundColor: '#000',
  },
  label: {
    fontSize: windowWidth*0.03,
  },
});
