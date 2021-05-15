// TODO: Refacto
// TODO: Faire JSdoc
import React from 'react';
import { Text, View } from 'react-native';
import JsxParser from 'react-jsx-parser';
import { MathText, MathView } from 'react-native-math-view';

declare global {
  type Dictionary<T> = { [key: string]: T };
}
const mapElement: Dictionary<string> = {
  '<t>': '<Text>',
  '<b>': '<Text style={{fontWeight: "bold"}}>',
  '<i>': '<Text style={{fontStyle: "italic"}}>',
  '<u>': '<Text style={{textDecorationLine: "underline"}}>',
  '<br>': '{"\\n"}',
  '</>': '</Text>',
  '<m>': '<MathView style={{ marginLeft: 3, marginRight: 3, marginBottom: -15 }} math="',
  '</m>': '"/>',
};

export function tagParser(
  element: string,
  injectedStyle: { [key: string]: string | number } = {},
): JSX.Element {
  const string = element;
  const replaceTags = string.replace(/<t>|<b>|<i>|<u>|<br>|<\/>|<m>|<\/m>/gi, function (matched) {
    return mapElement[matched];
  });
  if (string.indexOf('<m>') > -1) {
    const renderString = replaceTags;
    const renderElement = (
      <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
        <JsxParser
          renderInWrapper={false}
          autoCloseVoidElements={true}
          components={{ Text, MathView }}
          jsx={renderString}
        />
      </View>
    );
    return renderElement;
  } else {
    const renderString = replaceTags;
    const renderElement = (
      <Text style={injectedStyle}>
        <JsxParser
          renderInWrapper={false}
          autoCloseVoidElements={true}
          components={{ Text }}
          jsx={renderString}
        />
      </Text>
    );
    return renderElement;
  }
}
