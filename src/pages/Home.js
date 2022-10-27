import React, { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import style from '../assets/style'
import { ResponseContext } from '../context/Response'

const Home = ({ navigation }) => {
    const { setResponse } = useContext(ResponseContext)
    const [domain, setDomain] = useState('')
    const [loading, setLoading] = useState(false)

    const getSubdomain = async () => {
        setLoading(true)
        setResponse({ domain: '', result: null })
        fetch(`https://sonar.omnisint.io/subdomains/${domain.toLowerCase()}`)
            .then(datas => datas.json())
            .then(res => {
                setResponse({ domain: domain, result: res })
                navigation.navigate('Result')
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setDomain('')
                setLoading(false)
            })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingStart: 10, paddingEnd: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '80%' }}>
                    {
                        loading ?
                            <TextInput editable={false} selectTextOnFocus={false} value={domain} style={style.input}></TextInput>
                            :
                            <TextInput onChangeText={text => setDomain(text.replace(/[' ']/g, '.'))} placeholder='Masukan domain' value={domain} style={style.input}></TextInput>
                    }
                </View>
                {
                    loading ?
                        <TouchableOpacity style={{ backgroundColor: '#023', width: '20%', flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomEndRadius: 5, borderTopEndRadius: 5, marginStart: -3 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>...</Text>
                        </TouchableOpacity>

                        :

                        <TouchableOpacity onPress={getSubdomain} style={{ backgroundColor: '#023', width: '20%', flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomEndRadius: 5, borderTopEndRadius: 5, marginStart: -3 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Cari</Text>
                        </TouchableOpacity>
                }
            </View>
        </View >
    )
}

export default Home