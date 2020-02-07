import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { func } from './src/constants/functions';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  return isLoading === false ? (
    <AppLoading startAsync={func.loadAssetsAsync} />
  ) : (
    <View style={styles.container}>
      <Text>Hi Jack! Get to work.</Text>
      <Text>Make sure you finish this one.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
