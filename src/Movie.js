import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';


//movie 틀
function Movie({coverImg, title, summary, year}){
    return(
      <View style={{backgroundColor: 'white'}}>
          <View style={styles.container}>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.title}>
            {title}
        </Text>
        <Image style={styles.image}
            backgroundColor={'grey'} 
            source={{uri: coverImg}}
        />
        <Text style={styles.summary}>
            {summary.length > 500 ? `${summary.slice(0, 500)}...`: summary}
        </Text>
        </View>
        
      </View>
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
    summary:{
        marginTop: 10,
        fontSize:20,
        width: '90%',
        alignSelf: 'center',
    }
}
)
export default Movie