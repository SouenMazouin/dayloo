import * as React from 'react';
import { View, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';

import styles from './AppBar.style';

const AppBar = (props: StackHeaderProps): JSX.Element => {
  return (
    <View style={styles.appBarContainer}>
      <Button title="menu" onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />
    </View>
  );
};

export default AppBar;
