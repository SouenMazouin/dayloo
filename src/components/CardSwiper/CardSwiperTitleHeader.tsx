import React from 'react';
import { View } from 'react-native';

import tagParser from '../../services/parsers/TagParser';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperTitleHeader.style';

export default function CardSwiperTitleHeader({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.titleContainer}>
      {tagParser(item.title, styles.title)}
      {item.subtitle != '' ? tagParser(item.subtitle, styles.subtitle) : <></>}
    </View>
  );
}
