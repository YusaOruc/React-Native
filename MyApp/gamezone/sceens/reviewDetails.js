
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import { globalStyles } from '../styles/global';


export default function ReviewDetails({ route,navigation }) {

  let data = route.params;

  return (



    <View style={styles.container}>

      <View style={styles.Header}>
        <View style={{ flex: 1,justifyContent:'center' }}><Image style={styles.mediaImage} source={require('../img/search.png')} /></View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}><Text style={styles.title} >A R I E N</Text></View>
        <TouchableOpacity onPress={() => navigation.push('HomePage')} style={{ justifyContent:'center',flex: 1, alignItems: 'flex-end' }}><Image style={styles.mediaImage} source={require('../img/bar2.png')} /></TouchableOpacity>
      </View>
      <View style={styles.Content}>
        <View style={{ width: '100%', flex: 11, height: '100%', backgroundColor: '#fff' }}>
          
          <Image source={data.src} style={{width: '100%', height: '100%' }}/>
        </View>


        <View style={{ flex: 4, backgroundColor: '#fff', padding: 5,paddingLeft:15,paddingRight:15 }}>

          <View style={{ flex: 3, backgroundColor: '#fff', borderBottomWidth: 2, padding: 5, }}>
            <Text style={{ flex: 2, color: '#0E0D0D', fontSize: 20 }}>{data.contents}</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 2, color: '#0E0D0D', fontSize: 20 }}></Text>
              <Image style={{ justifyContent: 'center', alignItems: 'flex-end', width: 120, height: 30, resizeMode: 'stretch', }} source={require('../img/star.png')} />
            </View>

          </View>

          <View style={{ flex: 1,paddingTop:10,paddingBottom:10, backgroundColor: '#fff', borderBottomWidth: 2, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ justifyContent: 'center', alignItems: 'flex-start', width: 100, height: 30, resizeMode: 'stretch', }} source={require('../img/size.png')} />
              <Text style={{ flex: 2, color: '#0E0D0D', fontSize: 20,  }}></Text>
              <Text style={{ flex: 2, color: '#0E0D0D', fontSize: 20, }}></Text>
              <Text style={{ flex: 2, color: '#0E0D0D', fontSize: 20,  }}></Text>
              <Text style={{ flex: 3, color: '#0E0D0D', fontSize: 20, alignItems: 'flex-end', }}>{data.price}</Text>

            </View>
          </View>
          <View style={{ flex: 0.1, backgroundColor: '#fff', }}>

          </View>


        </View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 2, backgroundColor: '#0E0D0D', marginBottom: -5 }}>
          <Text style={{ color: '#fff', fontSize: 25, }}>S E P E T E   E K L E</Text>
        </TouchableOpacity>



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