import { zodResolver } from '@hookform/resolvers/zod'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { Pencil, User } from 'phosphor-react-native'
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
import { z } from 'zod'
import { api } from '../../services/api'
import { AppError } from '../../utils/ApppError'

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
    email: z
      .string({ message: 'Obrigatório' })
      .email({ message: 'Email inválido.' }),
    tel: z.string({ message: 'Telefone é obrigatório' }),
    password: z
      .string({ message: 'Obrigatório' })
      .min(6, 'A senha deve conter 6 dígitos.'),
    confirm_password: z.string({ message: 'Obrigatório' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não correspondem.',
    path: ['confirm_password'], // Indica onde o erro será exibido
  })

type RegisterTypeSchema = z.infer<typeof registerSchema>

export function Register() {
  const [isPhotoLoading, setIsPhotoLoading] = useState(false)
  const [photoSelected, setPhotoSelected] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypeSchema>({
    resolver: zodResolver(registerSchema),
  })
  const onSubmit = async (data: RegisterTypeSchema) => {
    // eslint-disable-next-line camelcase
    const { confirm_password, name, email, tel } = data
    // eslint-disable-next-line camelcase
    console.log({ name, email, tel, confirm_password, photoSelected })

    try {
      await api.post('/users', {
        name,
        email,
        tel,
        // eslint-disable-next-line camelcase
        password: confirm_password,
        avatar: photoSelected,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSelectUserPhoto() {
    setIsPhotoLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      console.log(photoSelected)

      if (photoSelected.canceled) return
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri,
        )

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return console.log({
            title: 'Essa imagem é muito grande!Escolha uma de até 5Mb',
            placement: 'top',
            bgColor: 'red.500',
          })
        }
        const fileExtension = photoSelected.assets[0].uri.split('.').pop()
        const photoFile = {
          name: `${fileExtension}`.toLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any

        const userPhotoUploadForm = new FormData()
        userPhotoUploadForm.append('avatar', photoFile)

        setPhotoSelected(photoFile.uri)
        console.log({
          title: 'Foto Atualizada',
          placement: 'top',
          bgColor: 'green.500',
        })
      }
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível criar , tente novamente mais tarde!'
      console.log({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsPhotoLoading(false)
    }
  }

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" items-center justify-start bg-bg-gray_6 px-10 rounded-b-3xl">
          <Image
            className="mt-16"
            source={require('../../assets/logo-app.png')}
            style={{ width: 60, height: 40 }}
          />

          <Text className="mt-5 text-xl font-bold">Boas Vindas!</Text>

          <Text className="mt-2 text-center text-sm font-light text-gray-3">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>

          <View className="border-4 flex items-center justify-center border-[#647AC7] mt-8 rounded-full">
            <TouchableOpacity
              className="bg-gray-300 flex items-center justify-center rounded-full w-24 h-24  "
              onPress={handleSelectUserPhoto}
            >
              {photoSelected === '' ? (
                <User size={50} weight="bold" color="#777777" />
              ) : (
                <Image
                  alt="User-photo"
                  source={{ uri: photoSelected }}
                  className=" w-24 h-24 rounded-full"
                />
              )}

              <View className="right-[-15px] bottom-0 absolute bg-[#647AC7] rounded-full px-2 py-2">
                <Pencil color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                textContentType="name"
                className="w-full h-11 bg-white rounded-lg px-2 mt-6"
                placeholder="Nome"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={{ color: 'red' }}>{errors.name.message}</Text>
          )}

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
                textContentType="telephoneNumber"
                className="w-full h-11 bg-white rounded-lg px-2 mt-6"
                placeholder="Telefone"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
            )}
            name="tel"
          />
          {errors.tel && (
            <Text style={{ color: 'red' }}>{errors.tel.message}</Text>
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
                placeholder="Confirmar Senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirm_password"
          />
          {errors.confirm_password && (
            <Text style={{ color: 'red' }}>
              {errors.confirm_password.message}
            </Text>
          )}

          {photoSelected === '' ? (
            <TouchableOpacity
              disabled={!photoSelected}
              onPress={handleSubmit(onSubmit)}
              className="w-full bg-gray-400 h-11   mt-6 rounded-lg flex items-center justify-center"
            >
              <Text className="text-red-500 text-xs">Foto é obrigatório</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={!photoSelected}
              onPress={handleSubmit(onSubmit)}
              className="w-full bg-black h-11   mt-6 rounded-lg flex items-center justify-center"
            >
              <Text className="text-white">Criar</Text>
            </TouchableOpacity>
          )}

          <Text className="mt-10 text-sm text-gray-2">Ja tem uma conta?</Text>

          <TouchableOpacity className="w-full bg-[#D9D8DA] h-11  mt-4 rounded-lg flex items-center justify-center mb-52">
            <Text className="text-gray-2">Ir para login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
