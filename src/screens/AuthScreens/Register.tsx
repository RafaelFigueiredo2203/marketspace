import { Pencil, User } from 'phosphor-react-native'
import React from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export function Register() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" items-center justify-start bg-bg-gray_6 px-10 rounded-b-3xl">
          <Image
            className="mt-16"
            source={require('../assets/logo-app.png')}
            style={{ width: 60, height: 40 }}
          />

          <Text className="mt-5 text-xl font-bold">Boas Vindas!</Text>

          <Text className="mt-2 text-center text-sm font-light text-gray-3">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>

          <TouchableOpacity className="bg-gray-300 rounded-full px-4 py-4 border-4 border-[#647AC7] mt-8">
            <User size={50} weight="bold" color="#777777" />

            <View className="right-[-15px] bottom-0 absolute bg-[#647AC7] rounded-full px-2 py-2">
              <Pencil color="white" />
            </View>
          </TouchableOpacity>

          <TextInput
            textContentType="name"
            className="w-full h-11 bg-white rounded-lg px-2 mt-6"
            placeholder="Nome"
          />

          <TextInput
            textContentType="emailAddress"
            className="w-full h-11 bg-white rounded-lg px-2 mt-6"
            placeholder="E-mail"
          />

          <TextInput
            textContentType="telephoneNumber"
            className="w-full h-11 bg-white rounded-lg px-2 mt-6"
            placeholder="Telefone"
          />

          <TextInput
            textContentType="password"
            secureTextEntry={true}
            className="w-full h-11 bg-white rounded-lg px-2 mt-4"
            placeholder="Senha"
          />

          <TextInput
            textContentType="password"
            secureTextEntry={true}
            className="w-full h-11 bg-white rounded-lg px-2 mt-4"
            placeholder="Confirmar Senha"
          />

          <TouchableOpacity className="w-full bg-black h-11  mt-6 rounded-lg flex items-center justify-center">
            <Text className="text-white">Criar</Text>
          </TouchableOpacity>

          <Text className="mt-10 text-sm text-gray-2">Ja tem uma conta?</Text>

          <TouchableOpacity className="w-full bg-[#D9D8DA] h-11  mt-4 rounded-lg flex items-center justify-center mb-52">
            <Text className="text-gray-2">Ir para login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
