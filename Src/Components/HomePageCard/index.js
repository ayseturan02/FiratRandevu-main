import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {calendar1, clock} from './../../Assets/icons/index';
import {Bilal} from './../../Assets/images/index';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const HomePageCard = () => {
  const Navigation = useNavigation();

  // Verileri burada tanımlayın
  const data = {
    imageSource: Bilal,
    name: 'Prof. Dr. Bilal ÜSTÜNDAĞ',
    title: 'Rektör Yardımcısı',
    date: 'Salı, 12 Haziran',
    timeStart: '11:00',
    timeEnd: '12:00 AM'
  };

  return (
    <View style={styles.card_position}>
      <TouchableWithoutFeedback
        onPress={() => Navigation.navigate(RouterNames.CARD_DETAIL)}>
        <View style={styles.card_style}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.image_position}>
              <Image source={data.imageSource} style={styles.image_size} />
            </View>
            <View style={{top: windowWidth * 0.08}}>
              <View style={styles.text_position}>
                <View>
                  <Text style={styles.name_text_style}>{data.name}</Text>
                </View>
                <View>
                  <Text style={styles.text_style}>{data.title}</Text>
                </View>
              </View>
              <View style={styles.icon_position}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image source={calendar1} style={styles.icon_calendar} />
                  </View>
                  <View style={styles.date_position}>
                    <Text style={styles.text_calendar}>{data.date}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image source={clock} style={styles.icon_clock} />
                  </View>
                  <View style={styles.date_position}>
                    <Text style={styles.text_clock}>{`${data.timeStart} - ${data.timeEnd}`}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HomePageCard;
