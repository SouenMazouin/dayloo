import React, { useRef } from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import CardSwiperItem from '../CardSwiperItem/CardSwiperItem';
import styles from './CardSwiper.style';

// TODO: Injecting Data Categories from Firestore
import { fakeData } from '../../utils/fakeData';
import { fakeDataCategory } from '../../utils/fakeDataCategory';

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
          disableIntervalMomentum={true}
          renderItem={({ item, index }: SwiperItemProps) => {
            const categoryExtract = fakeDataCategory.filter((category) => {
              return category?.id === item?.idCategory;
            })[0];
            return <CardSwiperItem item={item} index={index} category={categoryExtract} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
