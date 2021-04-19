// TODO: Refacto, renomer fichier et ajouter feuille de styles
import React from 'react';
import { Text, Image, View } from 'react-native';
import MathView from 'react-native-math-view';

import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';

// TODO : Styles pour MathView ?
/**
 * Return parsed texts for Items of CardSwiper with base styles defined from JSON data's
 * It is also possible to inject custom styles at the time of the function call
 * @param   {string} element Text element we want to render, is generally passed from Props
 * @param   { {[key: string]: string | number} } customStyles Standard CSS StyleSheet Object, eg. {color: 'red', fontSize: 10}
 * @return  {<Text style={[{tagProperty: 'tagValue'}, customStyles]}>{parsedElement}</Text> | <MathView math={latexElement} />} Parsed element or Latex element with proper styles
 */

export function TagParser(
  element: string,
  customStyles: { [key: string]: string | number } = {},
): JSX.Element {
  const tagExtract = element.substring(0, 6);
  const renderElement = element.slice(6, -6);

  switch (tagExtract) {
    case '<bold>':
      return <Text style={[{ fontWeight: 'bold' }, customStyles]}>{renderElement}</Text>;
    case '<math>':
      return <MathView math={renderElement} />;
    default:
      return <Text style={customStyles}>{element}</Text>;
  }
}

// TODO: Faire JSdoc
/**
 * return full name of the user
 * @param   {string} firstName  First Name of the User
 * @param   {string} lastName   Last Name of the User
 * @return  {string}            Fullname of the user
 */

export function ImageCategory(
  idCategory: string,
  LeftLineColor: string,
  RightLineColor: string,
): JSX.Element {
  return (
    <>
      <View
        style={{
          borderColor: LeftLineColor,
          borderWidth: 1,
          flexGrow: 1,
          height: 0,
        }}
      />
      {(() => {
        switch (idCategory) {
          case 'geographie':
            return <Image style={{ width: 150, height: 150 }} source={logo1} />;
          default:
            return <Image style={{ width: 150, height: 150 }} source={logo2} />;
        }
      })()}
      <View
        style={{
          borderColor: RightLineColor,
          borderWidth: 1,
          flexGrow: 1,
        }}
      />
    </>
  );
}
