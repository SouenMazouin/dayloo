import React from 'react';
import { View } from 'react-native';

import tagParser from '../../../../services/parsers/TagParser';
import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Title.style';

const Title = ({ item, category }: SwiperItemProps): JSX.Element => {
  return (
    <View style={styles.titleContainer}>
      {tagParser(item.title, {
        color: category?.lightColor,
        fontSize: 38,
        textAlign: 'center',
        fontFamily: 'PrimerPrint',
        fontWeight: 'bold',
        lineHeight: 39,
      })}
      {item.subtitle != '' ? tagParser(item.subtitle, styles.subtitle) : <></>}
    </View>
  );
};

export default React.memo(Title);
