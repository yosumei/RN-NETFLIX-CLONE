//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAVORITE, HOME } from '../../utils/routes';
import { FavoriteChart, Heart, Home } from 'iconsax-react-native';

// create a component
const TabIcon = ({ size, color, name, focused }) => {
    if (name == HOME)

        return (
            <Home size={size} color={color} />

        );
    else if (name == FAVORITE)
        return <Heart size={size} color={color} />
    ;

};


export default TabIcon;
