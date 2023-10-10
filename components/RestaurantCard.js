import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      /* On press go to Restaurant Page and pass the restaurant data*/
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        // Add universal styles
        // style={{
        //   shadowColor:themeColors.bgColor(0.2),
        //   shadowRadius:7
        // }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-49 w-80 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2 mt-1">
          <View className="flex-row justify-between">
            <Text className="text-lg font-bold pt-2">
            {item.name}
</Text>  
            <TouchableOpacity>
              <Image className="h-14 w-14 rounded-full" source={item.image} />
              <Text>John Doe</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center space-x-1">
            <Ionicons name="ios-star" size={15} color="gold" />

            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>

              {/* Reviews */}
              <Text className="text-gray-700">
                <Text>
                  ({item.reviews} reviews)&#183;
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </Text>
            </Text>
          </View>

          {/* Restaurant Adress */}
          <View className="flex-row space-x-1 items-center">
            <Feather name="map-pin" size={15} color="gray" />
            <Text className="text-gray-500 text-xs">
              Nearby&#183; {item.address}
            </Text>
          </View>
         <View className="flex-row justify-between align-middle items-center">
         <View >
            <View className="flex-row items-center ">
              <TouchableOpacity>
              <Ionicons name="walk" size={30} color="black" />
              </TouchableOpacity>
              <Text className="text-gray-500 text-xs ml-2">5 min - Start walking</Text>
            </View>
            <View className="flex-row items-center py-1">
              <TouchableOpacity>
  <Ionicons name="car-sport-outline" size={30} color="black" />
              </TouchableOpacity>
              <Text className="text-gray-500 text-xs ml-2">5 min - Start walking</Text>

            
            </View>
          </View>
          <View className="pb-2 m-2">
            <TouchableOpacity>
            <Ionicons name="call" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" size={34} color="black" />

            </TouchableOpacity>
          </View>

         </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
