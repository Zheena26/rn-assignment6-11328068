import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './contexts/CartContexts';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
