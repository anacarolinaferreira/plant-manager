import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { Profile } from '../pages/Profile';

import colors from '../styles/colors';

import AuthRoutes from './tabs.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"//não apareça o header
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white //padrão de cor de fundo
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen
      name="PlantSelect"
      component={AuthRoutes}
    />

    <stackRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    />

    <stackRoutes.Screen
      name="MyPlants"
      component={AuthRoutes}
    />
    <stackRoutes.Screen
      name="Profile"
      component={Profile}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;