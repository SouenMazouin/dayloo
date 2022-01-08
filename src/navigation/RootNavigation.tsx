import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigation from './DrawerNavigation';
import AppBar from '../components/AppBar/AppBar';
import { DateProvider } from '../services/dateProvider/dateProvider';

const RootStackNavigation = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <DateProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CardsScreen"
          screenOptions={{
            header: AppBar,
          }}>
          <Stack.Screen name="CardsScreen" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </DateProvider>
  );
};

export default RootStackNavigation;
