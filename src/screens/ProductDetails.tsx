import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
  WhatsappLogo,
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

export function ProductDetails() {
  return (
    <View className="flex-1 flex-col bg-bg-gray_6 ">
      <SafeAreaView style={{ backgroundColor: '#edecee' }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="  flex flex-col px-6  pb-20 ">
          <TouchableOpacity>
            <ArrowLeft size={28} color="#1A181B" />
          </TouchableOpacity>
          <View className="flex items-center justify-center mt-4">
            <Image
              resizeMode="center"
              source={require('../assets/productImage.png')}
              style={{ height: 280 }}
            />
          </View>

          <View className="flex items-center justify-start flex-row w-full mt-4">
            <View className="rounded-full border-[2px] border-[#647ac7] flex items-center justify-center h-7 w-7 mr-2">
              <Image
                alt="image-user"
                className="rounded-full"
                source={require('../assets/profile.jpeg')}
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
        </View>
      </ScrollView>
      <View className="w-full h-24 flex flex-row items-center justify-between px-6 bg-white">
        <Text className="text-2xl text-[#647ac7] font-bold">
          <Text className="text-base">R$</Text> 59,90
        </Text>

        <TouchableOpacity className=" bg-[#647ac7] h-11   rounded-lg flex flex-row items-center justify-center px-4">
          <WhatsappLogo size={16} color="white" weight="fill" />
          <Text className="text-white font-bold text-sm ml-2">
            Entrar em contato
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
