import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Alert } from 'react'

const AlertComponent = () => {
    const simpleAlertHanler = () => {
        alert('Hello! I\'m Simple Alert from JavaScript')
    }

    const twoOptionAlertHanler = () => {
        Alert.alert(
            //title
            'Hello!', 
            //body
            'I\'m two option alert from React Native',
            [
                {
                    text: 'Yes',
                    onPress: ()=> alert('Yes Pressed'),
                },
                {
                    text: 'No',
                    onPress: ()=> alert('No Pressed'),
                    style:'cancle',
                }
            ]
            ,{cancelable: false}
        );
    }
    return (
        <View style={styles.container}>
            <Button
                title='simple alert'
                onPress={simpleAlertHanler}
            />
            <Button
                title='alert with two option'
                onPress={twoOptionAlertHanler}
            />
            <Button
                title='alert with three option'
            />
        </View>
    )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
})