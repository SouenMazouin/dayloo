/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { TagParser } from '../../services/parser/Parser';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';

export default function CardSwiperItem({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View>{TagParser(item.title, styles.itemTitle)}</View>
      </ScrollView>
    </View>
  );
}
