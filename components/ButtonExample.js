import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={styles.separator} />
)

const ButtonExample = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required.It is recommended to set accessigilityLabel to thelp make your app usable by everyone.
                </Text>
                <Button
                    title='Press Me'
                    onPress={() => alert('Simple Button Press')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Text>
                <Button
                    title='Press Me'
                    onPress={() => alert('Button with adjusted color pressed')}
                    color='maroon'
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    Lorem Ipsum is simply dummy text.
                </Text>
                <Button
                    title='Press Me'
                    disabled
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title='Left Button'
                        onPress={() => alert('Left button pressed')}
                        style={styles.fixToText}
                    />
                    <Button
                        title='Right Button'
                        onPress={() => alert('Right button pressed')}
                        style={styles.fixToText}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    }, fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})