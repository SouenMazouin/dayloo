import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import { ItemProps } from '../../../shared/@types/cardSwiper';

export const fetchFirestoreCards = (timestamp: number): ItemProps[] => {
  const [cards, setCards] = useState<ItemProps[]>([]);
  const fetchFirestore = () => {
    firestore()
      .collection('liste_fiches_2')
      .where('datePublication', '==', timestamp)
      .onSnapshot((querySnapshot) => {
        const cardsList: ItemProps[] = [];
        querySnapshot.forEach((documentSnapshot) => {
          cardsList.push({
            ...(documentSnapshot.data() as ItemProps),
          });
        });
        setCards(cardsList);
      });
  };
  useEffect(() => {
    fetchFirestore();
  }, [timestamp]);
  return cards;
};
