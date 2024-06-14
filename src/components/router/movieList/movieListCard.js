//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FastImage  from 'react-native-fast-image';
import { token,height, width } from '../../../utils/constants';
import { IMAGE_BASE_URL } from '../../../service/urls';
import { COLORS } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';


// create a component
const MovieListCard = ({item}) => {
  const navigation=useNavigation()

    return (
        <Pressable style={styles.container}  onPress={()=>navigation.navigate(MOVIEDETAIL,{movieId:item.id})} >

  <FastImage
    style={{width:width*0.45,height:height*0.4,borderRadius:100}}
    source={{
      uri: `${IMAGE_BASE_URL}${item.poster_path}`,
      headers:{ Authorization:`Bearer ${token}` },
      priority: FastImage.priority.normal,
      cache:FastImage.cacheControl.cacheOnly
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
            
            <Text  numberOfLines={1} style={{color:"white",fontSize:16,fontWeight:"bold "}} >{item.title} </Text>
            <Text  numberOfLines={3} style={{color:COLORS.GRAY,fontSize:10,margin:5}} >{item.overview} </Text>
            
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin:5,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        width:width*0.25,

    },
});

//make this component available to the app
export default MovieListCard;
