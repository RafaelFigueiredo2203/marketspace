import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { House } from 'phosphor-react-native'
import { Platform } from 'react-native'
import { Home } from '../screens/Home'

type AppRoutesType = {
  home: undefined
  history: undefined
  profile: undefined
  exercise: { exerciseId: string }
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesType>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesType>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <House size={30} />,
        }}
      />
    </Navigator>
  )
}
