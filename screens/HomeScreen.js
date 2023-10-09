import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themeColors } from "../theme";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { featured } from "../constants";

const HomeScreen = () => {
    //  const [featured,setFeatured] = useState([])
  return (
    <SafeAreaView className="bg-white">
      {/* Status Bar */}
      <StatusBar barStyle="dark-content" />

      {/* Top location only */}
      {/* <View className="items-center ">
            <Text className=""><Feather name="map-pin" size={15} color="gray" />Midrand, Sunning</Text>
        </View> */}

      <View className="flex-row items-center space-x-2 px-4 pb-2">

         {/* Search bar */}

        <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-400">
          <Ionicons name="search" size={24} color="gray" />
          <TextInput placeholder="Search..." className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Feather name="map-pin" size={15} color="gray" />
            <Text>Midrand,Sunning</Text>
          </View>
        </View>

        {/* Slider */}
        <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full">
        <Feather name="sliders" size={24} color="black" />
        </View>
      </View>

       {/* main body */}
       <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:20
        }}
       >

       {/* Categries */}
       <Categories/>

       {/* Featured rows */}
       <View className="mt-5">
        {
            [featured,featured,featured].map((item,index)=>{
                return(
                    <FeaturedRow
                        key={index}
                        title={item.title}
                        description={item.description}
                        restaurants={item.restaurants}
                    />
                )
            })
        }
        </View>
        </ScrollView>
        
    </SafeAreaView>
  );
};

export default HomeScreen;
