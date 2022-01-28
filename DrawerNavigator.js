import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import  StackNavigator  from "./StackNavigator";
import SecondScreen from './screen/SecondScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={StackNavigator} options={{headerShown: false}}  />
      <Drawer.Screen name="영화소개" component={SecondScreen}  />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;