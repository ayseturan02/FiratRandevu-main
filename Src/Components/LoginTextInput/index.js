import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';

const LoginTextInput = props => {
  const {icon, placeholder} = props;
  return (
    <View style={styles.position}>
      <TextInput
        style={styles.input_view}
        placeholder={placeholder}
        placeholderTextColor={'#8F9194'}
        FontSize={windowWidth * 0.07}></TextInput>
      <View>
        <View style={styles.icon_view}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.view_position}>
              <View style={styles.view}></View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={icon} style={styles.icon_size} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginTextInput;
