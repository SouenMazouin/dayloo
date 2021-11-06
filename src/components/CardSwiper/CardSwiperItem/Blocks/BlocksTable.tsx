import React from 'react';
import { Image, View } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/@types/cardSwiper';
import styles from './BlocksTable.style';

const BlocksTable = ({ item }: SwiperItemProps): JSX.Element => {
  return (
    <>
      {item.blocks.map((mappedBlocks, index) => {
        return mappedBlocks.type == 'table' ? (
          <View key={index}>
            {mappedBlocks.highlight.type == 'icon' ? (
              <View style={styles.blocksSubContainers}>
                <Image
                  style={styles.icons}
                  source={{ uri: `asset:/images/icons/${mappedBlocks.highlight.content}.png` }}
                />
                <View style={styles.blockTableContainer}>
                  {tagParser(mappedBlocks.text, styles.blockText, styles.blockMath)}
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
          <View key={index}></View>
        );
      })}
    </>
  );
};

export default React.memo(BlocksTable);
