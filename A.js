import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function A(props) {
  return (
    <View style={styles.container}>
      <Text>A</Text>
      <Button title="Go to B" onPress={() => props.navigation.navigate('B')} />
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
