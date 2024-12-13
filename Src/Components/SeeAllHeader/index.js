import {View, Image} from 'react-native';
import React from 'react';
import {header1, header2} from './../../Assets/images/index';
import styles from './styles';
import {Back} from './../../Components/index';
import {leftArrowWhite} from './../../Assets/icons/index';

const SeeAllHeader = () => {
  return (
    <View style={styles.header_color}>
      <Back left={leftArrowWhite} />
      <View style={styles.header}>
        <Image source={header2} style={styles.header2_position} />
        <Image source={header2} style={styles.header1_position} />
      </View>
    </View>
  );
};

export default SeeAllHeader;
