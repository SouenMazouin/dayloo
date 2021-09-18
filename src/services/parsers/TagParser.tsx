import React from 'react';
import { Text, View } from 'react-native';
import JsxParser from 'react-jsx-parser';
import { MathView } from 'react-native-math-view';
import { injectedStyle } from '../../shared/@types/types';
import { ObjectToString } from './ObjectToString';

export default function tagParser(
  element: string,
  style: injectedStyle = {},
  mathStyle: injectedStyle = {},
): JSX.Element {
  const mathStyleParsed = ObjectToString(mathStyle);
  const mapElement: Dictionary<string> = {
    '<t>': '<Text>',
    '<b>': '<Text style={{fontWeight: "bold"}}>',
    '<i>': '<Text style={{fontStyle: "italic"}}>',
    '<u>': '<Text style={{textDecorationLine: "underline"}}>',
    '<br>': '{"\\n"}',
    '</>': '</Text>',
    '<m>': `<MathView style={{ ${mathStyleParsed} }} math="`,
    '</m>': '"/>',
  };
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          components={{ Text, MathView }}
          jsx={renderString}
        />
      </View>
    );
    return renderElement;
  } else {
    const renderString = replaceTags;
    const renderElement = (
      <Text style={style}>
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
