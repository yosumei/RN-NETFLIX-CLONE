import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from '../screen/favorite';
import Home from '../screen/home';
import { FAVORITE, HOME } from '../utils/routes';
import { COLORS } from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import Header from '../components/router/header';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (

      <Tab.Navigator 
      screenOptions={({route}) => ({
          
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.GRAY,
        header:()=>(
            <Header 
            
            />
        )
         
      })}
      >
        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen name={FAVORITE} component={Favorite} />
      </Tab.Navigator>

  );
}