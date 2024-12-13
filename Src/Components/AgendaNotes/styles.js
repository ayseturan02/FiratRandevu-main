import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
  },
  margin:{
    margin:windowWidth*0.048
  },
  hourText:{fontWeight: '600',fontSize:windowWidth*0.034},
  line:{
    width:windowWidth*0.003,
    height: windowWidth*0.29,
    backgroundColor: '#AFAFAF',
    position: 'absolute',
    left: windowWidth*0.255,
  },
  dart:{
    width: windowWidth*0.03,
    height: windowWidth*0.03,
    backgroundColor: '#9b1e48',
    borderRadius: windowWidth*0.1,
    marginTop: windowHeight*0.027,
  },
  notes:{
    width: windowWidth*0.68,
    height: windowWidth*0.23,
    backgroundColor: '#9B1E484E',
    borderRadius: windowWidth*0.025,
    margin: windowWidth*0.027,
  }
});
