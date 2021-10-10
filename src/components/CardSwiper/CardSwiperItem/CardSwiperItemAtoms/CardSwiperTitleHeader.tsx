import React from 'react';
import { View } from 'react-native';
import {} from 'react-native-svg';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './styles/CardSwiperTitleHeader.style';

function CardSwiperTitleHeader({ item, category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.titleContainer}>
      {tagParser(item.title, {
        color: category.lightColor,
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'PrimerPrintBold',
      })}
      {item.subtitle != '' ? tagParser(item.subtitle, styles.subtitle) : <></>}
    </View>
  );
}

export default React.memo(CardSwiperTitleHeader);
