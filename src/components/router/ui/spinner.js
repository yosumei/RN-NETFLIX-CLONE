//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../theme/colors';

// create a component
const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={COLORS.WHITE}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Spinner;
