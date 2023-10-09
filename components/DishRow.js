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
            <Text className="text-gray-700 text-lg font-bold">R{item.price}</Text>
            <View className="flex-row items-center">
                <TouchableOpacity
                className="p-1 rounded-full"
                style={{backgroundColor:themeColors.bgColor(1)}}>
                <Ionicons name="add-sharp" size={25} color="white" />

                </TouchableOpacity>
                <Text className="px-3">2</Text>
                <TouchableOpacity
                className="p-1 rounded-full"
                style={{backgroundColor:themeColors.bgColor(1)}}>
                <Ionicons name="remove" size={25} color="white" />

                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
