import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  box: {
    width: windowWidth * 0.96,
    height: windowHeight * 0.2,
    backgroundColor: '#ebebeb',
    borderRadius: windowWidth * 0.03,
    alignSelf: 'center',
    
    marginTop: windowHeight * 0.02,
    borderColor: '#ebebeb',
    borderWidth: windowWidth * 0.005,
    flexDirection: 'column',
  },
  boxHeader: {
    justifyContent: 'space-between',
    width: windowWidth * 0.96,
    borderTopLeftRadius: windowWidth * 0.03,
    borderTopRightRadius: windowWidth * 0.03,
    flexDirection: 'row',
  },
  subBox: {
    backgroundColor: 'white',
    width: windowWidth * 0.96,
    height: windowHeight * 0.15,
    borderBottomLeftRadius: windowWidth * 0.03,
    borderBottomRightRadius: windowWidth * 0.03,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: '#EBEBEB',
    borderWidth: windowWidth * 0.001,
    alignItems: 'center',
    padding: windowWidth * 0.02,
    justifyContent: 'space-between',
  },

  appointmentRequest: {
    color: '#4B4E6F',
    fontFamily: 'DoppioOne',
    fontSize: windowWidth * 0.036,
    margin: windowHeight * 0.01, //burada gelen randevu isteği yazısını nasıl daha aşağı kaydırırım bilemedim margin kullandım
  },

  approvedStatus: {
    color: '#4B4E6F',
    fontSize: windowWidth * 0.035,
    fontFamily: 'DoppioOne',
    margin: windowHeight * 0.01, //burada gelen randevu isteği yazısını nasıl daha aşağı kaydırırım bilemedim margin kullandım ,
    fontWeight: 'bold',
    paddingRight: windowWidth * 0.02,
  },
  rejectedStatus: {
    color: '#7C1241',
    fontFamily: 'DoppioOne',
    margin: windowHeight * 0.01, //burada gelen randevu isteği yazısını nasıl daha aşağı kaydırırım bilemedim margin kullandım
    fontSize: windowWidth * 0.035,
    fontWeight: 'bold',
    paddingRight: windowWidth * 0.02,
  },
  profile: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: windowWidth * 0.03,
  },
  nameText: {
    color: '#4B4E6F',
    fontFamily: 'DoppioOne',
    fontWeight: 'bold',
    fontSize: windowWidth * 0.04,

  },
  titleText: {
    fontFamily: 'ABeeZee',
    fontSize: windowWidth * 0.033,
    color: '#4B4E6F',
  },
});
export default styles;
