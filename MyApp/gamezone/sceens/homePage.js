
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList,SafeAreaView,ImageBackground  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import { globalStyles } from '../styles/global';


export default function About({ navigation }) {

  const [product, setProduct] = useState([
    { key: '1', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/shoes.png'),navigation:'Details' },
    { key: '2', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/jacket.png'),navigation:'About' },
    { key: '3', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/sun.png'),navigation:'Details' },
    { key: '4', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/watch3.png'),navigation:'Details' },
    { key: '5', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/ring.png'),navigation:'Details' },
    
  ])

  return (


    
    <View  style={styles.container}>

      <View style={styles.Header}>
        <View style={{ flex: 1, }}><Image style={styles.mediaImage} source={require('../img/search.png')} /></View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}><Text style={styles.title} >A R I E N</Text></View>
        <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end',justifyContent:'center' }} onPress={() => navigation.navigate('Login')}><Image style={styles.mediaImage} source={require('../img/person.png')} /></TouchableOpacity> 
      </View>
      
      
      
        <View style={styles.Content}>
          <FlatList
            data={product}
            
            Header="dedadad"
            renderItem={({ item }) => (

              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.navigation)}>

                <ImageBackground source={item.src} style={{ width: '100%', height: '100%',borderWidth:1 }}>
                  <Text style={{color:'#fff',flex:1,textAlignVertical:'bottom'}} >{item.contents}</Text>
                  <Text style={{ textAlign: 'right',color:'#fff'}}>{item.price}</Text>
                </ImageBackground>
              </TouchableOpacity>



            )}
          />
        </View>
      
      
    </View >
            

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', marginTop: 25, backgroundColor: "#413D3D",
  },
  Header: {
    flex: 1, backgroundColor: '#fff', width: '100%',
    alignContent: 'center', flexDirection: 'row',
    justifyContent: 'center', padding: 10
  },
 

  Content: {
    flex: 15,
    marginBottom: 5,
    width: '100%',
  },

  img: {
    width: undefined, height: undefined, flex: 1, resizeMode: "cover", position: 'relative',
    
  },
  mediaImage: {
    width: 35, height: 35,

  },
  title: {
    fontSize: 36, color: "#413D3D",



  },
  card: {
    width: '100%', height: 180, backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  }


})