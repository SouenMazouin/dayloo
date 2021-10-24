import React from 'react';
import { View } from 'react-native';

import BlocksTable from './BlocksTable';
import BlocksParagraph from './BlocksParagraph';
import BlocksSeprarator from './BlocksSeprarator';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Blocks.style';

const Blocks = ({ index, item, category }: SwiperItemProps): JSX.Element => {
  return (
    <View style={styles.blocksContainer}>
      <BlocksTable index={index} item={item} category={category} />
      <BlocksSeprarator index={index} item={item} category={category} />
      <BlocksParagraph index={index} item={item} category={category} />
    </View>
  );
};

export default React.memo(Blocks);
