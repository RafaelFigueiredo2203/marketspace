import { Faders, MagnifyingGlass } from 'phosphor-react-native'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ProductCard } from './Product/ProductCard'

export function Marketplace() {
  return (
    <View>
      <Text className="mt-8 text-left text-sm font-light text-gray-3">
        Compre produtos variados
      </Text>

      <View className="flex items-center justify-between flex-row w-full h-12 bg-white rounded-lg px-2 mt-6">
        <TextInput
          textContentType="name"
          className="w-min-[219px] w-[219px] h-11"
          placeholder="Buscar anúncio"
        />

        <View className="w-20 flex flex-row items-center justify-between">
          <TouchableOpacity>
            <MagnifyingGlass weight="bold" size={24} />
          </TouchableOpacity>
          <View className="h-6 w-[2px] bg-slate-400" />
          <TouchableOpacity>
            <Faders weight="bold" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full border mt-10  flex  flex-wrap flex-row ">
        <ProductCard />
        <ProductCard />
      </View>
    </View>
  )
}
