import React from 'react';
import { View, Image } from 'react-native';

import logoCategoryMapper from '../../../../services/mappers/LogoCategoryMapper';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Logo.style';

const Logo = ({ category }: SwiperItemProps): JSX.Element => {
  return (
    <View style={styles.logoContainer}>
      <View style={[{ borderColor: category?.lightColor }, styles.leftLine]} />
      <Image
        style={[{ backgroundColor: category?.lightColor }, styles.logoCategorie]}
        resizeMode={'contain'}
        source={logoCategoryMapper(category?.id)}
      />
      <View style={[{ borderColor: category?.lightColor }, styles.rightLine]} />
    </View>
  );
};

export default React.memo(Logo);
