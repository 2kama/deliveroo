import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from "react-currency-formatter"
import { AntDesign } from "@expo/vector-icons"
import color from '../utils/color'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../store/slices/basketSlice'

const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {

    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const basketItems = useSelector(state => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

  return (
    <>
    
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}>
            <View className="flex-row">
                <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency quantity={price} currency="USD" />
                        </Text>
                </View>
                <View>
                    <Image 
                        source={{
                            uri: image
                        }}
                        className="h-20 w-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
        </TouchableOpacity>

        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-3 pb-3">
                    <TouchableOpacity
                        onPress={removeItemFromBasket}
                        disabled={!basketItems.length}
                    >
                        <AntDesign name="minuscircle" size={30} color={basketItems.length > 0 ? color.primary : "gray"} />
                    </TouchableOpacity>
                    <Text>{basketItems.length > 0 ? basketItems[0].quantity : 0}</Text>
                    <TouchableOpacity
                        onPress={addItemToBasket}
                    >
                        <AntDesign name="pluscircle" size={30} color={color.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  )
}

export default DishRow