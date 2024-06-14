//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyles } from '../../styles/screenStyles';

const Favorite = props => {
    const [refreshing, setRefresh] = useState(false);
    const {favoriteMovies} = useSelector(state => state.favorites);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchFavoriteMovies());
    }, []);
  
    return (
      <View style={styles.container}>
        <FlatList
        
          numColumns={2}
          keyExtractor={item => item.id}
          data={favoriteMovies}
          renderItem={({item}) => <MovieListCard item={item} />}
        />
      </View>
    );
  };
export default Favorite;
