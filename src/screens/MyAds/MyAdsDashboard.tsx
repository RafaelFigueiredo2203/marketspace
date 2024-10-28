import { Picker } from '@react-native-picker/picker'
import { CaretDown, Plus } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
  ActionSheetIOS,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { ProductCard } from '../../components/Marketplace/Product/ProductCard'

export function MyAdsDashboard() {
  const [selectedValue, setSelectedValue] = useState('Todos')

  function showActionSheetIOS() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancelar', 'Todos', 'Novo', 'Usado'],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          const options = ['Todos', 'Novo', 'Usado']
          setSelectedValue(options[buttonIndex - 1])
        }
      },
    )
  }

  return (
    <View className="h-screen flex flex-col px-6 pt-12 bg-bg-gray_6">
      <View className="flex flex-row items-center justify-center pl-6">
        <Text className="text-xl font-bold text-gray-950 w-full text-center">
          Meu anúncios
        </Text>

        <TouchableOpacity>
          <Plus size={24} weight="bold" />
        </TouchableOpacity>
      </View>

      <View className="flex flex-row items-center justify-between mt-6">
        <Text className="text-sm font-normal text-gray-950">9 anúncios</Text>

        {Platform.OS === 'android' ? (
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="javascript" />
            <Picker.Item label="Python" value="python" />
          </Picker>
        ) : (
          <TouchableOpacity
            className="w-28 h-9 border border-gray-300 rounded-lg flex flex-row px-4 items-center justify-between "
            onPress={showActionSheetIOS}
          >
            <Text className="text-sm font-normal text-gray-950">
              {selectedValue}
            </Text>

            <CaretDown size={16} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" mt-10 mb-24 "
      >
        <View className="w-full   flex  flex-wrap flex-row ">
          <ProductCard />
        </View>
      </ScrollView>
    </View>
  )
}
