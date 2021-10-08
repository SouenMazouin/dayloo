import React from 'react';
import { View } from 'react-native';

import tagParser from '../../services/parsers/TagParser';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperBlocks.style';

function CardSwiperBlocks({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.blocksContainer}>
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

export default React.memo(CardSwiperBlocks);
