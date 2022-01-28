import * as React from 'react';
import { ScrollView, Text, Image, View,  StyleSheet} from 'react-native';

function DetailMovie({coverImg, title, summary, year,genres}){
    return(
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.title}>
          {title}
      </Text>

      <Image style={styles.image}
          backgroundColor={'grey'} 
          source={{uri: coverImg}}
      />
      {genres.map((genre)=> (
          <Text style={styles.genre}> ▶ {genre}</Text>
      ))}
      
      <Text style={styles.summary}>
          {summary}
      </Text>
      </View>
      
    </ScrollView>
    )
}

//스타일 
const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        paddingBottom: 30,
        alignSelf: 'center',
        width: '95%',
        backgroundColor: '#EEEEEE',
        borderRadius: 5,
    },
    year:{
        marginTop: 10,
        marginBottom: 5,
        fontSize: 15,
        alignSelf: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
    },
    image:{
        marginTop: 10,
        height: 500,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
    },
    genre:{
        fontSize: 18,
        marginTop: '2.5%',
        marginLeft: '5%',
    },
    summary:{
        color: 'black',
        marginTop: 10,
        fontSize:20,
        
        width: '90%',
        alignSelf: 'center',
    }
}
)
export default DetailMovie