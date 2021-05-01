// TODO: Refacto
// TODO: Faire JSdoc
import React from 'react';
import { Text } from 'react-native';
import MathView from 'react-native-math-view';
import JsxParser from 'react-jsx-parser';

declare global {
  type Dictionary<T> = { [key: string]: T };
}

const mapElement: Dictionary<string> = {
  '<b>': '<Text style={{fontWeight: "bold"}}>',
  '<i>': '<Text style={{fontStyle: "italic"}}>',
  '<u>': '<Text style={{textDecorationLine: "underline"}}>',
  '<br>': '{"\\n"}',
  '</>': '</Text>',
};

export function tagParser(element: string): JSX.Element {
  const string = element;
  const renderString = string.replace(/<b>|<i>|<u>|<br>|<\/>/gi, function (matched) {
    const tagsMapping = mapElement[matched];
    return tagsMapping;
  });
  const renderElement = (
    <JsxParser
      renderInWrapper={false}
      autoCloseVoidElements={true}
      components={{ Text }}
      jsx={renderString}
    />
  );
  console.log(renderElement);
  console.log(renderString);
  return renderElement;
}
