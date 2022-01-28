import * as React from 'react';
import { TouchableOpacity, Image, View,  StyleSheet, Text} from 'react-native';



//movie 틀
function MainMovie({coverImg, title,id, press}){
    return(
      <View style={styles.container}>
        <TouchableOpacity 
            style={styles.touch}
            onPress={() =>{
                press(id);
                
            }}
        >
        <Image style={styles.image}
            backgroundColor={'grey'} 
            source={{uri: coverImg}}
        />
        </TouchableOpacity>
        </View>
    )
  
  }

//스타일 
const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        width: '50%',
        height: '100%',
        backgroundColor: 'white', 
    },
    touch:{
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
    },
    image:{
        marginTop: 10,
        height: 300,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 5,
    },

}
)
export default MainMovie