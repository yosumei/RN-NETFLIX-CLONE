//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../theme/colors';
import { height, width } from '../../utils/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HambergerMenu, Menu, MenuBoard, SearchFavorite } from 'iconsax-react-native';

// create a component
const Header = () => {
const insets=useSafeAreaInsets();

    return (
        <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal:insets.left +10,
        backgroundColor: COLORS.PRIMARY,
        flexDirection: 'row',
      }}>
         <HambergerMenu size={30} color={COLORS.WHITE} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <Image
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/logo.png')}
        />
       
      </View>
      <SearchFavorite size={30} color={COLORS.WHITE} />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       height:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Header;
