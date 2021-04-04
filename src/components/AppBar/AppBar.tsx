import * as React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { DrawerActions } from '@react-navigation/native';

import styles from './AppBar.style';

export default function AppBar({ navigation }): Element {
  return (
    <View style={styles.appBarContainer}>
      <IconButton
        icon="menu"
        size={30}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
