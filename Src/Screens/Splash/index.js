import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import {SplashImage} from './../../Assets/images/index';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Splash = props => {
  const Navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Navigation.navigate(RouterNames.LOGIN)}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.text_position}>
          <View style={{left: windowWidth * 0.07}}>
            <Text style={styles.text_style}>FIRAT</Text>
          </View>
          <View style={{top: -windowWidth * 0.131, left: windowWidth * 0.238}}>
            <Text style={styles.text_style2}>randevu</Text>
          </View>
        </View>
        <View style={styles.image_position}>
          <Image source={SplashImage} style={styles.image_size} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Splash;
