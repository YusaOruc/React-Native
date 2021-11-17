
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
        <View style={{ padding: 10, }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Abandoned Ship</Text>
          <Text >Both Android forma tted and iOS forma tted allow you to display formatted text formatting</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  card: {
    borderRadius: 20,
    backgroundColor: '#ffff',
    width: 250, height: 250,
    marginTop: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

  },
  image: {
    width: 250, height: 150,
    borderTopRightRadius: 20, borderTopLeftRadius: 20,
  }
});
