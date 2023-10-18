import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const ActiveItem = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}>
        <Text>ActiveItem</Text>

        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ActiveItem