import React from 'react';
import { Image, View } from 'react-native';
import { injectedStyle } from '../../shared/@types/types';

import tagParser from '../parsers/TagParser';

export default function highlightTitleSelector(
  highlightTitleContent: string,
  highlightTitleType: string,
  formulaStyle: injectedStyle,
  formulaContainer: injectedStyle,
  imageStyle: injectedStyle,
  imageContainer: injectedStyle,
): JSX.Element {
  return (
    <>
      {(() => {
        switch (highlightTitleType) {
          case 'formule':
            return (
              <View style={formulaContainer}>
                {tagParser(highlightTitleContent, undefined, formulaStyle)}
              </View>
            );
          case 'image':
            return (
              <View style={imageContainer}>
                <Image
                  style={imageStyle}
                  resizeMode={'contain'}
                  source={{
                    uri: highlightTitleContent,
                  }}
                />
              </View>
            );
          default:
            return <View></View>;
        }
      })()}
    </>
  );
}
