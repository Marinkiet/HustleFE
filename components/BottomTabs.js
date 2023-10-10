import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from "../screens/FavouriteScreen";
import SubcategoriesScreen from "../screens/SubcategoriesScreen";
import ProductScreen from "../screens/ProductScreen";
import EventScreen from "../screens/EventScreen";
import ServiceScreen from "../screens/ServiceScreen";
import AccountScreen from "../screens/AccountScreen";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from "react-native";
//initialize tabs
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "blue",
        tabBarStyle: {
          backgroundColor: "dodgerblue",
        },
        headerStyle: {
          backgroundColor: "dodgerblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "white",
        },headerShown: false,
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-home-sharp" : "home-outline"}
              size={25}
              color={focused ? "white" : "blue"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Categories"}
        component={SubcategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused?"th-list":"list-ul"}
              size={25}
              color={focused ? "white" : "blue"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Favourites"}
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={25}
              color={focused ? "white" : "blue"}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={"Account"}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused?"account-circle":"account-circle-outline"}
              size={25}
              color={focused ? "white" : "blue"}
            />
          ),
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
};

export default Tabs;
