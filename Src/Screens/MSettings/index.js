import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Back, Button, SettingBox} from '../../Components';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {language, notification, rightArrowQ, theme} from '../../Assets/icons';
import {useState} from 'react';
const MSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  return (
    <SafeAreaView>
      <View style={{paddingLeft: windowWidth * 0.03}}>
        <View
          style={{
            height: windowWidth * 0.13,
            width: windowWidth * 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: windowWidth * 0.07,
              fontFamily: 'Alatsi',
              color: '#4C4E70',
            }}>
            Ayarlar
          </Text>
        </View>
      </View>
      <SettingBox
        icon={theme}
        title={'Koyu Tema'}
        hasSwitch={true}
        switchValue={darkMode}
        onSwitchChange={value => setDarkMode(value)}
      />
      <SettingBox
        icon={notification}
        title={'Bildirimler'}
        hasSwitch={true}
        switchValue={notifications}
        onSwitchChange={value => setNotifications(value)}
      />
      <SettingBox icon={language} title={'Dili Değiştir'} icon2={rightArrowQ} />

      <Button name="Çıkış Yap" />
    </SafeAreaView>
  );
};

export default MSettings;
