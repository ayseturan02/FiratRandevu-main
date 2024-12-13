import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {left_arrow, right_arrow, calendar2, clock1} from '../../Assets/icons';
import {B1, TimeRange} from '..';

const daysOfWeek = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const windowWidth = Dimensions.get('window').width;
const Calendar_Strcr = () => {
  const [selectedStartHour, setSelectedStartHour] = useState('09:00');
  const [selectedEndHour, setSelectedEndHour] = useState('10:00');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  // Ayın kaç gün içerdiğini gösterir.
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Ayın ilk günü hangi gün ile başladığını gösterir.
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 0).getDay();
  };

  const handleDatePress = day => {
    const newSelectedDate = new Date(currentDate);
    newSelectedDate.setDate(day);
    if (!selectedStartDate || selectedEndDate) {
      setSelectedStartDate(newSelectedDate);
      setSelectedEndDate(null);
    } else if (newSelectedDate >= selectedStartDate) {
      setSelectedEndDate(newSelectedDate);
    } else {
      setSelectedStartDate(newSelectedDate);
      setSelectedEndDate(null);
    }
  };

  const renderHeader = () => {
    const monthNames = [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ];
    //şuanki yıl ve ay değerlei alınır.
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Image source={left_arrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <Text style={styles.text1}>
          {monthNames[month]} {year}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Image source={right_arrow} style={styles.rightArrow} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderDaysOfWeek = () => {
    return (
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeek}>
            {day}
          </Text>
        ))}
      </View>
    );
  };

  const renderDates = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear(),
    );
    const firstDay = getFirstDayOfMonth(
      currentDate.getMonth(),
      currentDate.getFullYear(),
    );
    const today = new Date();
    const dates = [];
    //ayın ilk gününden önceki boş hücreleri oluşturur.
    for (let i = 0; i < firstDay; i++) {
      dates.push(<View key={`empty-${i}`} style={styles.date}></View>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelectedStartDate =
        selectedStartDate &&
        selectedStartDate.getFullYear() === currentDate.getFullYear() &&
        selectedStartDate.getMonth() === currentDate.getMonth() &&
        selectedStartDate.getDate() === day;

      const isSelectedEndDate =
        selectedEndDate &&
        selectedEndDate.getFullYear() === currentDate.getFullYear() &&
        selectedEndDate.getMonth() === currentDate.getMonth() &&
        selectedEndDate.getDate() === day;

      const isToday =
        today.getFullYear() === currentDate.getFullYear() &&
        today.getMonth() === currentDate.getMonth() &&
        today.getDate() === day;

      dates.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.date,
            isSelectedStartDate && styles.selectedDate,
            isSelectedEndDate && styles.selectedDate,
            isToday && styles.todayDate,
          ]}
          onPress={() => handleDatePress(day)}>
          <Text
            style={
              isSelectedStartDate || isSelectedEndDate
                ? styles.selectedDateText
                : isToday
                ? styles.todayDateText
                : null
            }>
            {day}
          </Text>
        </TouchableOpacity>,
      );
    }

    // Ayın son gününden sonraki Pazar gününe kadar boş hücreleri oluşturur.
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      daysInMonth,
    ).getDay();
    const remainingDays = (7 - (lastDayOfMonth + 1)) % 7; // Pazar gününe kadar olan boş günler

    for (let i = 0; i < remainingDays; i++) {
      dates.push(
        <View key={`empty-${daysInMonth + i + 1}`} style={styles.date}></View>,
      );
    }

    return <View style={styles.dates}>{dates}</View>;
  };

  const changeMonth = increment => {
    setCurrentDate(
      new Date(currentDate.setMonth(currentDate.getMonth() + increment)),
    );
  };
  const handelpress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDates()}
      <View style={styles.containerr}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View>
              <Text>Randevu Başlangıç Tarihi</Text>
            </View>
            <View style={styles.row_conteiner}>
              <View>
                <Image style={styles.image} source={calendar2} />
              </View>
              <View style={styles.dateConteiner}>
                <Text style={styles.dateText}>
                  {selectedStartDate
                    ? selectedStartDate.toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })
                    : 'Seçili değil'}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View>
              <Text>Randevu Bitiş Tarihi</Text>
            </View>
            <View style={styles.row_conteiner}>
              <View>
                <Image style={styles.image} source={calendar2} />
              </View>
              <View style={styles.dateConteiner}>
                <Text style={styles.dateText}>
                  {selectedEndDate
                    ? selectedEndDate.toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })
                    : 'Seçili değil'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View>
              <Text>Başlangıç ve Bitiş saati</Text>
            </View>
            <View style={styles.row_conteiner}>
              <View>
                <Image style={styles.image} source={clock1} />
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible2(true)}
                style={styles.dateConteiner}>
                <Text>{selectedStartHour}-{selectedEndHour}</Text>
              </TouchableOpacity>
              <Modal
                visible={modalVisible2}
                animationType="none"
                transparent={true}
                onRequestClose={() => setModalVisible2(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.line}></View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          height: windowWidth * 0.43,
                          width: windowWidth * 0.75,
                          marginTop:windowWidth*0.02
                        }}>
                        <View>
                          <Text>Başlangıç saati</Text>
                          <TimeRange
                            
                             />
                        </View>
                        <View>
                          <Text>Bitiş saati</Text>
                          <TimeRange
                            
                             />
                        </View>
                      </View>
                    </View>
                    <View style={styles.buttonConteiner}>
                      <TouchableOpacity onPress={() => setModalVisible2(false)}>
                        <View style={styles.cancelButton}>
                          <Text style={styles.cancelText}>İptal</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setModalVisible2(false)}>
                        <View style={styles.approvedButton}>
                          <Text style={styles.approvedText}>Onayla</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.dateText}>Açıklama</Text>
        </View>
        <View style={styles.textConteiner}>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={3}
            maxLength={150}
            placeholder="Açıklama giriniz"
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <TouchableOpacity style={styles.touchableButton} onPress={handelpress}>
          <View style={styles.onayButton}>
            <Text style={styles.onaylaText}>Onayla</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.line}></View>
            </View>
            <View style={styles.modalFlex}>
              <Text style={styles.modalTitle}>
                {selectedStartDate?.toLocaleDateString('tr-TR')}{' '}
                {selectedStartHour}-{' '}
                {selectedEndDate?.toLocaleDateString('tr-TR')} {selectedEndHour}
              </Text>
            </View>
            <View style={styles.modalFlex1}>
              <Text style={styles.commentText}>
                Tarihleri arasında "{description}" sebebiyle tarafınıza randevu
                alınamıyacaktır.Onaylıyor musunuz?
              </Text>
            </View>
            <View style={styles.buttonConteiner}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.cancelButton}>
                  <Text style={styles.cancelText}>İptal</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.approvedButton}>
                  <Text style={styles.approvedText}>Onayla</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Calendar_Strcr;
