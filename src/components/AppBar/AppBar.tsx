import * as React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { DrawerActions } from '@react-navigation/native';

import styles from './AppBar.style';
import { StackHeaderProps } from '@react-navigation/stack';

export default function AppBar(props: StackHeaderProps): JSX.Element {
  return (
    <View style={styles.appBarContainer}>
      <IconButton
        icon="menu"
        size={30}
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}
