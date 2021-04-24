import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image
} from 'react-native';

import colors from '../styles/colors';
import { Header } from '../components/Header';

import girassolImg from '../assets/favorites/girassol.png'
import botanicoImg from '../assets/favorites/botanico.png'
import manjericaoImg from '../assets/favorites/manjericao.png'
import rosaImg from '../assets/favorites/rosa.png'
import fonts from '../styles/fonts';

export function Profile() {

  const favorites = [
    { name: "Girassóis", image: girassolImg },
    { name: "Rosas", image: rosaImg },
    { name: "Manjericão", image: manjericaoImg },
    { name: "Suculenta", image: botanicoImg },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.title}>Suas plantas favoritas 🍃❤</Text>
      </View>

      <View style={styles.cards}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => String(item.name)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardsName}>
                {item.name}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  title: {
    paddingTop: 20,
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.heading
  },
  cards: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 32
  },
  card: {
    margin: 10,
    alignItems:'center',
    backgroundColor: colors.green_light,
    padding: 20,
    borderRadius:16
  },
  image: {
    width: 80,
    height: 80
  },
  cardsName: {
    fontFamily: fonts.text,
    fontSize:15,
    color: colors.heading
  }
})