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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 30,
              paddingBottom: 12,
            }}
            key={index}>
            {mappedBlocks.highlight.type == 'icon' ? (
              <>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={blocksIconMapper(mappedBlocks.highlight.content)}
                />
                <View style={{ paddingLeft: 25 }}>
                  {tagParser(mappedBlocks.text, styles.blockText)}
                  {mappedBlocks.example != '' ? (
                    tagParser(mappedBlocks.example, styles.blockExample)
                  ) : (
                    <></>
                  )}
                </View>
              </>
            ) : (
              <>
                {tagParser(mappedBlocks.highlight.content)}
                <View style={{ paddingLeft: 25 }}>
                  {tagParser(mappedBlocks.text)}
                  {mappedBlocks.example != '' ? (
                    tagParser(mappedBlocks.example, styles.blockExample)
                  ) : (
                    <></>
                  )}
                </View>
              </>
            )}
          </View>
        ) : (
          <View style={{ paddingLeft: 20, paddingBottom: 15 }} key={index}>
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
