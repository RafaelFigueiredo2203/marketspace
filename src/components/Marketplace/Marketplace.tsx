import Checkbox from 'expo-checkbox'
import { Faders, MagnifyingGlass, X } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { ProductCard } from './Product/ProductCard'

export function Marketplace() {
  const [modalVisible, setModalVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const [isChecked, setChecked] = useState(false)

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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Faders weight="bold" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mt-10 mb-80 ">
        <View className="w-full   flex  flex-wrap flex-row ">
          <ProductCard />
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View className="bg-gray-900/80 h-screen flex items-end justify-end">
          <View className="h-2/3 w-full flex items-center bg-bg-gray_6 rounded-t-3xl px-6 pt-4">
            <View className="bg-gray-400 h-1 w-14 rounded-lg" />

            <View className="flex flex-row w-full items-center justify-between mt-7">
              <Text className="text-xl font-bold text-gray-950">
                Filtrar anúncios
              </Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <X size={24} />
              </Pressable>
            </View>

            <View className="flex w-full flex-col items-left mt-6">
              <Text className="text-sm font-bold text-gray-2">Condição</Text>

              <View className="flex w-full flex-row mt-4">
                <TouchableOpacity className="flex items-center justify-center w-[76px] h-7 rounded-2xl bg-bg-purple mr-4">
                  <Text className="uppercase text-xs text-white font-bold">
                    Novo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center justify-center w-[76px] h-7 rounded-2xl bg-gray-300">
                  <Text className="uppercase text-xs text-gray-700 font-bold">
                    Usado
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex w-full flex-col items-left mt-6">
              <Text className="text-sm font-bold text-gray-2">
                Aceita troca?
              </Text>

              <Switch
                className="mt-4"
                trackColor={{ false: ' #374151', true: '#647ac7' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor=" #374151"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View className="flex w-full flex-col items-left mt-6">
              <Text className="text-sm font-bold text-gray-2">
                Meios de pagamento aceitos
              </Text>

              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
