import React from 'react';
import { Image, View } from 'react-native';

import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';

export function logoCategorySelector(
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
