import React, { useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import { SwiperItemProps } from '../../../../shared/interfaces/cardSwiper';
import styles from './Logo.style';

const Logo = ({ category }: SwiperItemProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.logoContainer}>
      <View style={[{ backgroundColor: category?.lightColor }, styles.leftLine]} />
      {loading == true ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" color={category?.lightColor} />
        </View>
      ) : (
        <></>
      )}
      <Image
        style={[
          {
            backgroundColor: loading == false ? category?.lightColor : 'rgba(255, 255, 255, 0)',
            display: loading == false ? 'flex' : 'none',
          },
          styles.logoCategorie,
        ]}
        resizeMode={'contain'}
        source={{ uri: `asset:/images/categories/${category?.logo}` }}
        onLoadEnd={() => setLoading(false)}
      />

      <View style={[{ backgroundColor: category?.lightColor }, styles.rightLine]} />
    </View>
  );
};

export default React.memo(Logo);
