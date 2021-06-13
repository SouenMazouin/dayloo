import React from 'react';
import { Image, Text, View } from 'react-native';

import { tagParser } from './Parsers';

export function highlightTitleSelector(content: string, type: string): JSX.Element {
  return (
    <>
      {(() => {
        switch (type) {
          case 'formula':
            return <View>{tagParser(content)}</View>;
          case 'image':
            return (
              <View>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={{
                    uri: content,
                  }}
                />
              </View>
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
