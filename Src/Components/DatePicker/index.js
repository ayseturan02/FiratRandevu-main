import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {calendar} from './../../Assets/icons/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DatePicker = ({selectedDate, setSelectedDate}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const today = new Date();

  const openDatePicker = () => setShowDatePicker(true);
  const closeDatePicker = () => setShowDatePicker(false);

  const generateDays = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const daysArray = Array.from({length: firstDayOfMonth}, () => null).concat(
      Array.from({length: daysInMonth}, (_, i) => i + 1),
    );

    const totalSlots = Math.ceil(daysArray.length / 7) * 7;
    const paddedDaysArray = daysArray.concat(
      Array.from({length: totalSlots - daysArray.length}, () => null),
    );

    return paddedDaysArray;
  };

  const selectDate = day => {
    const selected = new Date(currentYear, currentMonth, day);
    const dayOfWeek = selected.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6 && day !== 7 && day !== 8) { // 0 is Sunday, 6 is Saturday
      setSelectedDate(selected);
      closeDatePicker();
    }
  };

  const navigateMonth = direction => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const formatSelectedDate = () => {
    if (selectedDate) {
      return selectedDate.toLocaleDateString('tr-TR', {
        month: 'long',
        day: 'numeric',
      });
    }
    return '';
  };

  return (
    <View>
      <TouchableOpacity onPress={openDatePicker}>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.47,
            alignItems: 'center',
            height: windowWidth * 0.08,
          }}>
          <Text
            style={{
              fontSize: windowWidth * 0.035,
              color: '#959DAD',
              fontFamily: 'AlfaSlabOne',
            }}>
            Tarih:
          </Text>
          <View style={{margin: windowWidth * 0.01}}>
            <Image
              source={calendar}
              style={{
                height: windowWidth * 0.04,
                width: windowWidth * 0.04,
              }}
            />
          </View>
          <View style={{margin: windowWidth * 0.005}}>
            {selectedDate && (
              <Text
                style={{
                  fontSize: windowWidth * 0.036,
                  fontFamily: 'ABeZee',
                  color: '#959DAD',
                  textDecorationLine: 'underline',
                }}>
                {formatSelectedDate()}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      <Modal visible={showDatePicker} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Tarih Seç</Text>
            <View style={styles.navigationContainer}>
              <TouchableOpacity
                onPress={() => navigateMonth(-1)}
                style={styles.navButton}>
                <Text style={styles.navButtonText}>‹</Text>
              </TouchableOpacity>
              <Text style={styles.monthYearText}>{`${new Date(
                currentYear,
                currentMonth,
              ).toLocaleDateString('tr-TR', {month: 'long'})}`}</Text>
              <TouchableOpacity
                onPress={() => navigateMonth(1)}
                style={styles.navButton}>
                <Text style={styles.navButtonText}>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.grid}>
              {['P', 'P', 'S', 'Ç', 'P', 'C', 'C'].map((day, index) => (
                <Text key={index} style={styles.gridHeader}>
                  {day}
                </Text>
              ))}
              {generateDays(currentMonth, currentYear).map((day, index) => {
                const date = new Date(currentYear, currentMonth, day);
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                const isToday =
                  date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear();
                const isBlockedDay =
                  currentMonth === 7 && (isWeekend || day === 7 || day === 8); // August is month 7 (0-based index)
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => day && selectDate(day)}
                    style={[
                      styles.gridItem,
                      !day && {backgroundColor: 'transparent'},
                      isBlockedDay && styles.disabledDay,
                      isToday && styles.today,
                    ]}
                    disabled={isBlockedDay}>
                    <Text style={{color: day ? 'black' : 'transparent'}}>
                      {day || ''}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity
              onPress={closeDatePicker}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Tamam</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    width: '90%',
    padding: windowWidth * 0.02,
    borderRadius: windowWidth * 0.02,
  },
  pickerTitle: {
    fontSize: windowWidth * 0.05,
    textAlign: 'center',
    marginBottom: windowWidth * 0.02,
    fontFamily: 'Alatsi',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowWidth * 0.02,
  },
  navButton: {
    padding: windowWidth * 0.03,
  },
  navButtonText: {
    fontSize: windowWidth * 0.08,
  },
  monthYearText: {
    fontSize: windowWidth * 0.05,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridHeader: {
    width: '13%',
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
  },
  gridItem: {
    width: '13%',
    padding: windowWidth * 0.02,
    alignItems: 'center',
  },
  disabledDay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  today: {
    borderWidth: 2,
    borderColor: '#7C1241',
    borderRadius: windowWidth * 0.02,
  },
  closeButton: {
    marginTop: windowWidth * 0.04,
    backgroundColor: '#7C1241',
    padding: windowWidth * 0.02,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.05,
  },
});

export default DatePicker;
