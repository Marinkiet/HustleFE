import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation,useRoute } from "@react-navigation/native";
import { featured, recommended } from "../constants";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Delivey = () => {
  const navigation = useNavigation();
  const restaurant = recommended.restaurants[2];
  const { params } = useRoute();
  let item = params;
  return (
    <View className="flex-1">
      {/* Map */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          // zoomin levels
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: -25.976990,
            longitude: 28.118081,
          }}
          title={restaurant.name}
          description={restaurant.description}

          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      {/* Delivery Time */}
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg font-semibold text-gray-700">
              Estimated Arrival
            </Text>
            <View className="flex-row items-center">
            <Ionicons name="walk" size={30} color="black" />

<Text className="text-3xl font-extrabold text-gray-700">
  {restaurant.distance_walk} minutes
</Text>
            </View>
          
          </View>

          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
      </View>
      {/* Delivery Guy profile */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.8) }}
        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
      >
        <View className="p-1 rounded-full">
          <Image
            className="w-16 h-16 rounded-full"
            source={restaurant.profile_image}
          />
        </View>

        <View className="flex-1 ml-3">
          <Text className="text-lg font-bold text-white">{restaurant.hustler}</Text>
          <Text className="font-semibold text-white"></Text>
        </View>
        <View className="flex-row items-center space-x-3 mr-3">
          <TouchableOpacity className="bg-white rounded-full p-2">
            <Ionicons
              name="call"
              size={30}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Home')}
          className="bg-white rounded-full p-2">
          <MaterialIcons 
            name="cancel"  
            size={30}
            color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Delivey;
