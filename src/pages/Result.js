import React, { useContext } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { ResponseContext } from '../context/Response'

const Result = () => {
    const { response } = useContext(ResponseContext)
    return (
        <ScrollView style={{ paddingStart: 5, paddingEnd: 5 }}>
            <View>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16, marginTop: 20, marginBottom: 20 }}>Subdomain {response.domain.toLowerCase()}</Text>
            </View>
            {
                response.result.length !== 0 ?

                    response.result.map((x) => (
                        <Text key={x + "-" + Math.floor(Math.random() * 100)}>{x}</Text>
                    ))

                    :

                    <Text>No Subdomain Find</Text>
            }
        </ScrollView>
    )
}

export default Result