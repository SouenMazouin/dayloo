import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigation';

import AppBar from '../components/AppBar/AppBar';

export default function RootStackNavigation(): Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CardsScreen"
        screenOptions={{
          header: AppBar,
        }}>
        <Stack.Screen name="CardsScreen" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
