import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Highlight.style';

const Highlight = ({ item, category }: SwiperItemProps): JSX.Element => {
  const [loading, setLoading] = useState(true);

  return (
    <View>
      {item.highlight.type == 'formule' ? (
        <View style={styles.highlightTitleFormulaContainer}>
          {tagParser(item.highlight.content, undefined, styles.highlightTitleFormula)}
        </View>
      ) : (
        <>
          <View style={styles.highlightTitleImageContainer}>
            {loading == true ? (
              <ActivityIndicator
                style={styles.activityContainer}
                size="large"
                color={category.lightColor}
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
        </>
      )}
    </View>
  );
};

export default React.memo(Highlight);
