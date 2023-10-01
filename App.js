import * as React from 'react';
import Home from './src/components/home'
import Config from './src/components/config'

import { createNativeStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{ headerShown: false }}
      >
        <Stack.Screen 
          name = 'Home'
          component = { Home }
        />
        <Stack.Screen 
          name = 'Config'
          component = { Config }
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}
