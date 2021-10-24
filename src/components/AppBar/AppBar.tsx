import * as React from 'react';
import { View, Image, Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';

import styles from './AppBar.style';

const AppBar = (props: StackHeaderProps): JSX.Element => {
  return (
    <View style={styles.appBarContainer}>
      <View style={styles.buttonMenuContainer}>
        <Pressable
          onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
          android_ripple={{ color: 'rgba(189, 189, 189, 0.4)', borderless: true }}>
          <Image style={styles.icons} source={{ uri: 'asset:/images/icons/fa-bars.png' }} />
        </Pressable>
      </View>
      <View style={styles.buttonMenuContainer}>
        <Pressable
          onPress={() => {}}
          android_ripple={{ color: 'rgba(189, 189, 189, 0.4)', borderless: true }}>
          <Image style={styles.icons} source={{ uri: 'asset:/images/icons/fa-calendar.png' }} />
        </Pressable>
      </View>
    </View>
  );
};

export default AppBar;
