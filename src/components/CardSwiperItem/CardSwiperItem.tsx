import React from 'react';
import { View, ScrollView } from 'react-native';

import { tagParser } from '../../services/Parsers';
import { logoCategorySelector } from '../../services/Injectors';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';

import styles from './CardSwiperItem.style';

export default function CardSwiperItem({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View style={styles.logoContainer}>
          {logoCategorySelector(item.idCategory, item.lineColor)}
        </View>
        <View style={styles.titleContainer}>
          {tagParser(item.title, styles.title)}
          {tagParser(item.subtitle)}
        </View>
      </ScrollView>
    </View>
  );
}
