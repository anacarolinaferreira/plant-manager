import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour?: string
  }
}

export const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={50}
        height={50} />
      <Text style={styles.title}>
        {data.name}
      </Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>
          Regas às
        </Text>
        <Text style={styles.time}>
          {data.hour}
        </Text>
      </View>

    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.heading,
    flex: 1,
    marginLeft: 10,
    fontSize: 17
  },
  timeLabel: {
    color: colors.body_light,
    fontSize: 16,
    fontFamily: fonts.text
  },
  details: {
    alignItems: 'flex-end'
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark
  },
  hour: {

  }
})