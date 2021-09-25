import React from 'react';
import { Text, View } from 'react-native';
import JsxParser from 'react-jsx-parser';
import MathView from 'react-native-math-view';
import { injectedStyle } from '../../shared/@types/types';
import { ObjectStyleToString } from './ObjectToString';

export default function tagParser(
  element: string,
  style: injectedStyle = {},
  mathStyle: injectedStyle = {},
  key?: number | string,
): JSX.Element {
  const parsedMathStyle = ObjectStyleToString(mathStyle);
  const parsedStyle = ObjectStyleToString(style);

  const mapElement: Dictionary<string> = {
    '<b>': '<Text style={{fontWeight: "bold"}}>',
    '<i>': '<Text style={{fontStyle: "italic"}}>',
    '<u>': '<Text style={{textDecorationLine: "underline"}}>',
    '<br>': '{"\\n"}',
    '</>': '</Text>',
    '<m>': `</Text><MathView style={{${parsedMathStyle}}} math="`,
    '</m>': `"/><Text style={{${parsedStyle}}}>`,
  };
  const string = element;
  const replaceTags = string.replace(/<b>|<i>|<u>|<br>|<\/>|<m>|<\/m>/gi, function (matched) {
    return mapElement[matched];
  });
  const renderString = `<Text style={{${parsedStyle}}}>${replaceTags}</Text>`;
  console.log(renderString);
  const renderElement = (
    <View key={key} style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
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
}
