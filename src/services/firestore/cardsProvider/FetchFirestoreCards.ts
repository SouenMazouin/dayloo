import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import { ItemProps } from '../../../shared/@types/cardSwiper';

const contextTimestamp = 1635980400000;

export const fetchFirestoreCards = (): ItemProps[] => {
  const [cards, setCards] = useState<ItemProps[]>([]);
  const fetchFirestore = () => {
    firestore()
      .collection('liste_fiches_2')
      .where('datePublication', '==', contextTimestamp)
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
  }, []);
  return cards;
};
