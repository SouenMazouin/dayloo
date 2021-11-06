import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/@types/cardSwiper';
import BlocksSeprarator from '../Blocks/BlocksSeprarator';
import styles from './Highlight.style';

const Highlight = ({ index, item, category }: SwiperItemProps): JSX.Element => {
  const [loading, setLoading] = useState(true);

  if (item.highlight.type == 'formule') {
    return (
      <View>
        <View style={styles.highlightTitleFormulaContainer}>
          {tagParser(item.highlight.content, undefined, styles.highlightTitleFormula)}
        </View>
      </View>
    );
  } else if (item.highlight.type == 'image') {
    return (
      <View>
        <View style={styles.highlightTitleImageContainer}>
          {loading == true ? (
            <ActivityIndicator
              style={styles.activityContainer}
              size="large"
              color={category?.lightColor}
            />
          ) : (
            <></>
          )}
          <FastImage
            style={styles.highlightTitleImage}
            source={{
              uri: item.highlight.content,
              priority: FastImage.priority.high,
            }}
            onLoadEnd={() => setLoading(false)}
          />
        </View>
      </View>
    );
  } else {
    return <BlocksSeprarator index={index} item={item} category={category} />;
  }
};

export default React.memo(Highlight);
