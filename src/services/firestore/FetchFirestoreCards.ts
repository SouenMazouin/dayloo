import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import { ItemProps } from '../../shared/interfaces/cardSwiper';

//TODO: Mettre en cache les cartes deja consultés pour ne plus requeter le firestore en cas de retour en arrière
//      Si l'ID de la carte existe déjà dans le cache s'y référer,
//      Sinon requêter Firestore

export const fetchFirestoreCards = (currentCalendarDate: string): ItemProps[] => {
  const [cards, setCards] = useState<ItemProps[]>([]);
  const fetchFirestore = () => {
    firestore()
      .collection('liste_fiches_2')
      .where('id', '>=', currentCalendarDate)
      .where('id', '<=', currentCalendarDate + '\uf8ff')
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
