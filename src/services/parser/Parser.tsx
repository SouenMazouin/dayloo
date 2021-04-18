import React from 'react';
import { Text } from 'react-native';
import MathView from 'react-native-math-view';

/**
 * Return parsed texts for Items of CardSwiper with base styles defined from JSON data's
 * It is also possible to inject custom styles at the time of the function call
 * @param   {string} element Text element we want to render, is generally passed from Props
 * @param   { {[key: string]: string | number} } customStyles Standard CSS StyleSheet Object, eg. {color: 'red', fontSize: 10}
 * @return  {<Text style={[{tagProperty: 'tagValue'}, customStyles]}>{parsedElement}</Text> | <MathView math={latexElement} />} Parsed element or Latex element with proper styles
 */

export function TagParser(
  element: string,
  customStyles: { [key: string]: string | number },
): JSX.Element {
  const tagExtract = element.substring(0, 6);
  const renderElement = element.slice(6, -6);

  if (tagExtract == '<bold>') {
    return <Text style={[{ fontWeight: 'bold' }, customStyles]}>{renderElement}</Text>;
  } else if (tagExtract == '<math>') {
    return <MathView math={renderElement} />;
  } else {
    return <Text style={customStyles}>{element}</Text>;
  }
}
