import React from 'react'
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import productImage from '../../../assets/product.png'

export function ProductCard() {
  return (
    <>
      <TouchableOpacity className="flex flex-col items-center justify-center w-1/2 p-2 mb-5">
        <ImageBackground
          source={productImage}
          resizeMode="cover"
          borderRadius={10}
          className="w-[153px] h-[100px] flex flex-row justify-between px-2 pt-1"
        >
          <View className="rounded-full border-[2px] border-[#e2e3e7] flex items-center justify-center h-7">
            <Image
              alt="image-user"
              className="rounded-full"
              source={require('../../../assets/profile.jpeg')}
              style={{ width: 23, height: 23 }}
            />
          </View>

          <View className="w-14 h-4 flex items-center justify-center rounded-lg bg-slate-700">
            <Text className="text-[10pt] font-bold text-center text-white">
              USADO
            </Text>
          </View>
        </ImageBackground>

        <View className="flex w-full flex-col items-left mt-2">
          <Text className="text-sm text-gray-2">Tênis vermelho</Text>
          <Text className="text-base text-gray-950 font-bold">
            <Text className="text-xs">R$</Text> 59,90
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}
