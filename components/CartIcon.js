import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CartIcon = (item) => {
    const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <View
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex justify-between items-center mx-5 rounded-md py-4 shadow-lg"
      >
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          Reviews
        </Text>
        <Text className="pt-3 text-white">
        Best Flowers!!
        </Text>
        
     

      </View>
    </View>
  );
};

export default CartIcon;
