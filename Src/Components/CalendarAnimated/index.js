import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import React, {useState, useRef} from 'react';

import {left_arrow, right_arrow} from '../../Assets/icons';
import styles from './styles';
import {upload, arrow_down} from '../../Assets/icons';
const daysOfWeek = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

const CalendarAnimated = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

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
    setSelectedDate(newSelectedDate);
  };

  const toggleExpand = () => {
    if (isExpanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsExpanded(false));
    } else {
      setIsExpanded(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
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
    const day = currentDate.getDay();
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
      const isSelected =
        selectedDate &&
        selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getDate() === day;

      const isToday =
        today.getFullYear() === currentDate.getFullYear() &&
        today.getMonth() === currentDate.getMonth() &&
        today.getDate() === day;

      dates.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.date,
            isSelected && styles.selectedDate,
            isToday && styles.todayDate,
          ]}
          onPress={() => handleDatePress(day)}>
          <Text
            style={
              isSelected
                ? styles.selectedDateText
                : isToday
                ? styles.day_text
                : styles.day_text
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
  const containerHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [90, 280], // Dar ve geniş hallerin yükseklik değerleri
  });

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      <Animated.View
        style={[styles.calendarContainer, {height: containerHeight}]}>
        {renderDates()}
      </Animated.View>
      <TouchableOpacity onPress={toggleExpand} style={styles.button}>
        <View>
          <Text style={styles.buttonText}>
            {isExpanded ? (
              <Image style={styles.openClose} source={upload} />
            ) : (
              <Image style={styles.openClose} source={arrow_down} />
            )}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarAnimated;
