import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
         suas plantas de  {'\n'}
         forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <Button title=">" />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 90
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    width: 292,
    height: 284
  },
})