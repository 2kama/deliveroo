import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import color from '../utils/color'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Animatable.Image 
            source={require("../assets/delivery.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-96 w-96"
        />

        <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-10 text-[#c41851] font-bold text-center"
        >
            Waiting for your rider to pick up your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color={color.primary} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen