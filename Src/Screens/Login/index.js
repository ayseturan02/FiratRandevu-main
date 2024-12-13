import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {loginLogo} from '../../Assets/images/index';
import {user1, key, check2} from '../../Assets/icons';
import {LoginTextInput, LoginButton} from '../../Components/index';
import styles from './styles';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: '#F9F8F8', height: windowHeight}}>
      <View>
        <View style={styles.logo_position}>
          <Image source={loginLogo} style={styles.logo_size} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text_style}>Merkezi Kimlik</Text>
          <Text style={styles.text_style}>Doğrulama Sistemi</Text>
        </View>
        <View style={styles.textInput_position}>
          <LoginTextInput placeholder={'   Kullanıcı Adı'} icon={user1} />
          <LoginTextInput placeholder={'   Parola'} icon={key} />
        </View>
        <View
          style={{
            height: windowHeight * 0.1,
            justifyContent: 'center',
            width: windowWidth * 0.9,
            alignSelf: 'flex-start',
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setIsChecked(!isChecked)}>
              <View style={styles.checkbox}>
                {isChecked && (
                  <Image
                    source={check2}
                    style={{
                      height: windowWidth * 0.035,
                      width: windowWidth * 0.035,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>

            <Text style={styles.label}>şifreyi hatırla</Text>
          </View>
        </View>

        <LoginButton />
      </View>
    </SafeAreaView>
  );
};

export default Login;
