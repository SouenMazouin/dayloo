import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

import tagParser from '../../services/parsers/TagParser';
import highlightTitleSelector from '../../services/selectors/HighlightTitleSelector';
import logoCategorySelector from '../../services/selectors/LogoCategorySelector';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';

export default function CardSwiperItem({ item, category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View style={styles.logoContainer}>
          <View style={[{ borderColor: category?.lightColor }, styles.leftLine]} />
          <Image
            style={[{ backgroundColor: category?.lightColor }, styles.logoCategorie]}
            resizeMode={'contain'}
            source={logoCategorySelector(category?.id)}
          />
          <View style={[{ borderColor: category?.lightColor }, styles.rightLine]} />
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
        <View>
          {item.blocks.map((mappedBlocks, index) => {
            return mappedBlocks.type == 'table' ? (
              tagParser(mappedBlocks.text, undefined, undefined, index)
            ) : (
              <Text key={index}>{mappedBlocks.type}</Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
