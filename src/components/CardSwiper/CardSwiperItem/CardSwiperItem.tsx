import React from 'react';
import { View, ScrollView } from 'react-native';

import Logo from './Logo/Logo';
import Title from './Title/Title';
import Highlight from './Highlight/Highlight';
import Blocks from './Blocks/Blocks';
import { SwiperItemProps } from '../../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';

function CardSwiperItem({ index, item, category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        <Logo index={index} item={item} category={category} />
        <Title index={index} item={item} category={category} />
        <Highlight index={index} item={item} category={category} />
        <Blocks index={index} item={item} category={category} />
      </ScrollView>
    </View>
  );
}

export default React.memo(CardSwiperItem);
