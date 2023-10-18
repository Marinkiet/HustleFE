import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./screens/RestaurantScreen";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import CartScreen from "./screens/CartScreen";
import OrderPreparing from "./screens/OrderPreparing";
import Delivey from "./screens/Delivey";
import ActiveItem from "./components/ActiveItem";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemScreen from "./screens/ItemScreen";
const Stack = createNativeStackNavigator();
// const Tabs = createBottomTabNavigator;
// import Tabs from "./components/BottomTabs";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Item" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPreparing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPreparing}
        />
     
        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={Delivey}
        />
        <Stack.Screen
          name="ItemScreen"
          options={{ presentation: "fullScreenModal" }}
          component={ItemScreen}
        />

      </Stack.Navigator>
      {/* <Tabs/> */}
    </NavigationContainer>
    
  );
};

export default Navigation;
