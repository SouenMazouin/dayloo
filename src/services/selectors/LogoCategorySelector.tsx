import { ImageSourcePropType } from 'react-native';
import animal from '../../assets/images/categories/animal.png';
import dayloo from '../../assets/images/categories/dayloo.png';
import formule from '../../assets/images/categories/formule.png';
import geographie from '../../assets/images/categories/geographie.png';
import ia from '../../assets/images/categories/ia.png';

export default function logoCategorySelector(logo: string): ImageSourcePropType {
  switch (logo) {
    case 'animal.png':
      return animal;
    case 'formule.png':
      return formule;
    case 'geographie.png':
      return geographie;
    case 'ia.png':
      return ia;
    default:
      return dayloo;
  }
}
