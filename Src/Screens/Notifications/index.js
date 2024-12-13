import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTab, HeaderNotifications, MeetBox} from '../../Components';
import {Soner, Bilal} from '../../Assets/images';
const Notifications = () => {
  const exampleData = [
    {
      type: 'gelen randevu isteği',
      name: 'Prof. Dr. Soner ÖZGEN HESHBCSNC',
      title: 'Rektör Yardımcısı',
      image: Soner,
      status: '',
    },
    {
      type: 'gönderilen randevu talebi',
      name: 'Prof. Dr. Bilal ÜSTÜNDAĞffSFS',
      title: 'Rektör Yardımcısı',
      image: Bilal,
      status: 'ONAYLANDI',
    },
    {
      type: 'gönderilen randevu talebi',
      name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
      title: 'Rektör Yardımcısı',
      image: Bilal,
      status: 'REDDEDİLDİ',
    },
    {
      type: 'gönderilen randevu talebi',
      name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
      title: 'Rektör Yardımcısı',
      image: Bilal,
      status: 'ONAYLANDI',
    },
    {
      type: 'gönderilen randevu talebi',
      name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
      title: 'Rektör Yardımcısı',
      image: Bilal,
      status: 'REDDEDİLDİ',
    },
    {
      type: 'gönderilen randevu talebi',
      name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
      title: 'Rektör Yardımcısı',
      image: Bilal,
      status: 'ONAYLANDI',
    },
    {
      type: 'gönderilen randevu talebi',
      name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
      title: 'Rektör Yardımcısı',
      image: Bilal,
      status: 'REDDEDİLDİ',
    },
  ];

  return (
    <SafeAreaView>
      <HeaderNotifications />
      <ScrollView showsVerticalScrollIndicator={false}>
        {exampleData.map((item, index) => (
          <MeetBox
            key={index}
            type={item.type}
            name={item.name}
            title={item.title}
            image={item.image}
            status={item.status}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
