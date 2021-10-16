import React from 'react';
import { View } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './BlocksPragraph.style';

function BlocksParagraph({ item }: SwiperItemProps): JSX.Element {
  return (
    <>
      {item.blocks.map((mappedBlocks, index) => {
        return mappedBlocks.type == 'paragraphe' ? (
          <View style={styles.paragraphBlockContainer} key={index}>
            {tagParser(mappedBlocks.text, styles.paragraphBlockText)}
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
    </>
  );
}

export default React.memo(BlocksParagraph);
