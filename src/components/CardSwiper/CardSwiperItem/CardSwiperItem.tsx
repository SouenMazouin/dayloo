import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import MathView from 'react-native-math-view';

import CardSwiperLogoHeader from './CardSwiperItemAtoms/CardSwiperLogoHeader';
import CardSwiperTitleHeader from './CardSwiperItemAtoms/CardSwiperTitleHeader';
import CardSwiperHighlightHeader from './CardSwiperItemAtoms/CarSwiperHighlightHeader';
import CardSwiperBlocks from './CardSwiperItemAtoms/CardSwiperBlocks';
import { SwiperItemProps } from '../../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';

function CardSwiperItem({ index, item, category }: SwiperItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <ScrollView style={styles.cardScrollView} persistentScrollbar={true}>
        {/* <View
          key={'inside-parser'}
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingLeft: 150,
            borderColor: 'green',
            borderWidth: 1,
          }}>
          <Text> oeufs </Text>
          <MathView style={{}} math="{n \choose k} p^k" />
          <Text style={{ fontWeight: 'bold', backgroundColor: 'grey' }}>pour </Text>
          <Text>4 </Text>
          <Text style={{ textDecorationLine: 'underline', backgroundColor: 'red' }}>mois</Text>
          <Text style={{ fontStyle: 'italic', backgroundColor: 'grey' }}> d'incubation</Text>
        </View> */}

        <CardSwiperLogoHeader index={index} item={item} category={category} />
        <CardSwiperTitleHeader index={index} item={item} category={category} />
        <CardSwiperHighlightHeader index={index} item={item} category={category} />
        <CardSwiperBlocks index={index} item={item} category={category} />
      </ScrollView>
    </View>
  );
}

export default React.memo(CardSwiperItem);
