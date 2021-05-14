import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import SearchBookScreen from '../screens/SearchBookScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: SearchBookScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/SearchBookLogo.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Search Book",
    }
  }
});
