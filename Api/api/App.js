
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const moviURL = "https://reactnative.dev/movies.json"

  useEffect(() => {
    fetch(moviURL)
      .then(response => response.json())
      .then(json => setData(json.movies))
  })




  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,width:'100%',marginTop:10,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{fontSize:50}}>Movies</Text>
      </View>



      <View style={{flex:7,borderWidth:2,width:'100%',alignItems: 'center',marginTop:10}}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View style={styles.cardBody}>
            <Text>{item.title}</Text>
            <Text>{item.releaseYear}</Text>
          </View>
        )}
      />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    width: 300, height: 80, backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shodow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  }
});
