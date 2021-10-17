import React from 'react';
import { View, Image } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Highlight.style';

const Highlight = ({ item }: SwiperItemProps): JSX.Element => {
  return (
    <View>
      {item.highlight.type == 'formule' ? (
        <View style={styles.highlightTitleFormulaContainer}>
          {tagParser(item.highlight.content, undefined, styles.highlightTitleFormula)}
        </View>
      ) : (
        <View style={styles.highlightTitleImageContainer}>
          <Image
            style={styles.highlightTitleImage}
            resizeMode={'contain'}
            source={{
              uri: item.highlight.content,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(Highlight);
