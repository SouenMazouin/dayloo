import React from 'react';
import { View } from 'react-native';

import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Blocks.style';
import BlocksTable from './BlocksTable';
import BlocksParagraph from './BlocksParagraph';

function Blocks({ item, category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.blocksContainer}>
      <BlocksTable item={item} />
      <View style={styles.blocksSeparatorContainer}>
        <View style={[styles.blocksSeparator, { backgroundColor: category?.lightColor }]}></View>
      </View>
      <BlocksParagraph item={item} />
    </View>
  );
}

export default React.memo(Blocks);
