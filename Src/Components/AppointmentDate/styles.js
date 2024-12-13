import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    conteiner:{
        margin:windowWidth*0.05
    },
    row_conteiner:{
        flexDirection:'row',
    },
    image:{
        resizeMode:'contain',
        width:windowWidth*0.05,
        height:windowHeight*0.05
    },
    
});
export default styles;
