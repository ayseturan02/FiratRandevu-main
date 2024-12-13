import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    padding: windowWidth * 0.02,
    borderBottomColor:"#E2E1E1",
    borderBottomWidth:2
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
    width: windowWidth * 0.07,
    textAlign: 'center',
    fontWeight: '700',
    fontSize:windowWidth*0.03
  },
  dates: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  date: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    margin: windowWidth * 0.024,
    marginRight: windowWidth * 0.033,
  },
  day_text: {
    fontSize: windowWidth * 0.037,
    fontWeight: '400',
    color:"black"
  },
  selectedDate: {
    backgroundColor: '#9b1e48',
    borderRadius: windowWidth*0.3,
  },
  selectedDateText: {
    color: 'white',
    fontSize: windowWidth * 0.037,
    fontWeight: '400',
  },
  todayDate: {
    backgroundColor: 'white',
    borderRadius: windowWidth*0.3,
    borderWidth: 3,
    borderColor: '#9b1e48',
  },
  todayDateText: {
    color: 'black',
  },
  calendarContainer: {
    overflow: 'hidden',
  },
  button: {
    alignItems:'center',
    justifyContent:'flex-start',
  },
  openClose:{
    width:windowWidth*0.04,
    height:windowHeight*0.02,
  },
  
});
export default styles;
