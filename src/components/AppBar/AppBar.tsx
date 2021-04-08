import * as React from 'react';
import { View, Button } from 'react-native';

import { DrawerActions } from '@react-navigation/native';

import styles from './AppBar.style';
import { StackHeaderProps } from '@react-navigation/stack';

export default function AppBar(props: StackHeaderProps): JSX.Element {
  return (
    <View style={styles.appBarContainer}>
      <Button title="menu" onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />
    </View>
  );
}
