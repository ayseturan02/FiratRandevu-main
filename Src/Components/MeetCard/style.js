import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  GenelContainer: {
    height: windowWidth / 3,
    width: windowWidth * 0.95,
    backgroundColor: '#ffff',
    alignSelf: 'center',
    borderRadius: windowWidth * 0.03,
    borderWidth: 1,
    borderColor: '#C3A6B3',
    marginTop: windowWidth * 0.03,
    marginTop: windowWidth * 0.05,
  },
  BilgiContainer: {
    flex: 0.75,
    width: '100%',
    borderTopLeftRadius: windowWidth * 0.03,
    borderTopRightRadius: windowWidth * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_size: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.26,
    borderRadius: windowWidth * 0.01,
  },
  Bilgi2Container: {
    flex: 0.9,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ResimContainer: {
    height: '90%',
    flex: 0.3,
    borderRadius: windowWidth * 0.03,
  },
  DescriptionContainer: {
    height: '90%',
    flex: 0.6,
  },
  NameContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  Nametext: {
    fontSize: windowWidth * 0.045,
    color: '#4B4E6F',
    fontFamily: 'DoppioOne',
  },
  UnvanContainer: {
    flex: 0.3,
    bottom: windowWidth * 0.01,
    justifyContent: 'flex-start',
  },
  Unvantext: {
    fontSize: windowWidth * 0.03,
    color: '#4B4E6F',
    fontFamily: 'ABeeZee',
  },
  RandevuContainer: {
    flex: 0.25,
    width: '100%',
    backgroundColor: '#7C1241',
    borderBottomLeftRadius: windowWidth * 0.03,
    borderBottomRightRadius: windowWidth * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Randevutext: {
    fontSize: windowWidth * 0.035,
    color: 'white',
    fontFamily: 'ABeeZee',
  },
});
