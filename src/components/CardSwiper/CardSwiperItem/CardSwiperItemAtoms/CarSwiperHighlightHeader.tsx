import React from 'react';
import { View, Image } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperHighlightHeader.style';

function CardSwiperHighlightHeader({ item }: SwiperItemProps): JSX.Element {
  return (
    <View>
      {(() => {
        switch (item.highlight.type) {
          case 'formule':
            return (
              <View style={styles.highlightTitleFormulaContainer}>
                {tagParser(item.highlight.content, undefined, styles.highlightTitleFormula)}
              </View>
            );
          case 'image':
            return (
              <View style={styles.highlightTitleImageContainer}>
                <Image
                  style={styles.highlightTitleImage}
                  resizeMode={'contain'}
                  source={{
                    uri: item.highlight.content,
                  }}
                />
              </View>
            );
          default:
            return <></>;
        }
      })()}
    </View>
  );
}

export default React.memo(CardSwiperHighlightHeader);
