import * as React from 'react';
import { View, Text, Button, Pressable, Image } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import styles from './DrawerMenu.style';

const DrawerMenu = (props: DrawerContentComponentProps<DrawerContentOptions>): JSX.Element => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>MENU</Text>
        <View style={styles.buttonMenuContainer}>
          <Pressable
            onPress={() => props.navigation.closeDrawer()}
            android_ripple={{ color: 'rgba(189, 189, 189, 0.4)', borderless: true }}>
            <Image style={styles.icons} source={{ uri: 'asset:/images/icons/fa-times.png' }} />
          </Pressable>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default React.memo(DrawerMenu);
