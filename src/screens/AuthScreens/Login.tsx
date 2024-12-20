import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Toast from 'react-native-toast-message'
import { z } from 'zod'
import { Loading } from '../../components/Loading'
import { useAuth } from '../../hooks/useAuth'
import { AppError } from '../../utils/AppError'

const loginSchema = z.object({
  email: z
    .string({ message: 'Obrigatório' })
    .email({ message: 'Email inválido.' }),
  password: z
    .string({ message: 'Obrigatório' })
    .min(6, 'A senha deve conter 6 dígitos.'),
})

type LoginTypeSchema = z.infer<typeof loginSchema>

export function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const { SignIn } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = async (data: LoginTypeSchema) => {
    const { password, email } = data

    try {
      setIsLoading(true)
      await SignIn(email, password)
      console.log('Logado!')
    } catch (error) {
      console.log(error)
      const isAppError = error as AppError

      const title = isAppError
        ? isAppError.response.data.message
        : 'Não foi possível entrar , tente novamente mais tarde !'
      Toast.show({
        type: 'error',
        text1: 'Erro ❗',
        text2: title,
      })
      setIsLoading(false)
    }
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" items-center justify-start bg-bg-gray_6 px-10 rounded-b-3xl">
          <Image
            className="mt-24"
            source={require('../../assets/logo-app.png')}
            style={{ width: 105, height: 74 }}
          />
          <Text className="mt-5 text-3xl font-bold">marketspace</Text>

          <Text className="mt-2 text-sm font-light text-gray-3">
            Seu espaço de compra e venda
          </Text>

          <Text className="mt-20 text-sm text-gray-2">Acesse sua conta</Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                textContentType="emailAddress"
                className="w-full h-11 bg-white rounded-lg px-2 mt-6"
                placeholder="E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: 'red' }}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                className="w-full h-11 bg-white rounded-lg px-2 mt-4"
                placeholder="Senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={{ color: 'red' }}>{errors.password.message}</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="w-full bg-[#647AC7] h-11 mb-9  mt-10 rounded-lg flex items-center justify-center"
          >
            {!isLoading ? (
              <Text className="text-white">Entrar</Text>
            ) : (
              <Loading />
            )}
          </TouchableOpacity>
        </View>

        <View className=" items-center justify-start mb-40  px-10 rounded-b-3xl">
          <Text className="mt-10 text-sm text-gray-2">
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
