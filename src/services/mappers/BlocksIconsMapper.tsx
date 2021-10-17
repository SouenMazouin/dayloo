import { ImageSourcePropType } from 'react-native';

import baby from '../../assets/images/icons/baby.png';
import book from '../../assets/images/icons/book.png';
import calendarAlt from '../../assets/images/icons/calendar-alt.png';
import expandArrowsAlt from '../../assets/images/icons/expand-arrows-alt.png';
import fortAwesome from '../../assets/images/icons/fort-awesome.png';
import globeAmericas from '../../assets/images/icons/globe-americas.png';
import graduationCap from '../../assets/images/icons/graduation-cap.png';
import heartbeat from '../../assets/images/icons/heartbeat.png';
import home from '../../assets/images/icons/home.png';
import landmark from '../../assets/images/icons/landmark.png';
import language from '../../assets/images/icons/language.png';
import moneyBill from '../../assets/images/icons/money-bill.png';
import nullPng from '../../assets/images/icons/null.png';
import seedling from '../../assets/images/icons/seedling.png';
import trophy from '../../assets/images/icons/trophy.png';
import userGraduate from '../../assets/images/icons/user-graduate.png';
import users from '../../assets/images/icons/users.png';
import ustensils from '../../assets/images/icons/ustensils.png';
import volumeUp from '../../assets/images/icons/volume-up.png';
import weight from '../../assets/images/icons/weight.png';
// TODO: REFACTO
export default function blocksIconMapper(iconContent: string): ImageSourcePropType {
  switch (iconContent) {
    case 'fas fa-baby':
      return baby;
    case 'fas fa-book':
      return book;
    case 'fas fa-calendar-alt':
      return calendarAlt;
    case 'fas fa-expand-arrows-alt':
      return expandArrowsAlt;
    case 'fas fa-fort-awesome':
      return fortAwesome;
    case 'fas fa-globe-americas':
      return globeAmericas;
    case 'fas fa-graduation-cap':
      return graduationCap;
    case 'fas fa-heartbeat':
      return heartbeat;
    case 'fas fa-home':
      return home;
    case 'fas fa-landmark':
      return landmark;
    case 'fas fa-language':
      return language;
    case 'fas fa-money-bill':
      return moneyBill;
    case 'fas fa-seedling':
      return seedling;
    case 'fas fa-trophy':
      return trophy;
    case 'fas fa-user-graduate':
      return userGraduate;
    case 'fas fa-users':
      return users;
    case 'fas fa-utensils':
      return ustensils;
    case 'fas fa-volume-up':
      return volumeUp;
    case 'fas fa-weight':
      return weight;
    default:
      return nullPng;
  }
}
