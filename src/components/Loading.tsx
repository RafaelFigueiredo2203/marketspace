import { ActivityIndicator, View } from 'react-native'

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={30} className="text-purple-500" />
    </View>
  )
}
