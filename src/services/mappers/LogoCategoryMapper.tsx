import { ImageSourcePropType } from 'react-native';

import animal from '../../assets/images/categories/animal.png';
import dayloo from '../../assets/images/categories/dayloo.png';
import formule from '../../assets/images/categories/formule.png';
import geographie from '../../assets/images/categories/geographie.png';
import grammaire from '../../assets/images/categories/grammaire.png';
import histoire from '../../assets/images/categories/histoire.png';
import ia from '../../assets/images/categories/ia.png';
import invention from '../../assets/images/categories/invention.png';
import litterature from '../../assets/images/categories/litterature.png';
import spores from '../../assets/images/categories/taverne_des_spores.png';
import vocabulaire from '../../assets/images/categories/vocabulaire.png';
// TODO: REFACTO
export default function logoCategoryMapper(logoId: string): ImageSourcePropType {
  switch (logoId) {
    case 'animal':
      return animal;
    case 'dayloo_annonce':
      return dayloo;
    case 'formule':
      return formule;
    case 'geographie':
      return geographie;
    case 'grammaire':
      return grammaire;
    case 'histoire':
      return histoire;
    case 'ia_apprentissage':
      return ia;
    case 'invention':
      return invention;
    case 'litterature':
      return litterature;
    case 'taverne_des_spores':
      return spores;
    case 'vocabulaire_hf':
      return vocabulaire;
    case 'vocabulaire_sf':
      return vocabulaire;
    default:
      return dayloo;
  }
}
