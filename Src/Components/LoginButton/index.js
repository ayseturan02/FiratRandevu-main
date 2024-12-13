import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  To,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const LoginButton = props => {
  const Navigation = useNavigation();
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={() => Navigation.navigate(RouterNames.HOMEPAGE)}>
        <View style={styles.view}>
          <View style={styles.button_position}>
            <Text style={styles.text_style}>Giriş yap</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginButton;
