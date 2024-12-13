import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    geri:{
        width:windowWidth,
        height:windowHeight*0.065,
        backgroundColor:"white"
    }
});
export default styles;
