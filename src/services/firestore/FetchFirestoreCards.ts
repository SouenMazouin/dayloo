import { useState, useEffect } from 'react';

import firestore from '@react-native-firebase/firestore';

//TODO: Mettre en cache les cartes deja consultés pour ne plus requeter le firestore en cas de retour en arrière
//      Si l'ID de la carte existe déjà dans le cache s'y référer,
//      Sinon requêter Firestore

export const fetchFirestoreCards = (currentCalendarDate: string) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchFirestore = () => {
      firestore()
        .collection('liste_fiches_2')
        .where('id', '>=', currentCalendarDate)
        .where('id', '<=', currentCalendarDate + '\uf8ff')
        .onSnapshot((querySnapshot) => {
          const cardsList = [];
          querySnapshot.forEach((documentSnapshot) => {
            const { idCategory, title, subtitle, highlight, blocks } = documentSnapshot.data();
            cardsList.push({
              id: documentSnapshot.id,
              idCategory,
              title,
              subtitle,
              highlight,
              blocks,
            });
          });
          setCards(cardsList);
        });
    };
    fetchFirestore();
  }, []);
  return cards;
};
