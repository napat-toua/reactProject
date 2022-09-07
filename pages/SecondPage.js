import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import {styles} from '../components/styles'

const SecondPage = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is Second Page</Text>
                <Button
                    title="GO TO First PAGE"
                    onPress={() => {
                        navigation.navigate('First Page', {});
                    }}
                />
                <Button
                    title="GO TO THIRD PAGE"
                    onPress={() => {
                        navigation.navigate('Third Page', {});
                    }}
                />
                <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
            </View>
        </SafeAreaView>
    )
}

export default SecondPage