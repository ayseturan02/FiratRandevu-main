import {Text, View, Dimensions, SafeAreaView, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Bilal} from './../../Assets/images/index';
import {Back} from './../../Components/index';
import styles from './styles';
import {leftArrowBlack, leftArrowWhite,leftArrow} from './../../Assets/icons/index';
const CardDetail = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <View style={styles.üst_view}>
          <View style={styles.view}>
          <Back left={leftArrow}/>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.image_position}>
                <Image source={Bilal} style={styles.image_size} />
              </View>
              <View>
                <View style={styles.text_position}>
                  <Text style={styles.text_style}>
                    Prof. Dr. Bilal ÜSTÜNDAĞ
                  </Text>
                  <Text style={styles.unvan_style}>Rektör Yardımcısı</Text>
                </View>
                <View style={styles.tel_position}>
                  <Text style={styles.tel_style}>424- 235225-000</Text>
                  <Text style={styles.email_style}>bustundag@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: windowWidth * 1, alignItems: 'flex-end'}}>
          <View style={styles.view3}></View>
        </View>
        <View>
          <View style={styles.date_view}>
            <View style={styles.date_position}>
              <Text style={styles.date_style}>14.06.2024 |</Text>
              <Text style={styles.clock_style}>14:00 - 15:00</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.description_style}>
                Randevu içeriği hakkında bilgi veren yazı....
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardDetail;
