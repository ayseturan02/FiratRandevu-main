import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import styles from './style';

const SelectListBox = () => {
  const [selected, setSelected] = useState('');
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
  const data = [
    {key: '1', value: 'Bilgisayar Mühendisliği', disabled: true},
    {key: '2', value: 'Yazılım Müh'},
    {key: '3', value: 'Elektirik Müh'},
    {key: '4', value: 'Yapay zeka', disabled: true},
    {key: '5', value: 'Tıp'},
    {key: '6', value: 'Eczacılık'},
    {key: '7', value: 'Diş'},
  ];
  const data2 = [
    {key: '1', value: 'Akademik', disabled: true},
    {key: '2', value: 'İdari'},
  ];
  return (
    <ScrollView
      style={styles.SelectContainer}
      showsVerticalScrollIndicator={false}
      
      >
      <View style={styles.GenelContainer}>
        <Text style={styles.text}>Bölüm Seçin*</Text>
        <SelectList
          setSelected={val => {
            setSelected(val);
            const selectedItem = data.find(item => item.value === val);
            if (selectedItem) {
              setSelectedKey(selectedItem.key);
              if (
                selectedItem.key === '1' ||
                selectedItem.key === '2' ||
                selectedItem.key === '3'
              ) {
                setIndicatorVisible(true);
              } else {
                setIndicatorVisible(false);
              }
            }
          }}
          data={data}
          save="value"
          boxStyles={styles.box}
          dropdownStyles={styles.dropdown}
          placeholder="Yazılım,Bilgisayar,..."
        />
      </View>
      <View style={styles.GenelContainer}>
        {indicatorVisible && (
          <Text style={styles.text}>Personel Birimi Seçin*</Text>
        )}
        {indicatorVisible && (
          <SelectList
            setSelected={val => setSelected(val)}
            data={data2}
            save="value"
            boxStyles={styles.box}
            dropdownStyles={styles.dropdown}
            placeholder="Akademik,İdari"
          />
        )}
      </View>
    </ScrollView>
  );
};

export default SelectListBox;
