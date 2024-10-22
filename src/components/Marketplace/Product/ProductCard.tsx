import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import productImage from '../../../assets/product.png'

export function ProductCard() {
  return (
    <>
      <View className="flex flex-col items-center justify-center w-1/2 p-2">
        <ImageBackground
          source={productImage}
          resizeMode="cover"
          borderRadius={10}
          className="w-[153px] h-[100px] flex flex-row justify-between px-2 pt-1"
        >
          <Text>Foto</Text>
          <View className="w-14 h-4 flex items-center justify-center rounded-lg bg-slate-700">
            <Text className="text-[10pt] font-bold text-center text-white">
              USADO
            </Text>
          </View>
        </ImageBackground>

        <Text>Tênis vermelho</Text>
        <Text>R$ 59,90</Text>
      </View>
    </>
  )
}
