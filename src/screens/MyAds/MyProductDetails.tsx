import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  PencilLine,
  Power,
  QrCode,
  Trash,
} from 'phosphor-react-native'
import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export function MyProductDetails() {
  return (
    <View className="flex-1 flex-col bg-bg-gray_6 ">
      <SafeAreaView style={{ backgroundColor: '#edecee' }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="  flex flex-col px-6  pb-20 ">
          <View className="  flex flex-row items-center justify-between">
            <TouchableOpacity>
              <ArrowLeft size={28} color="#1A181B" />
            </TouchableOpacity>

            <TouchableOpacity>
              <PencilLine size={28} color="#1A181B" />
            </TouchableOpacity>
          </View>
          <View className="flex items-center justify-center mt-4">
            <Image
              resizeMode="center"
              source={require('../../assets/productImage.png')}
              style={{ height: 280 }}
            />
          </View>

          <View className="flex items-center justify-start flex-row w-full mt-4">
            <View className="rounded-full border-[2px] border-[#647ac7] flex items-center justify-center h-7 w-7 mr-2">
              <Image
                alt="image-user"
                className="rounded-full"
                source={require('../../assets/profile.jpeg')}
                style={{ width: 24, height: 24 }}
              />
            </View>

            <Text className="text-sm text-gray-900">Rafael Figueiredo</Text>
          </View>

          <View className="w-12 h-5 flex items-center justify-center rounded-lg bg-gray-300 mt-6">
            <Text className="text-[10pt] font-bold text-center text-gray-900">
              NOVO
            </Text>
          </View>

          <View className="flex items-center justify-between flex-row w-full mt-4">
            <Text className="text-xl font-bold text-center text-gray-900">
              Bicicleta
            </Text>
            <Text className="text-xl text-[#647ac7] font-bold">
              <Text className="text-sm">R$</Text> 59,90
            </Text>
          </View>

          <Text className="text-sm font-normal text-left text-gray-800 mt-2">
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
            Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
            nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis
            in aliquam.
          </Text>

          <Text className="text-sm font-bold text-left text-gray-800 mt-4">
            Aceita troca? <Text className="text-sm font-normal">Sim</Text>
          </Text>

          <Text className="text-sm font-bold text-left text-gray-800 mt-4">
            Meios de pagamento :
          </Text>

          <View className="flex items-center justify-start flex-row w-full mt-2">
            <Barcode size={18} />

            <Text className="text-sm font-normal text-center text-gray-800 ml-1">
              Boleto
            </Text>
          </View>

          <View className="flex items-center justify-start flex-row w-full mt-2">
            <QrCode size={18} />

            <Text className="text-sm font-normal text-center text-gray-800 ml-1">
              Pix
            </Text>
          </View>

          <View className="flex items-center justify-start flex-row w-full mt-2">
            <Money size={18} />

            <Text className="text-sm font-normal text-center text-gray-800 ml-1">
              Dinheiro
            </Text>
          </View>

          <View className="flex items-center justify-start flex-row w-full mt-2">
            <CreditCard size={18} />

            <Text className="text-sm font-normal text-center text-gray-800 ml-1">
              Cartão de crédito
            </Text>
          </View>

          <View className="flex items-center justify-start flex-row w-full mt-2">
            <Bank size={18} />

            <Text className="text-sm font-normal text-center text-gray-800 ml-1">
              Depósito Bancário
            </Text>
          </View>

          <TouchableOpacity className="w-full bg-black h-11  mt-6 rounded-lg flex flex-row items-center justify-center">
            <Power size={16} color="white" />
            <Text className="text-white ml-2">Desativar anúncio</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full bg-[#D9D8DA] h-11  mt-4 rounded-lg flex flex-row items-center justify-center mb-22">
            <Trash size={16} color="#3e3a40" />
            <Text className="text-gray-2 ml-2">Excluir anúncio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
