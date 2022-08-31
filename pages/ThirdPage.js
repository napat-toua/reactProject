import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from '../components/styles'

const ThirdPage = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is Third Page</Text>
                <Button
                    title="GO TO First PAGE"
                    onPress={() => {
                        navigation.navigate('First Page', {});
                    }}
                />
                <Button
                    title="GO TO SECOND PAGE"
                    onPress={() => {
                        navigation.navigate('Second Page', {});
                    }}
                />
                <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
            </View>
        </SafeAreaView>
    )
}

export default ThirdPage