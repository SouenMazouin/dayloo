import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './CardSwiperItem.style';
import { SwiperItemProps } from '../../shared/cardSwiper';

export default function CardSwiperItem({ item, index }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <Text>Index : {index}</Text>
        <Text style={styles.textItem}>{item.text}</Text>
      </ScrollView>
    </View>
  );
}
