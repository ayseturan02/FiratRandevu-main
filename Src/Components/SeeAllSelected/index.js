import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import HomePageCard from './../HomePageCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SeeAllSelected = () => {
  const [selectedText, setSelectedText] = useState('upcoming');

  const handlePress = text => {
    setSelectedText(text);
  };

  return (
    <View style={{bottom: windowHeight * 0.1}}>
      <View style={styles.container}>
        <View style={styles.text_position}>
          <View style={styles.text_size}>
            <TouchableOpacity onPress={() => handlePress('upcoming')}>
              <Text style={styles.text}>Güncel Randevular</Text>
              {selectedText === 'upcoming' && (
                <View style={{alignSelf: 'center'}}>
                  <View style={styles.underline} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('past')}>
              <Text style={styles.text}>Geçmiş Randevular</Text>
              {selectedText === 'past' && (
                <View style={{alignSelf: 'center'}}>
                  <View style={styles.underline} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {selectedText === 'upcoming' && <HomePageCard />}
    </View>
  );
};

export default SeeAllSelected;
