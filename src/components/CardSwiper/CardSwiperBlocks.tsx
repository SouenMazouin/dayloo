import React from 'react';
import { View } from 'react-native';

import tagParser from '../../services/parsers/TagParser';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperBlocks.style';

export default function CardSwiperBlocks({ item }: SwiperItemProps): JSX.Element {
  return (
    <View>
      {item.blocks.map((mappedBlocks, index) => {
        return mappedBlocks.type == 'table' ? (
          <View key={index}>
            {tagParser(mappedBlocks.example, styles.blockExample)}
            {tagParser(mappedBlocks.text)}
          </View>
        ) : (
          <View key={index}>
            {tagParser(mappedBlocks.example, styles.blockExample)}
            {tagParser(mappedBlocks.text)}
          </View>
        );
      })}
    </View>
  );
}
