import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themeColors } from "../theme";
import AHustleRow from "../components/AHustleRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import Categories from "../components/Categories";
// import { useDispatch } from 'react-redux'
// import { setRestaurant } from "../slices/restaurantSlice";

const RestaurantScreen = () => {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();

  // //discpach hook
  // const dispatch = useDispatch();

  // //when component mounts set the data on redux
  // useEffect(()=>{
  //   if(item && item.id){
  //     // dispatch{setRestaurant(...item)}

  //   }

  // })

  return (
    <View>
      {/* Cart icon will be shown only when an item is being added */}
      <CartIcon />
      <StatusBar style="dark" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72 " source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-200 p-2 rounded-full shadow"
          >
            <Ionicons
              name="arrow-back-outline"
              size={27}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>

            <View className="flex-row space-x-2 my-1 ">
              <View className="flex-row items-center">
                <View>
                  <View className="flex-row items-center space-x-1 ">
                    <Ionicons name="ios-star" size={15} color="gold" />

                    <Text className="text-xs">
                      <Text className="text-green-700">{item.stars}</Text>

                      {/* Reviews icon*/}
                      <Text className="text-gray-700">
                        <Text>
                          ({item.reviews} reviews)&#183;
                          <Text className="font-semibold">{item.category}</Text>
                        </Text>
                      </Text>
                    </Text>
                  </View>
                  {/* Restaurant Adress */}
                  <View>
                    <View className=" flex-row space-x-1 items-center">
                      <Feather name="map-pin" size={15} color="gray" />
                      <Text className="text-gray-500 text-xs">
                        Nearby&#183; {item.address}
                      </Text> 
                      <Text>- {item.area}</Text>

                    </View>
                  </View>
                </View>
                <View>
                </View>
              </View>
            </View>
            {/* <Text className="text-gray-500 mt-2">{item.description}</Text> */}
          </View>
        </View>
        <Categories />

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Products</Text>
          {/* All dishes */}
          {item.dishes.map((dish, index) => {
            return (
              <>
                <AHustleRow item={{ ...dish }} key={index} />
              </>
            );
          })}
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Services</Text>
          {/* All dishes */}
          {item.dishes.map((dish, index) => {
            return (
              <>
                <AHustleRow item={{ ...dish }} key={index} />
              </>
            );
          })}
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Events</Text>
          {/* All dishes */}
          {item.dishes.map((dish, index) => {
            return (
              <>
                <AHustleRow item={{ ...dish }} key={index} />
              </>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
