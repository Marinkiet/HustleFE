import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themeColors } from "../theme";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { yourArea,  recommended, aroundyou } from "../constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigator = useNavigation();
    //  const [featured,setFeatured] = useState([])
  return (
    <SafeAreaView className="bg-white">
      {/* Status Bar */}
      <StatusBar barStyle="dark-content" />

      {/* Top location only */}
      {/* <View className="items-center ">
            <Text className=""><Feather name="map-pin" size={15} color="gray" />Midrand, Sunning</Text>
        </View> */}
             <Text className="font-bold font-mono m-5 text-3xl">Hustle|Hub</Text>

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

        {/* Slider Icon*/}
        <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full">
        <TouchableOpacity
        onPress={()=>navigator.navigate("ItemScreen")}>
        <Feather name="sliders" size={24} color="black" />
        </TouchableOpacity>
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
            [recommended].map((item,index)=>{
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
        <View className="mt-5">
        {
            [yourArea].map((item,index)=>{
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
        <View className="mt-5">
        {
            [aroundyou].map((item,index)=>{
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
