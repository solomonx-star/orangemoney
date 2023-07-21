import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import globalStyles from './GlobalStyle/Styles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Text style={globalStyles.text}>Open up App.js to start working on your app!</Text>
    </View> 
  );
}



