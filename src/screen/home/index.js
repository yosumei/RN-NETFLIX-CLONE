//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { screenStyles } from '../../styles/screenStyles';
import SectionHeader from '../../components/router/ui/sectionHeader';
import widgets from "../../widgets/widget.json"
import Section from '../../home/section';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../../../store/actions/movieActions';

// create a component
const Home = () => {
    const dispatch=useDispatch()

    useEffect(() => {
      dispatch(fetchUpcomingMovies())
      dispatch(fetchNowPlayingMovies())
      dispatch(fetchPopularMovies())
      dispatch(fetchTopRatedMovies())
    
   
    }, [])
    
    return (
        <View style={screenStyles.container}>
            <FlatList   data= {widgets} 
            renderItem={({item})=><Section item={item}  keyExtractor={item=> item.id
            }/>}
            
            />
        </View>
    );
};


//make this component available to the app
export default Home;
