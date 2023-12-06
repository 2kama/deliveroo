import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import color from "../utils/color"

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={20} color={color.primary} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://dynl.mktgcdn.com/p/hxJgH_gPUGuHQPqGidqaJNMl9pbQqLO7esOuNzfyw8o/496x344.png"
          title="Pizza Hut"
          rating={4.5}
          genre="Pizza"
          address="1039 E Lincoln Hwy"
          short_description="Pizza Hut understands the importance of providing complete and accurate nutrition information to our customers. Because every customer uses nutrition information differently, we provide three ways to view our nutrition information."
          dishes={[]}
          long={-75.8065598}
          lat={39.9868002}
        />
        <RestaurantCard
          id={234}
          imgUrl="https://www.visitjacksonville.com/imager/files_idss_com/C232/f2ae2f09-96df-45f8-a103-f771856161a4/3726ebe5-b7a8-43ee-8129-ecb79c94464d_e45adf5f6bc0c5c2a30a39868f44eab6.jpg"
          title="Outback SteakHouse"
          rating={4.2}
          genre="Steak"
          address="675 Lancaster Ave"
          short_description="We’ve got gifts for the whole family. And by gifts, we mean steaks. Deck your plate with bold, new flavors for a fa la la la limited time and create some memorable Steakmas traditions with your mates!"
          dishes={[]}
          long={-75.5833323}
          lat={40.0344656}
        />
        <RestaurantCard
          id={345}
          imgUrl="https://ik.imagekit.io/66dgz15zlq0/2021/04/Screen-Shot-2021-12-23-at-12.47.38-pm.png"
          title="Yo! Sushi"
          rating={5.0}
          genre="Japanese"
          address="123 Min St"
          short_description="Yo! Sushi is all about serving fresh, top-quality sushi to its customers. To consistently ensure the best quality for its whole range, it looks to source our ingredients locally, with fresh ingredients delivered daily."
          dishes={[]}
          long={-122.4324}
          lat={37.78825}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
