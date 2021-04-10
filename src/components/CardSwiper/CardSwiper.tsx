import React, { useRef } from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { SwiperItemProps } from '../../shared/cardSwiper';
import CardSwiperItem from '../CardSwiperItem/CardSwiperItem';
import styles from './CardSwiper.style';

import { fakeData } from '../../services/fakeData';

export default function CardSwiper(): JSX.Element {
  const carouselRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.swiperContainer}>
        <Carousel
          vertical={false}
          layout={'default'}
          ref={carouselRef}
          data={fakeData}
          sliderWidth={300}
          itemWidth={windowWidth / 1.015}
          disableIntervalMomentum
          renderItem={({ item, index }: SwiperItemProps) => {
            return <CardSwiperItem item={item} index={index} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
