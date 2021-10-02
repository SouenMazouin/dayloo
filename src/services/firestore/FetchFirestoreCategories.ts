import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import { CategoryProps } from '../../shared/interfaces/cardSwiper';

export const fetchFirestoreCategories = (): CategoryProps[] => {
  const [category, setCategory] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const fetchFirestore = () => {
      firestore()
        .collection('liste_categories_2')
        .onSnapshot((querySnapshot) => {
          const categoryList: CategoryProps[] = [];
          querySnapshot.forEach((documentSnapshot) => {
            categoryList.push({
              ...(documentSnapshot.data() as CategoryProps),
            });
          });
          setCategory(categoryList);
        });
    };
    fetchFirestore();
  }, []);
  return category;
};
