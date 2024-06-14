//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail, removeDetailData } from '../../../store/actions/movieActions';
import { IMAGE_BASE_URL } from '../../service/urls';
import { height, token, width } from '../../utils/constants';
import FastImage from 'react-native-fast-image';
import { COLORS } from '../../theme/colors';
import Spinner from '../../components/router/ui/spinner';
import { ColorSwatch, Heart } from 'iconsax-react-native';
import { addFavoriteMovie, fecthFavoriteMovies } from '../../../store/actions/favoriteActions';

// create a component
const MovieDetail = ({route}) => {
    const {movieId} = route?.params;
    console.log(route)
    console.log(movieId)
    const {movieDetailData, pendingDetail} = useSelector(state => state.movies);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchMovieDetail(movieId));
      return () => {
        dispatch(removeDetailData());
        dispatch(fetchFavoriteMovies());
      };
    }, []);
  
    return (
      <View style={styles.container}>
        {pendingDetail && !movieDetailData ? (
          <Spinner />
        ) : (
          <ScrollView>
            <FastImage
              style={{
                width: width,
                height: height * 0.3,
                borderRadius: 5,
              }}
              source={{
                uri: `${IMAGE_BASE_URL}${movieDetailData?.backdrop_path}`,
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Pressable
              onPress={() =>
                dispatch(
                  addFavoriteMovie({
                    media_id: movieDetailData.id,
                    media_type: 'movie',
                    favorite: true,
                  }),
                )
              }
              style={{position: 'absolute', right: 20, top: 20}}>
              <Heart color={COLORS.WHITE} size={35}/>
            </Pressable>
            <Text
              numberOfLines={2}
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              {movieDetailData?.title}
            </Text>
            <Text
              style={{
                color: COLORS.WHITEGRAY,
                fontSize: 18,
                margin: 5,
              }}>
              {movieDetailData?.overview}
            </Text>
            <Text
              style={{
                color: COLORS.GRAY,
                fontSize: 18,
                marginTop: 20,
              }}>
              Çıkış Tarihi:{movieDetailData?.release_date}
            </Text>
          
          </ScrollView>
        )}
      </View>
    );
  };
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

//make this component available to the app
export default MovieDetail;
