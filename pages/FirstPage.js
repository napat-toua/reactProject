import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../components/styles'

const FirstPage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is First Page</Text>
                <Button
                    title="GO TO SECOND PAGE"
                    onPress={() => {
                        navigation.navigate('Second Page', {});
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

export default FirstPage