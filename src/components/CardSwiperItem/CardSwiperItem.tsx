import React from 'react';
import { View, ScrollView } from 'react-native';

import { tagParser } from '../../services/parsers/TagParser';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';

import styles from './CardSwiperItem.style';
import { highlightTitleSelector } from '../../services/selectors/HighlightTitleSelector';
import { logoCategorySelector } from '../../services/selectors/LogoCategorySelector';

export default function CardSwiperItem({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View style={styles.logoContainer}>
          {logoCategorySelector(item.idCategory, item.lineColor)}
        </View>
        <View style={styles.titleContainer}>
          {tagParser(item.title, styles.title)}
          {tagParser(item.subtitle, styles.subtitle)}
        </View>
        {highlightTitleSelector(
          item.highlight.content,
          item.highlight.type,
          styles.highlightTitleFormula,
          styles.highlightTitleFormulaContainer,
          styles.highlightTitleImage,
          styles.highlightTitleImageContainer,
        )}
      </ScrollView>
    </View>
  );
}
