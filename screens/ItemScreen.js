import { View, Text, ScrollView, Image, TouchableOpacity,StyleSheet,TextInput,Button } from "react-native";
import React, { useEffect ,useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themeColors } from "../theme";
import AHustleRow from "../components/AHustleRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const ItemScreen = () => {
  
  const [shopTitle, setShopTitle] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [mainProductImage, setMainProductImage] = useState('');
  const [otherProductImages, setOtherProductImages] = useState([]);
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [openingTime, setOpeningTime] = useState('');

  return (
    <SafeAreaView>
      <View >
        <Text>Enter your hustle title</Text>
      <TextInput

className=" font-medium text-3xl"
placeholder="Hustle Title"
value={shopTitle}
onChangeText={(text) => setShopTitle(text)}
/>
      </View>
      
      <TextInput
      className="font-medium text-3xl"
        placeholder="Profile Image"
        value={profileImage}
        onChangeText={(text) => setProfileImage(text)}
      />
      <TextInput
        placeholder="Main Product Image"
        value={mainProductImage}
        onChangeText={(text) => setMainProductImage(text)}
      />
      <TextInput
        placeholder="Other Product Images"
        value={otherProductImages}
        onChangeText={(text) => setOtherProductImages(text)}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <TextInput
        placeholder="Opening Time"
        value={openingTime}
        onChangeText={(text) => setOpeningTime(text)}
      />
      <Button title="Register Product" />
    </SafeAreaView>
  );
};

export default ItemScreen;
