import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Alert
} from 'react-native';

import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantCardSecondary } from '../components/PlantCardSecondary';

import waterdropImg from '../assets/waterdrop.png';

import { loadPlant, PlantProps, deletePlant } from '../libs/storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nexWaterd, setNexWaterd] = useState<string>();


  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😭',
        onPress: async () => {
          try {
            await deletePlant(plant.id);
            
            setMyPlants((oldData) => (
              oldData.filter((item) => item.id !== plant.id)
            ))

          } catch {
            Alert.alert('Ocorreu um erro ao tentar remover a planta 😭.')
          }
        },
        style: 'destructive'
      }
    ])
  }

  useEffect(() => {

    async function loadStorageData() {

      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNexWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}.`
      )

      setMyPlants(plantsStoraged);
      setLoading(false)
    }
    loadStorageData();
  }, [])

  if (loading)
    return < Load />

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdropImg} style={styles.spotlightImage} />

        <Text style={styles.spotlightText}>
          {nexWaterd}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => { handleRemove(item) }}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spotlightImage: {
    width: 60,
    height: 60
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    textAlign: 'justify'
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }
})