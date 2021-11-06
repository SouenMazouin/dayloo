import React from 'react';
import { View } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/@types/cardSwiper';
import styles from './BlocksPragraph.style';

const BlocksParagraph = ({ item }: SwiperItemProps): JSX.Element => {
  return (
    <View style={styles.paragraphBlockContainer}>
      {item.blocks.map((mappedBlocks, index) => {
        return mappedBlocks.type == 'paragraphe' ? (
          <View style={styles.paragraphBlockSubContainer} key={index}>
            {mappedBlocks.text != '' ? (
              tagParser(mappedBlocks.text, styles.paragraphBlockText)
            ) : (
              <></>
            )}
            {mappedBlocks.example != '' ? (
              tagParser(mappedBlocks.example, styles.paragraphBlockExample)
            ) : (
              <></>
            )}
          </View>
        ) : (
          <View key={index}></View>
        );
      })}
    </View>
  );
};

export default React.memo(BlocksParagraph);
