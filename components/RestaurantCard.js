import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
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
}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate('Restaurant', {
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
        })
      }}
    >
      <Image 
        source={{
            uri: imgUrl
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <AntDesign name="star" color="gold" size={20} />
            <Text className="text-xs text-gray-500">
                <Text className="text-yellow-600">{rating}</Text> . {genre}
            </Text>
        </View>

        <View className="flex-row items-center space-x-1 mt-1">
            <EvilIcons name="location" color="gray" size={20} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard