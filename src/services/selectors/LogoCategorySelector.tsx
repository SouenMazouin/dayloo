import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import ai from '../../assets/images/categories/ia.png';
import aiBrain from '../../assets/images/categories/ia-cerveau.png';
import animal from '../../assets/images/categories/animal.png';
import formula from '../../assets/images/categories/formule.png';
import geography from '../../assets/images/categories/geographie.png';
import grammar from '../../assets/images/categories/grammaire.png';
import history from '../../assets/images/categories/histoire.png';
import invention from '../../assets/images/categories/invention.png';
import sporeTavern from '../../assets/images/categories/taverne_des_spores.png';
import literature from '../../assets/images/categories/litterature.png';
import unknown from '../../assets/images/categories/dayloo-black.png';
import vocabulary from '../../assets/images/categories/vocabulaire.png';

export function logoCategorySelector(idCategory: string, lineColor: string): JSX.Element {
  return (
    <>
      <View style={[{ borderColor: lineColor }, styles.leftLine]} />
      {(() => {
        switch (idCategory) {
          case 'ia':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={ai} />;
          case 'ia-cerveau':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={aiBrain} />;
          case 'animal':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={animal} />;
          case 'formule':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={formula} />;
          case 'geographie':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={geography} />;
          case 'grammaire':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={grammar} />;
          case 'histoire':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={history} />;
          case 'invention':
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={invention} />;
          case 'taverne_des_spores':
            return (
              <Image style={styles.logoCategorie} resizeMode={'contain'} source={sporeTavern} />
            );
          case 'litterature':
            return (
              <Image style={styles.logoCategorie} resizeMode={'contain'} source={literature} />
            );
          case 'vocabulaire':
            return (
              <Image style={styles.logoCategorie} resizeMode={'contain'} source={vocabulary} />
            );
          default:
            return <Image style={styles.logoCategorie} resizeMode={'contain'} source={unknown} />;
        }
      })()}
      <View style={[{ borderColor: lineColor }, styles.rightLine]} />
    </>
  );
}
const styles = StyleSheet.create({
  logoCategorie: {
    width: 90,
    height: 90,
    margin: 10,
    resizeMode: 'contain',
  },
  leftLine: {
    borderWidth: 1,
    flexGrow: 1,
    height: 0,
  },
  rightLine: {
    borderWidth: 1,
    flexGrow: 1,
  },
});
