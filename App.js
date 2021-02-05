import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// permite que possa ser usado como aplicação, assim sendo usado como site e aplicativo */
export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden />
        <WebView source={{ uri: 'http://169.254.20.229/app-galeria' }} /> 
   </View>
  );
}