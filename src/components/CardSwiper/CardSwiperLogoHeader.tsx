import React from 'react';
import { View, Image } from 'react-native';

import logoCategorySelector from '../../services/selectors/LogoCategorySelector';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperLogoHeader.style';

export default function CardSwiperLogoHeader({ category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.logoContainer}>
      <View style={[{ borderColor: category?.lightColor }, styles.leftLine]} />
      <Image
        style={[{ backgroundColor: category?.lightColor }, styles.logoCategorie]}
        resizeMode={'contain'}
        source={logoCategorySelector(category.id)}
      />
      <View style={[{ borderColor: category?.lightColor }, styles.rightLine]} />
    </View>
  );
}
