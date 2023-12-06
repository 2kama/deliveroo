import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import color from "../utils/color"

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex flex-row pb-2 mx-2 items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Entypo name="chevron-down" size={20} color={color.primary} />
          </Text>
        </View>

        <AntDesign name="user" size={30} color={color.primary} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={25} color="grey" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AntDesign name="tool" size={25} color={color.primary} />
      </View>

      {/* body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{
        paddingBottom: 140
      }}>
        <Categories />

        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="123"
        />

        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these jicy discounts!"
          id="234"
        />

        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          id="445"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
