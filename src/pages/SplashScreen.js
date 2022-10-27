import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { StackActions } from '@react-navigation/native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace('Home')
            )
        }, 3000)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 20 }}>Subdomain Finder</Text>
            <Text>by ricko-v</Text>
        </View>
    )
}

export default SplashScreen