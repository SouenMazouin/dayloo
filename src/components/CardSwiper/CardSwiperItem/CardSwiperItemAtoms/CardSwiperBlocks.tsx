import React from 'react';
import { Image, View } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import blocksIconMapper from '../../../../services/mappers/BlocksIconsMapper';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperBlocks.style';
// TODO: REFACTO
function CardSwiperBlocks({ item }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.blocksContainer}>
      {item.blocks.map((mappedBlocks, index) => {
        return mappedBlocks.type == 'table' ? (
          <View key={index}>
            {mappedBlocks.highlight.type == 'icon' ? (
              <View style={styles.blocksSubContainers}>
                <Image
                  style={styles.icons}
                  source={blocksIconMapper(mappedBlocks.highlight.content)}
                />
                <View style={styles.blockTableContainer}>
                  {tagParser(mappedBlocks.text, styles.blockText)}
                  {mappedBlocks.example != '' ? (
                    tagParser(mappedBlocks.example, styles.blockExample)
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            ) : (
              <View style={styles.blocksSubContainers}>
                {tagParser(mappedBlocks.highlight.content)}
                <View style={styles.blockTableContainer}>
                  {tagParser(mappedBlocks.text)}
                  {mappedBlocks.example != '' ? (
                    tagParser(mappedBlocks.example, styles.blockExample)
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.paragraphBlockContainer} key={index}>
            {tagParser(mappedBlocks.text, styles.paragraphBlockText)}
            {mappedBlocks.example != '' ? (
              tagParser(mappedBlocks.example, styles.paragraphBlockExample)
            ) : (
              <></>
            )}
          </View>
        );
      })}
    </View>
  );
}

export default React.memo(CardSwiperBlocks);
