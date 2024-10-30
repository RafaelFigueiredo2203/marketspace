import Checkbox from 'expo-checkbox'
import { ArrowLeft, Plus } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export function CreateAd() {
  const [isChecked, setChecked] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <>
      <View className="h-screen flex flex-col px-6 pt-12 bg-bg-gray_6">
        <View className="flex  flex-row  items-center justify-between">
          <TouchableOpacity>
            <ArrowLeft size={24} weight="bold" />
          </TouchableOpacity>
          <Text className="text-xl  font-bold text-gray-950  text-center">
            Criar anúncio
          </Text>

          <View className="w-6" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className=" ">
          <Text className="mt-6 font-bold text-gray-2 text-base">Imagens</Text>

          <Text className="text-gray-3 text-sm">
            Escolha até 3 imagens para mostrar o quanto o seu produto é
            incrível!
          </Text>

          <TouchableOpacity className="mt-4 w-24 h-24 flex items-center justify-center bg-gray-300 rounded-lg">
            <Plus size={24} color="#9F9BA1" />
          </TouchableOpacity>

          <Text className="text-base font-bold text-base text-gray-2 mt-6">
            Sobre o produto
          </Text>

          <TextInput
            textContentType="name"
            className="w-full h-11 bg-white rounded-lg px-2 mt-6"
            placeholder="Título do anúncio"
          />

          <TextInput
            multiline={true}
            numberOfLines={4}
            textContentType="name"
            className="w-full text-start bg-white rounded-lg px-2 mt-6 h-40"
            placeholder="Descrição do produto"
          />

          <View className="flex flex-row items-center justify-start mt-4">
            <Checkbox
              className="mr-2 w-5 h-5 rounded-full"
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#647AC7' : undefined}
            />

            <Text className="text-base mr-6 text-gray-2 font-normal">
              Produto Novo
            </Text>

            <Checkbox
              className="mr-2 w-5 h-5 rounded-full"
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#647AC7' : undefined}
            />

            <Text className="text-base mr-2 text-gray-2 font-normal">
              Produto Usado
            </Text>
          </View>

          <Text className="text-base font-bold text-base text-gray-2 mt-6">
            Venda
          </Text>

          <View className="w-full h-11 flex flex-row items-center justify-start bg-white rounded-lg px-2 mt-6">
            <Text className=" font-bold text-base text-gray-2 mr-2">R$</Text>
            <TextInput
              className="w-full h-11"
              textContentType="none"
              placeholder="Valor do produto"
            />
          </View>
          <View className="flex w-full flex-col items-left mt-6">
            <Text className="text-sm font-bold text-gray-2">Aceita troca?</Text>

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

            <View className="flex flex-row items-center justify-start mt-2">
              <Checkbox
                className="mr-2"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#647AC7' : undefined}
              />

              <Text className="text-base text-gray-2 font-normal">Boleto</Text>
            </View>

            <View className="flex flex-row items-center justify-start mt-2">
              <Checkbox
                className="mr-2"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#647AC7' : undefined}
              />

              <Text className="text-base text-gray-2 font-normal">Pix</Text>
            </View>

            <View className="flex flex-row items-center justify-start mt-2">
              <Checkbox
                className="mr-2"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#647AC7' : undefined}
              />

              <Text className="text-base text-gray-2 font-normal">
                Dinheiro
              </Text>
            </View>

            <View className="flex flex-row items-center justify-start mt-2">
              <Checkbox
                className="mr-2"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#647AC7' : undefined}
              />

              <Text className="text-base text-gray-2 font-normal">
                Cartão de Crédito
              </Text>
            </View>

            <View className="flex flex-row items-center justify-start mt-2">
              <Checkbox
                className="mr-2"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#647AC7' : undefined}
              />

              <Text className="text-base text-gray-2 font-normal">
                Depósito Bancário
              </Text>
            </View>
          </View>
          <View className="flex w-full flex-row items-center mt-6 mb-10 ">
            <TouchableOpacity className="flex-1 bg-gray-300 h-11 rounded-lg flex items-center justify-center mr-2">
              <Text className="text-gray-700 font-bold text-sm">Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-black h-11 rounded-lg flex items-center justify-center">
              <Text className="text-white font-bold text-sm">Avançar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
