import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { tagParser } from '../../services/Parsers';
import { logoCategorySelector } from '../../services/injectors';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';
import MathView from 'react-native-math-view';

export default function CardSwiperItem({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View style={styles.logoContainer}>
          {logoCategorySelector(item.idCategory, item.leftLineColor, item.rightLineColor)}
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>{tagParser(item.title)}</Text>
          <Text>{tagParser(item.subtitle)}</Text>
          <MathView math={'P(E) = {n \\choose k} p^k (1-p)^{n-k}'} />
        </View>
      </ScrollView>
    </View>
  );
}
