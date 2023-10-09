import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparing = () => {
    const navigation = useNavigation();
    //show only for 3 seconds them move to delivery screen
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 3000);
    },[])
  return (
    

    <View className="flex-1 bg-white justify-center items-center">
        <Image
         source={require("../assets/images/delivery.gif")}
         className="h-80 w-80"/>
    </View>
  )
}

export default OrderPreparing