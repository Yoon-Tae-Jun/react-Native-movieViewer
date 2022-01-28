import * as React from 'react';
import {  View,  Text } from 'react-native';
import DetailMovie from '../src/DetailMovie';



function DetailScreen({ route, navigation}) {
  const Json_id = (route.params);
  const [loading, setLoading] = React.useState(true);
  const [movie, setMovie] = React.useState([]);
  const getMovies = async() => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${Json_id.id.id}`
      )  
    ).json();
    setMovie(json.data.movie);
    setLoading(false)
  };

  React.useEffect(() =>{
    getMovies();
  },[])
    return (
      <View >
        {loading ?(
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginTop: '80%', fontSize:40, fontWeight: 'bold'}}>Loading..</Text>
          </View>):(          
          <DetailMovie
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.description_intro}
            id = {movie.id}
            year={movie.year}
            genres={movie.genres}> 
            </DetailMovie>)
        }
      </View>
    );
  }

export default DetailScreen