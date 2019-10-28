import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card() {
  return (
    <View style={styles.card}>
        <Text>Este é meu card!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: '#FAFAFA',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 40,
    height: 'auto',
  },
  text: {
      color: '#FFF'
  }
});
