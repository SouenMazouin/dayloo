import React from 'react';
import { View } from 'react-native';

import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './BlocksSeparator.style';

const BlocksSeparator = ({ category }: SwiperItemProps): JSX.Element => {
  return (
    <View style={styles.blocksSeparatorContainer}>
      <View style={[styles.blocksSeparator, { backgroundColor: category.lightColor }]}></View>
    </View>
  );
};

export default React.memo(BlocksSeparator);
