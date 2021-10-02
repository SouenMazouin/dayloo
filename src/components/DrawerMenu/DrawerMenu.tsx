import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import styles from './DrawerMenu.style';

export default function DrawerMenu(
  props: DrawerContentComponentProps<DrawerContentOptions>,
): JSX.Element {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>MENU</Text>
        <Button title="Close Icon" onPress={() => props.navigation.closeDrawer()} />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
