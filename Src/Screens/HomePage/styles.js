import { StyleSheet,Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({

    card_position: {
        alignSelf: 'center',
        height: windowWidth * 0.52,
        justifyContent: 'flex-end',
      },
})