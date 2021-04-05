import * as React from 'react';
import { View } from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { IconButton, Drawer, Text } from 'react-native-paper';

import styles from './DrawerMenu.style';

export default function DrawerMenu(
  props: DrawerContentComponentProps<DrawerContentOptions>,
): JSX.Element {
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>MENU</Text>
          <IconButton icon="close" size={25} onPress={() => props.navigation.closeDrawer()} />
        </View>
      </Drawer.Section>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
