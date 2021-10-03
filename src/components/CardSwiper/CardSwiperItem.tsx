import React from 'react';
import { View, ScrollView } from 'react-native';

import CardSwiperLogoHeader from './CardSwiperLogoHeader';
import CardSwiperTitleHeader from './CardSwiperTitleHeader';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperItem.style';
import CardSwiperHighlightHeader from './CarSwiperHighlightHeader';
import CardSwiperBlocks from './CardSwiperBlocks';

export default function CardSwiperItem({ index, item, category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <CardSwiperLogoHeader index={index} item={item} category={category} />
        <CardSwiperTitleHeader index={index} item={item} category={category} />
        <CardSwiperHighlightHeader index={index} item={item} category={category} />
        <CardSwiperBlocks index={index} item={item} category={category} />
      </ScrollView>
    </View>
  );
}
