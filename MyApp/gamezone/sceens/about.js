
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native';



import { globalStyles } from '../styles/global';


export default function About({ navigation }) {

  const [product, setProduct] = useState([
    { key: '1', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  Basic Kısa Kollu Pamuklu Erkek Tişört  ', price: '109,99TL', src: require('../img/Model/model1.png') },
    { key: '2', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/Model/model2.png') },
    { key: '3', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/Model/model3.png') },
    { key: '4', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/Model/model4.png') },
    { key: '5', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/Model/model5.png') },
    { key: '6', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/Model/model6.png') },
    { key: '7', contents: 'Cep Detaylı Yarım Kol Gömlek Ceket  ', price: '109,99TL', src: require('../img/Model/model7.png') },
  ])

  return (


    


        <View style={styles.container}>

          <View style={styles.Header}>
            <View style={{ flex: 1, justifyContent: 'center' }}><Image style={styles.mediaImage} source={require('../img/search.png')} /></View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}><Text style={styles.title} >A R I E N</Text></View>
            <TouchableOpacity onPress={() => navigation.push('HomePage')} style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-end', }}><Image style={styles.mediaImage} source={require('../img/bar2.png')} /></TouchableOpacity>
          </View>


          <View style={{ flex: 13 }}>

            
            <View style={styles.Content}>
              <FlatList
                data={product}
                numColumns={2}
                ListHeaderComponent={
                  <Image
                      style={{
                          flex: 1,
                          width: '100%',
                          padding: 10,
                          borderRadius: 6,height:250
                      }}
                      source={require('../img/jacket.png')}
                      resizeMode="stretch"
                  />
                }
                
                renderItem={({ item }) => (

                  <TouchableOpacity style={styles.card} onPress={() => navigation.push('Details', item)}>

                    <ImageBackground source={item.src} style={{ width: '100%', height: '100%', borderWidth: 1 }}>
                      <Text style={{ color: '#fff', flex: 1, textAlignVertical: 'bottom' }} >{item.contents}</Text>
                      <Text style={{ textAlign: 'right', color: '#fff' }}>{item.price}</Text>
                    </ImageBackground>
                  </TouchableOpacity>



                )}
              />
            </View>
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
  Main: {
    flex: 6,
    alignContent: 'center',
    justifyContent: 'center', borderWidth: 1,
  },

  Content: {
    flex: 10,
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
    width: '50%', height: 270, backgroundColor: '#fff',
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