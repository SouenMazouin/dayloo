import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CardsScreen from '../screens/CardsScreen';
import LikesScreen from '../screens/LikesScreen';
import ShopScreen from '../screens/ShopScreen';
import ContactScreen from '../screens/ContactScreen';

import DrawerMenu from '../components/DrawerMenu/DrawerMenu';

export default function DrawerNavigation(): Element {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="CardsScreen">{(props) => <CardsScreen {...props} />}</Drawer.Screen>
      <Drawer.Screen name="LikesScreen">{(props) => <LikesScreen {...props} />}</Drawer.Screen>
      <Drawer.Screen name="ShopScreen">{(props) => <ShopScreen {...props} />}</Drawer.Screen>
      <Drawer.Screen name="ContactScreen">{(props) => <ContactScreen {...props} />}</Drawer.Screen>
    </Drawer.Navigator>
  );
}
