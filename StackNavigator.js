/* StackNavigator.js */
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screen/HomeScreen';
import Details from './screen/DetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default StackNavigator