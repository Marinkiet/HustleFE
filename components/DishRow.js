import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        style={{ height: 100, width: 100 }}
        className="rounded-3xl"
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className=" flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">From R{item.min_price} to R{item.max_price}</Text>
            <View className="flex-row items-center">
              
            </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
