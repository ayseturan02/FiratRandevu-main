import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const TwoChocieForSearch = props => {
  const {isim, Yer} = props;

  return (
    <TouchableOpacity
      style={Yer === 'Left' ? styles.containerLeft : styles.containerRight}>
      <Text
        style={
          Yer === 'Left' ? styles.text : [styles.text, {color: '#7C1241'}]
        }>
        {isim}
      </Text>
    </TouchableOpacity>
  );
};

export default TwoChocieForSearch;
