import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: windowWidth * 0.02,
  },
  row_conteiner: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowWidth * 0.04,
  },
  text1: {
    fontSize: windowWidth * 0.07,
    color: 'black',
    fontWeight: '600',
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: windowWidth * 0.01,
  },
  rightArrow: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.03,
    resizeMode: 'contain',
    marginTop: windowHeight * 0.007,
  },
  dayOfWeek: {
    width: windowHeight * 0.04,
    textAlign: 'center',
    fontWeight: '700',
  },
  dates: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  date: {
    width: windowWidth * 0.08,
    height: windowHeight * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    margin: windowWidth * 0.024,
    marginRight: windowWidth * 0.033,
  },
  day_text: {
    fontSize: windowWidth * 0.037,
    fontWeight: '400',
  },
  selectedDate: {
    backgroundColor: '#9b1e48',
    borderRadius: 20,
  },
  selectedDateText: {
    color: 'white',
  },
  todayDate: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#9b1e48',
  },
  todayDateText: {
    color: 'black',
  },
  image: {
    resizeMode: 'contain',
    width: windowWidth * 0.05,
    height: windowHeight * 0.05,
  },
  dateConteiner: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    margin: windowWidth * 0.02,
    borderWidth: windowWidth * 0.001,
    borderRadius: windowWidth * 0.02,
    borderColor: 'gray',
  },
  dateText: {
    fontWeight: '600',
    color: 'black',
  },
  containerr: {
    margin: windowWidth * 0.05,
  },

  textConteiner: {
    width: windowWidth * 0.87,
    height: windowHeight * 0.15,
    borderWidth: windowWidth * 0.003,
    borderColor: '#CFCFCF',
    borderRadius: windowWidth * 0.025,
    marginTop: windowHeight * 0.01,
    padding: windowWidth * 0.02,
  },
  textInput: {
    fontSize: windowWidth * 0.035,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: windowHeight * 0.03,
  },
  modalContent: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.35,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.07,
  },
  modalTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
  },
  onayButton: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.055,
    backgroundColor: '#9b1e48',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onaylaText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
    color: 'white',
  },
  touchableButton: {
    alignItems: 'flex-end',
    marginTop: windowHeight * 0.02,
  },
  commentText: {
    color: '#C9C3C3',
    fontWeight: '500',
  },
  cancelButton: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.02,
    borderColor: '#9A9A9A',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  approvedButton: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    backgroundColor: '#9A9A9A',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#9A9A9A',
    fontWeight: '500',
  },
  approvedText: {
    color: 'white',
    fontWeight: '500',
  },
  buttonConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalFlex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFlex1: {
    alignItems: 'center',
    margin: windowWidth * 0.03,
    height: windowHeight * 0.18,
  },
  line: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.01,
    backgroundColor: '#9b1e48',
    borderRadius: windowWidth * 0.01,
    margin: windowWidth * 0.02,
  },
});
export default styles;
