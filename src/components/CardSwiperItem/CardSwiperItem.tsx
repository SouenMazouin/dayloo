// TODO: Refacto
import React from 'react';
import { View, ScrollView } from 'react-native';

import { TagParser, ImageCategory } from '../../services/Parsers';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';

export default function CardSwiperItem({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          {ImageCategory(item.idCategory, item.leftLineColor, item.rightLineColor)}
        </View>
        <View style={styles.itemTitleContainer}>
          {TagParser(item.title, styles.itemTitle)}
          {TagParser(item.subtitle)}
        </View>
      </ScrollView>
    </View>
  );
}
