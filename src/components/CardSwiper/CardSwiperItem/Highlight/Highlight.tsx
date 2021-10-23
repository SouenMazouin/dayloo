import React from 'react';
import { View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

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
          <FastImage
            style={styles.highlightTitleImage}
            // resizeMode={FastImage.resizeMode.cover}
            source={{
              uri: item.highlight.content,
              priority: FastImage.priority.high,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(Highlight);
