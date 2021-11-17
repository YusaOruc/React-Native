import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import Home from './sceens/home';
import About from './sceens/about';
import Login from './sceens/login';
import Details from './sceens/reviewDetails';
import HomePage from './sceens/homePage';
import Navigator from './routes/homeStack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
      
       <Stack.Screen name="HomePage" component={HomePage} options={{
          headerShown: false, title: "HomePage",
        }} />

       <Stack.Screen name="About" component={About} options={{
          headerShown: false, title: "About",
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false, title: "Login",
        }} />
        
        <Stack.Screen name="Details" component={Details} options={{
          headerShown: false, title: "Details",
        }} />

      </Stack.Navigator>



    </NavigationContainer>

  );
}


