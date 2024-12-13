import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    position:{
        flexDirection: 'row',
        justifyContent: 'center',
      },
      input_view:{
        height: windowWidth * 0.14,
        width: windowWidth * 0.75,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: windowWidth * 0.02,
        borderTopLeftRadius: windowWidth * 0.02,
        borderColor: '#CBCFD7',
        borderWidth: windowWidth * 0.008,
      },
      icon_view:{
        height: windowWidth * 0.14,
        width: windowWidth * 0.15,
        backgroundColor: '#F0F1F3',
        borderColor: '#CBCFD7',
        borderWidth: windowWidth * 0.008,
        borderBottomRightRadius: windowWidth * 0.02,
        borderTopRightRadius: windowWidth * 0.02,
      },
      view_position:{
        right: windowWidth * 0.017,
        top: windowWidth * 0.0,
      },
      view:{
        height: windowWidth * 0.125,
        width: windowWidth * 0.04,
        backgroundColor: '#F0F1F3',
      },
      icon_size:{
        height: windowWidth * 0.045,
        width: windowWidth * 0.045,
      },
      





})