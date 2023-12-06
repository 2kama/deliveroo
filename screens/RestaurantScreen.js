import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import color from '../utils/color'
import DishRow from '../components/DishRow'
import BasketBox from '../components/BasketBox'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../store/slices/restaurantSlice'

const RestaurantScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }
    } = useRoute()

    useEffect(() => {
      dispatch(setRestaurant({
        id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
      }))
    }, [])

  return (
    <>
    <BasketBox />
    <ScrollView>
        <View className="relative">
            <Image 
                source={{
                    uri: imgUrl
                }}
                className="w-full h-56 bg-gray-300 p-4"
            />
            <TouchableOpacity
                className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                onPress={navigation.goBack}
            >
                <AntDesign name="arrowleft" size={20} color={color.primary} />
            </TouchableOpacity>
        </View>

        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View className="flex-row items-center space-x-1">
                        <AntDesign name="star" color="gold" size={20} />
                        <Text className="text-xs text-gray-500">
                            <Text className="text-yellow-600">{rating}</Text> . {genre}
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-1">
                        <EvilIcons name="location" color="gray" size={20} />
                        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                    </View>
                </View>

                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>

            <TouchableOpacity className="p-4 flex-row space-x-3 items-center border-y border-gray-300">
                <EvilIcons name="question" color="gray" size={20} />
                <Text className="font-bold flex-1">Got a food allergy?</Text>
                <EvilIcons name="chevron-right" color={color.primary} size={25} />
            </TouchableOpacity>
        </View>

        <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {/* Dishrow */}
            <DishRow 
                id="kdjlkd"
                name="Burger"
                description="This is a delicious and juicy burger. You'd love it"
                price={8.32}
                image="https://img.freepik.com/premium-photo/low-resolution-solapunk-burger-with-bacon-cheese-croissant_899449-31022.jpg"
            />
            <DishRow 
                id="kdjlkd2"
                name="Coke"
                description="This is a delicious and juicy burger. You'd love it"
                price={1.32}
                image="https://c8.alamy.com/comp/F8CRPR/can-of-coca-cola-on-a-white-background-F8CRPR.jpg"
            />
            <DishRow 
                id="kdjlkd3"
                name="Pizza"
                description="This is a delicious and juicy burger. You'd love it"
                price={5.32}
                image="https://img.freepik.com/premium-photo/low-resolution-hallyu-velvia-pizza-white-background_899449-40166.jpg"
            />
            <DishRow 
                id="kdjlkd1"
                name="French Fries"
                description="This is a delicious and juicy burger. You'd love it"
                price={3.32}
                image="https://img.freepik.com/premium-photo/low-resolution-fish-chips-meal-with-fries-soda-bowl_899449-80673.jpg"
            />
            <DishRow 
                id="kdjlkd4"
                name="Milk Shake"
                description="This is a delicious and juicy burger. You'd love it"
                price={6.32}
                image="https://static.vecteezy.com/system/resources/thumbnails/032/621/923/small/chocolate-milkshake-in-plastic-take-away-cup-isolated-photo.jpg"
            />
        </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen