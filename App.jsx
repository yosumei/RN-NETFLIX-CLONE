//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RootNavigation from './src/router/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
    </Provider>
  );
}


