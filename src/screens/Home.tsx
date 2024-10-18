import { ArrowRight, Tag } from 'phosphor-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Header } from '../components/Header'
import { Marketplace } from '../components/Marketplace/Marketplace'

export function Home() {
  return (
    <View className=" h-screen flex flex-col px-6 pt-12 bg-bg-gray_6">
      <Header />

      <Text className="mt-8 text-left text-sm font-light text-gray-3">
        Seus produtos anunciados para venda
      </Text>

      <TouchableOpacity className="w-full h-16 bg-bg-purple/20 flex flex-row items-center justify-between px-4 mt-2 rounded-xl ">
        <View className="flex flex-row items-center justify-center">
          <Tag color="#364D9D" />

          <Text className="ml-4 font-bold text-gray-950 text-xl">
            4{'\n'}
            <Text className=" text-gray-600 text-xs ">anúncios ativos</Text>
          </Text>
        </View>

        <Text className="text-purple ml-2 text-[#364D9D]">Meus anúncios</Text>
        <ArrowRight size={18} color="#364D9D" />
      </TouchableOpacity>

      <Marketplace />
    </View>
  )
}
