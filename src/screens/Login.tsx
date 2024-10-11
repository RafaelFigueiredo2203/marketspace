import React from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export function Login() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[600px] items-center justify-start bg-bg-gray_6 px-10 rounded-b-3xl">
          <Image
            className="mt-24"
            source={require('../assets/logo-app.png')}
            style={{ width: 105, height: 74 }}
          />
          <Text className="mt-5 text-3xl font-bold">marketspace</Text>

          <Text className="mt-2 text-sm font-light text-gray-3">
            Seu espaço de compra e venda
          </Text>

          <Text className="mt-20 text-sm text-gray-2">Acesse sua conta</Text>

          <TextInput
            textContentType="emailAddress"
            className="w-full h-11 bg-white rounded-lg px-2 mt-6"
            placeholder="E-mail"
          />

          <TextInput
            textContentType="password"
            secureTextEntry={true}
            className="w-full h-11 bg-white rounded-lg px-2 mt-4"
            placeholder="Senha"
          />

          <TouchableOpacity className="w-full bg-[#647AC7] h-11  mt-10 rounded-lg flex items-center justify-center">
            <Text className="text-white">Entrar</Text>
          </TouchableOpacity>
        </View>

        <View className=" items-center justify-start mb-20  px-10 rounded-b-3xl">
          <Text className="mt-20 text-sm text-gray-2">
            Ainda não tem acesso?
          </Text>

          <TouchableOpacity className="w-full bg-[#D9D8DA] h-11  mt-10 rounded-lg flex items-center justify-center">
            <Text className="text-gray-2">Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
