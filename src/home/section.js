//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SectionHeader from '../components/router/ui/sectionHeader';
import { useSelector } from 'react-redux';
import MovieCard from './movieCard';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Section = props => {
    const {item} = props;
    const {upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies} =
      useSelector(state => state.movies);
  
    const getData = () => {
      switch (item.value) {
        case 'upcoming':
          return upcomingMovies;
        case 'popular':
          return popularMovies;
        case 'Top_rated':
          return topRatedMovies;
        case 'now_playing':
          return nowPlayingMovies;
        default:
          return popularMovies;
      }
    };
    return (
      <View style={styles.container}>
        <SectionHeader title={item.title} value={item.value}/>
        <FlatList
          horizontal
          data={getData()}
          renderItem={({item}) => <MovieCard item={item} />}
        />
      </View>
    );
  };
  
  
// define your styles
const styles = StyleSheet.create({
    container: {
        
    },
});

//make this component available to the app
export default Section;
