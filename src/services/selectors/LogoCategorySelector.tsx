import { ImageSourcePropType } from 'react-native';

import animal from '../../assets/images/categories/animal.png';
import dayloo from '../../assets/images/categories/dayloo.png';
import formule from '../../assets/images/categories/formule.png';
import geographie from '../../assets/images/categories/geographie.png';
import grammaire from '../../assets/images/categories/grammaire.png';
import histoire from '../../assets/images/categories/histoire.png';
import iaBrain from '../../assets/images/categories/ia-cerveau.png';
import ia from '../../assets/images/categories/ia.png';
import invention from '../../assets/images/categories/invention.png';
import litterature from '../../assets/images/categories/litterature.png';
import spores from '../../assets/images/categories/taverne_des_spores.png';
import vocabulaire from '../../assets/images/categories/vocabulaire.png';

export default function logoCategorySelector(logo: string): ImageSourcePropType {
  switch (logo) {
    case 'animal.png':
      return animal;
    case 'formule.png':
      return formule;
    case 'geographie.png':
      return geographie;
    case 'grammaire.png':
      return grammaire;
    case 'histoire.png':
      return histoire;
    case 'ia-cerveau.png':
      return iaBrain;
    case 'ia.png':
      return ia;
    case 'invention.png':
      return invention;
    case 'litterature.png':
      return litterature;
    case 'taverne_des_spores.png':
      return spores;
    case 'vocabulaire.png':
      return vocabulaire;
    default:
      return dayloo;
  }
}
