import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Delivey = () => {
  const navigation = useNavigation();
  const restaurant = featured.restaurants[0];
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
            latitude: restaurant.lat,
            longitude: restaurant.lng,
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
            <Text className="text-3xl font-extrabold text-gray-700">
              20 - 30 Minutes
            </Text>
            <Text className="mt-2 font-semibold text-gray-700">
              Your order is on its way
            </Text>
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
            source={require("../assets/images/deliveryGuy.png")}
          />
        </View>

        <View className="flex-1 ml-3">
          <Text className="text-lg font-bold text-white">Given Makofane</Text>
          <Text className="font-semibold text-white">Your Blesser</Text>
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
