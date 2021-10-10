/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useRef } from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import CardSwiperItem from './CardSwiperItem/CardSwiperItem';
import { fetchFirestoreCategories } from '../../services/firestore/FetchFirestoreCategories';
import { fetchFirestoreCards } from '../../services/firestore/FetchFirestoreCards';
import { SwiperItemProps } from '../../shared/interfaces/cardSwiper';
import styles from './CardSwiper.style';

// TODO: Prise en charge des dates via calendrier
// En fonction du jour selectionné (current compris)
// Convertir le timestamp en string au format 'aaaa/mm/dd'
// Puis setter cette variable avec la date au bon format

const currentCalendarDate = '';

export default function CardSwiper(): JSX.Element {
  const windowWidth = Dimensions.get('window').width;
  const cardsItem = fetchFirestoreCards(currentCalendarDate);
  const categories = fetchFirestoreCategories();
  const carouselRef = useRef(null);

  return (
    <SafeAreaView style={styles.swiperSafeArea}>
      <View style={styles.swiperContainer}>
        <Carousel
          vertical={false}
          layout={'default'}
          ref={carouselRef}
          data={cardsItem}
          sliderWidth={300}
          itemWidth={windowWidth / 1.015}
          disableIntervalMomentum={true}
          hasParallaxImages={true}
          renderItem={({ item, index }: SwiperItemProps) => {
            const categoryExtract = categories.filter((category) => {
              return category?.id === item?.idCategory;
            })[0];
            return <CardSwiperItem item={item} index={index} category={categoryExtract} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
