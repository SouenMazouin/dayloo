import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CardsScreen from '../screens/CardsScreen';
import ContactScreen from '../screens/ContactScreen';
import LikesScreen from '../screens/LikesScreen';
import ShopScreen from '../screens/ShopScreen';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';

const DrawerNavigation = (): JSX.Element => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="CardsScreen">{() => <CardsScreen />}</Drawer.Screen>
      <Drawer.Screen name="LikesScreen">{() => <LikesScreen />}</Drawer.Screen>
      <Drawer.Screen name="ShopScreen">{() => <ShopScreen />}</Drawer.Screen>
      <Drawer.Screen name="ContactScreen">{() => <ContactScreen />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default React.memo(DrawerNavigation);
