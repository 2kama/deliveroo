import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal, selectBasketTotalItem } from '../store/slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import color from '../utils/color'
import Currency from 'react-currency-formatter'

const BasketBox = () => {

  const basketTotalPrice = useSelector(selectBasketTotal)
  const basketTotalItems = useSelector(selectBasketTotalItem)
  const navigation = useNavigation()

  if (basketTotalItems == 0) return null

  return (
    <View className="absolute bottom-10 w-full z-50">
        <TouchableOpacity className={`mx-5 bg-[#c41851] p-4 rounded-lg flex-row items-center space-x-1`}
            onPress={() => navigation.navigate('Basket')}
        >
            <Text className="text-white font-extrabold text-lg bg-[#870832] py-1 px-2">{basketTotalItems}</Text>
            <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
            <Text className="text-lg text-white font-extrabold">
                <Currency quantity={basketTotalPrice} currency="USD" />
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketBox