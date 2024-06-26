import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/Home'
import Movies from './Screens/Movies'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerTitle:'Movies'}}  name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
