import React from 'react';
import { Text } from 'react-native';
import MathView from 'react-native-math-view';

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
