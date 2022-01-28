import * as React from 'react';
import {  FlatList, View,  Text } from 'react-native';
import Movie from '../src/Movie';


function SecondScreen({ navigation }) {
    const [loading,setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const getMovies = async() => {
      const response = await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year&download_count'
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };
  
    React.useEffect(() =>{
      getMovies();
    },[])
  
    return (
      <View>
        {loading ? (
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginTop: '80%', fontSize:40, fontWeight: 'bold'}}>Loading..</Text>
          </View>
        ):(
        <FlatList
          data={movies}
          renderItem= {({item}) => 
          <Movie
            coverImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            year={item.year}
          />}
        >
        </FlatList>)
      }</View>
    );
  }

export default SecondScreen