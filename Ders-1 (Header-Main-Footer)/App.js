
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style'

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.Header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>

      <View style={styles.Main}>
        <View style={styles.Side}><Text style={styles.textStyle}>Side</Text></View>
        <View style={styles.Content}><Text style={styles.textStyle}>Content</Text></View>
        
      </View>

      <View style={styles.Footer}>
        <Text style={styles.textStyle}>Footer</Text>
      </View>

    </View>


  )
}

export default App;