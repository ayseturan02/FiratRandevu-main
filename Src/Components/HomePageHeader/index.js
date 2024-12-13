import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import styles from './styles';
import {bell} from './../../Assets/icons/index';
import {HomePageDate} from './../../Components/index';
import {useNavigation} from '@react-navigation/native';

const HomePageHeader = props => {
  const Navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.header_color}>
        <View style={{padding: windowWidth * 0.03}}>
          <TouchableOpacity
            onPress={() => Navigation.navigate(RouterNames.NOTIFICATIONS)}>
            <Image source={bell} style={styles.icon_size} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.date_position}>
        <HomePageDate />
      </View>
    </View>
  );
};

export default HomePageHeader;
