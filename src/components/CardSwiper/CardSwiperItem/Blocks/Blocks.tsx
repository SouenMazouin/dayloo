import React from 'react';
import { View } from 'react-native';

import BlocksTable from './BlocksTable';
import BlocksParagraph from './BlocksParagraph';
import BlocksSeprarator from './BlocksSeprarator';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Blocks.style';

const Blocks = ({ item, category }: SwiperItemProps): JSX.Element => {
  return (
    <View style={styles.blocksContainer}>
      <BlocksTable item={item} />
      <BlocksSeprarator item={item} category={category} />
      <BlocksParagraph item={item} />
    </View>
  );
};

export default React.memo(Blocks);
