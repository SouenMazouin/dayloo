import React from 'react';
import { View, Pressable, Linking, Text } from 'react-native';

import { SwiperItemProps } from '../../../../shared/@types/cardSwiper';
import styles from './About.style';

const About = ({ item, category }: SwiperItemProps): JSX.Element => {
  return (
    <View
      style={[
        { borderTopColor: category?.lightColor, borderBottomColor: category?.lightColor },
        styles.buttonContainer,
      ]}>
      <Pressable
        style={styles.button}
        onPress={() => {
          void Linking.openURL(item.source);
        }}
        android_ripple={{ color: category?.lightColor }}>
        <Text style={[{ color: category?.lightColor }, styles.buttonText]}>EN SAVOIR PLUS</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(About);
