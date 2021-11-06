/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useRef } from 'react';
import { View, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import CardSwiperItem from './CardSwiperItem/CardSwiperItem';
import { SwiperItemProps } from '../../shared/@types/cardSwiper';
import { fetchFirestoreCards } from '../../services/firestore/cardsProvider/FetchFirestoreCards';
import { fetchFirestoreCategories } from '../../services/firestore/categoryProvider/FetchFirestoreCategories';
import styles from './CardSwiper.style';

const CardSwiper = (): JSX.Element => {
  const windowWidth = Dimensions.get('window').width;
  const carouselRef = useRef(null);

  const cardsItem = fetchFirestoreCards(1635372000000)
  const categories = fetchFirestoreCategories();
  return (
    <SafeAreaView style={styles.swiperSafeArea}>
      <View style={styles.swiperContainer}>
        {cardsItem.length == 0 || cardsItem.length == undefined ? (
          <ActivityIndicator size={45} color={'#13D8A4'} />
        ) : (
          <Carousel
            vertical={false}
            layout={'default'}
            ref={carouselRef}
            data={cardsItem}
            sliderWidth={300}
            itemWidth={windowWidth / 1.015}
            disableIntervalMomentum={true}
            renderItem={({ item, index }: SwiperItemProps) => {
              const categoryExtract = categories.filter((category) => {
                return category.id === item.idCategory;
              })[0];
              return <CardSwiperItem item={item} index={index} category={categoryExtract} />;
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(CardSwiper);
