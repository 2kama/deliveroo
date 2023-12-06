import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../store/slices/restaurantSlice'
import { selectBasketItems, selectBasketTotal } from '../store/slices/basketSlice'
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons"
import color from '../utils/color'
import Currency from 'react-currency-formatter'
import { removeFromBasket } from '../store/slices/basketSlice'

const BasketScreen = () => {
  
const navigation = useNavigation()
const restaurant = useSelector(selectRestaurant)
const items = useSelector(selectBasketItems)
const totalPrice = useSelector(selectBasketTotal)
const dispatch = useDispatch()

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className={`p-5 border-b border-[#c41851] bg-white shadow-xs`}>
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">
                        {restaurant.title}
                    </Text>
                </View>

                <TouchableOpacity
                    className="rounded-full bg-gray-100 absolute top-3 right-5"
                    onPress={navigation.goBack}
                >
                    <AntDesign name="closecircle" size={30} color={color.primary} />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image 
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <Text className="flex-1">Deliver in 50-75 mins</Text>
                <TouchableOpacity>
                    <Text className="text-[#c41851]">Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="divide-y divide-gray-200">
                {items.map(item => (
                    <View key={item.id} className="flex-row items-center bg-white space-x-3 py-2 px-5">
                        <Text className="text-[#c41851]">{item.quantity} x</Text>
                        <Image 
                            source={{
                                uri: item.image
                            }}
                            className="w-12 h-12 rounded-full"
                        />
                        <Text className="flex-1">{item.name}</Text>

                        <Text className="text-gray-600">
                            <Currency quantity={item.price} currency="USD" />
                        </Text>

                        <TouchableOpacity>
                            <Text
                              className="text-[#c41851] text-xs"
                              onPress={() => dispatch(removeFromBasket({ id: item.id}))}
                              >
                                Remove
                              </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={totalPrice} currency="USD" />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery Fee</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={5.99} currency="USD" />
                    </Text>
                </View>

                <View className="flex-row justify-between">
                    <Text>Order Total</Text>
                    <Text className="font-extrabold">
                        <Currency quantity={totalPrice + 5.99} currency="USD" />
                    </Text>
                </View>

                <TouchableOpacity className="rounded-lg bg-[#c41851] p-4"
                  onPress={() => navigation.navigate('Preparing')}
                >
                    <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen