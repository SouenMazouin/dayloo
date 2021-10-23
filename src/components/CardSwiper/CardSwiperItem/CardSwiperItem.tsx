import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Logo from './Logo/Logo';
import Title from './Title/Title';
import Highlight from './Highlight/Highlight';
import Blocks from './Blocks/Blocks';
import { SwiperItemProps } from '../../../shared/interfaces/cardSwiper';
import styles from './CardSwiperItem.style';

const CardSwiperItem = ({ index, item, category }: SwiperItemProps): JSX.Element => {
  return (
    <SafeAreaView style={styles.item}>
      <FlatList
        style={styles.cardScrollFlatlist}
        data={[item]}
        renderItem={({ item }: SwiperItemProps): JSX.Element => {
          return (
            <View>
              <Logo index={index} item={item} category={category} />
              <Title index={index} item={item} category={category} />
              <Highlight index={index} item={item} category={category} />
              <Blocks index={index} item={item} category={category} />
            </View>
          );
        }}
        persistentScrollbar={true}
      />
    </SafeAreaView>
  );
};

export default React.memo(CardSwiperItem);
