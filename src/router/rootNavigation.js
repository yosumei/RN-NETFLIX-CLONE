// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import { HOME, MOVIEDETAIL, MOVIELIST, TAB } from '../utils/routes';
import TabNavigation from './tabNavigation';
import MovieList from '../screen/movieList';
import Header from '../components/router/header';
import MovieDetail from '../screen/movieList/movieDetail';


const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (

      <Stack.Navigator 
      screenOptions={{
        headerShown:true,
        header:()=> <Header/> 
        

      }}>
        <Stack.Screen options={{
          headerShown:false
        }}  name={TAB} component={TabNavigation} />
        <Stack.Screen name={MOVIELIST} component={MovieList} />
        <Stack.Screen name={MOVIEDETAIL} component={MovieDetail} />
      </Stack.Navigator>
  );
}

export default RootNavigation;