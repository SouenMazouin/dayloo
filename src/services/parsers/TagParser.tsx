import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    '<b>': `</Text><Text style={{fontWeight: "bold", ${parsedStyle}}}>`,
    '<i>': `</Text><Text style={{fontStyle: "italic", ${parsedStyle}}}>`,
    '<u>': `</Text><Text style={{textDecorationLine: "underline", ${parsedStyle}}}>`,
    '<br>': '{"\\n"}',
    '</>': `</Text><Text style={{${parsedStyle}}}>`,
    '<m>': `</Text><MathView style={{${parsedMathStyle}}} math="`,
    '</m>': `"/><Text style={{${parsedStyle}}}>`,
  };
  const string = element;
  const replaceTags = string.replace(/<b>|<i>|<u>|<br>|<\/>|<m>|<\/m>/gi, function (matched) {
    return mapElement[matched];
  });
  const renderString = `<Text style={{${parsedStyle}}}>${replaceTags}</Text>`;
  const renderElement = (
    <JsxParser
      renderInWrapper={false}
      autoCloseVoidElements={true}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      components={{ Text, MathView }}
      jsx={renderString}
    />
  );
  if (renderString.includes('MathView')) {
    return (
      <View key={key} style={[styles.renderContainer, { paddingRight: 5 }]}>
        {renderElement}
      </View>
    );
  } else {
    return (
      <View key={key} style={styles.renderContainer}>
        <Text style={style}>{renderElement}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
