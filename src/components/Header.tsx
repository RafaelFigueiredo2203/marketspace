import { Plus } from 'phosphor-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between ">
      <View className="flex flex-row">
        <View className="rounded-full border-[3px] border-[#647AC7] mr-4">
          <Image
            className="rounded-full"
            source={require('../assets/profile.jpeg')}
            style={{ width: 45, height: 45 }}
          />
        </View>

        <Text className="text-gray-950 text-base">
          Boas vindas,{'\n'}
          <Text className="font-bold text-gray-950 text-base">Rafael</Text>
        </Text>
      </View>
      <TouchableOpacity
        className="bg-black h-11 min-w-[139px] rounded-lg flex flex-row items-center justify-center"
        activeOpacity={0.7}
      >
        <Plus size={18} color="#FFF" />
        <Text className="text-white ml-2">Criar anúncio</Text>
      </TouchableOpacity>
    </View>
  )
}
