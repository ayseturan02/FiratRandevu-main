import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {clock} from './../../Assets/icons/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TimePicker = ({time, setTime}) => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const openTimePicker = () => {
    setShowTimePicker(true);
  };

  const closeTimePicker = () => setShowTimePicker(false);

  const selectTime = () => {
    const selectedTime = `${selectedHour < 10 ? '0' : ''}${selectedHour}:${
      selectedMinute < 10 ? '0' : ''
    }${selectedMinute}`;
    setTime(selectedTime);
    closeTimePicker();
  };

  const incrementHour = () => {
    setSelectedHour(prev => (prev === 23 ? 0 : prev + 1));
  };

  const decrementHour = () => {
    setSelectedHour(prev => (prev === 0 ? 23 : prev - 1));
  };

  const incrementMinute = () => {
    setSelectedMinute(prev => (prev === 59 ? 0 : prev + 1));
  };

  const decrementMinute = () => {
    setSelectedMinute(prev => (prev === 0 ? 59 : prev - 1));
  };

  const handleHourChange = value => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0 && numValue < 24) {
      setSelectedHour(numValue);
    }
  };

  const handleMinuteChange = value => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0 && numValue < 60) {
      setSelectedMinute(numValue);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={openTimePicker}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: windowWidth * 0.08,
          }}>
          <Text
            style={{
              fontSize: windowWidth * 0.035,
              color: '#959DAD',
              fontFamily: 'AlfaSlabOne',
            }}>
            Saat:
          </Text>
          <View style={{margin: windowWidth * 0.01}}>
            <Image
              source={clock}
              style={{
                height: windowWidth * 0.045,
                width: windowWidth * 0.045,
              }}
            />
          </View>
          <View style={{margin: windowWidth * 0.006}}>
            {time && (
              <Text
                style={{
                  fontSize: windowWidth * 0.037,
                  fontFamily: 'ABeZee',
                  color: '#959DAD',
                  textDecorationLine: 'underline',
                }}>
                {time}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>

      {/* Time Picker Modal */}
      <Modal visible={showTimePicker} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Saat Seç</Text>
            <View style={styles.timePickerRow}>
              <View style={styles.timePickerColumn}>
                <TouchableOpacity
                  onPress={incrementHour}
                  style={styles.arrowButton}>
                  <Text style={styles.arrowButtonText}>▲</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.timePickerInput}
                  keyboardType="numeric"
                  maxLength={2}
                  value={selectedHour.toString().padStart(2, '0')}
                  onChangeText={handleHourChange}
                />
                <TouchableOpacity
                  onPress={decrementHour}
                  style={styles.arrowButton}>
                  <Text style={styles.arrowButtonText}>▼</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.timePickerSeparator}>:</Text>
              <View style={styles.timePickerColumn}>
                <TouchableOpacity
                  onPress={incrementMinute}
                  style={styles.arrowButton}>
                  <Text style={styles.arrowButtonText}>▲</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.timePickerInput}
                  keyboardType="numeric"
                  maxLength={2}
                  value={selectedMinute.toString().padStart(2, '0')}
                  onChangeText={handleMinuteChange}
                />
                <TouchableOpacity
                  onPress={decrementMinute}
                  style={styles.arrowButton}>
                  <Text style={styles.arrowButtonText}>▼</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={selectTime} style={styles.closeButton}>
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
    fontFamily: 'Alatsi',
    textAlign: 'center',
    marginBottom: windowHeight * 0.02,
  },
  timePickerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePickerColumn: {
    alignItems: 'center',
    marginHorizontal: windowWidth * 0.02,
  },
  arrowButton: {
    paddingVertical: windowWidth * 0.02,
  },
  arrowButtonText: {
    fontSize: windowWidth * 0.05,
    color: '#470221',
  },
  timePickerSeparator: {
    fontSize: windowWidth * 0.05,
  },
  timePickerInput: {
    fontSize: windowWidth * 0.05,
    width: windowWidth * 0.1,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: windowHeight * 0.03,
    backgroundColor: '#7C1241',
    padding: windowWidth * 0.02,
    borderRadius: windowWidth * 0.01,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
});

export default TimePicker;
