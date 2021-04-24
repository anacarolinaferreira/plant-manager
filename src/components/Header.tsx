import React, { useEffect, useState } from 'react';

import {
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/profile.jpeg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {

    async function loadStorageUserName() {

      const user = await AsyncStorage.getItem('@plantmanager:username')
      setUserName(user || '')
    }
    loadStorageUserName();

  }, []);//esse vetor pode ser inserido dados para toda vez que o dado mudar o useEffect é recarregado, deixando em branco ele executa uma vez

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }

})