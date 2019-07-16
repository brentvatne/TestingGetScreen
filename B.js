import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

console.log('hi');

export default function B() {
  return (
    <View style={styles.container}>
      <Text>B</Text>
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
});
