import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { Loading } from '../components/Loading'
import { useAuth } from '../hooks/useAuth'
import { AppRoutes } from './app.routes'
import { AuthRouter } from './auth.routes'

export function Routes() {
  const { user, isLoadingUserStorageData } = useAuth()

  if (isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <View className="flex-1">
      <NavigationContainer independent={true}>
        {user.id ? <AppRoutes /> : <AuthRouter />}
      </NavigationContainer>
    </View>
  )
}
