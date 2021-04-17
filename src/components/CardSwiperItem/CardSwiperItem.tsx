import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MathView from 'react-native-math-view';

import styles from './CardSwiperItem.style';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';

function tagParser(element: string) {
  const tagExtract = element.substring(0, 6);
  const renderElement = element.slice(6, -6);

  if (tagExtract == '<bold>') {
    return <Text style={{ fontWeight: 'bold' }}>{renderElement}</Text>;
  } else if (tagExtract == '<math>') {
    return <MathView math={renderElement} />;
  } else {
    return <Text style={styles.textItem}>{element}</Text>;
  }
}

export default function CardSwiperItem({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <View>{tagParser(item.title)}</View>
        <View>{tagParser(item.subtitle)}</View>
        <Text></Text>
      </ScrollView>
    </View>
  );
}
