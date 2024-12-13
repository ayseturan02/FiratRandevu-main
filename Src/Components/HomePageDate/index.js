import {Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';

const HomePageDate = () => {
  const [currentDate, setCurrentDate] = useState({gun: '', ayAdi: ''});

  useEffect(() => {
    const yeniTarih = new Date();
    const gun = yeniTarih.getDate();
    const ayAdlari = [
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
    const ayAdi = ayAdlari[yeniTarih.getMonth()];

    setCurrentDate({gun: gun.toString(), ayAdi: ayAdi});
  }, []);

  return (
    <View style={styles.date_position}>
      <Text style={styles.dayStyle}>{currentDate.gun}</Text>
      <View style={{bottom: windowHeight * 0.01}}>
        <Text style={styles.monthStyle}>{currentDate.ayAdi}</Text>
      </View>
    </View>
  );
};

export default HomePageDate;
