import * as React from 'react';
import {  FlatList,View,  Text } from 'react-native';
import MainMovie from '../src/mainMovie';

function HomeScreen({ navigation }) {
    const [loading,setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);


    const goDetail = (id) => {
      navigation.navigate('Details',{
        id: {id}
      });
    }

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
          numColumns={2}
          renderItem= {({item}) => 
          <MainMovie
            coverImg={item.medium_cover_image}
            title={item.title}
            id = {item.id}
            press={goDetail}
            
          />}
        >
  
        </FlatList>)
      }</View>
    );
  }

  export default  HomeScreen