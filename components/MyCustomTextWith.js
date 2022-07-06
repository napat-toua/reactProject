import { View, Text } from 'react-native'
import React from 'react'

const MyName = ({ fname, lname }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Your First Name is {fname} and Last Name is {lname}</Text>
        </View>
    )
}

const MyCustomTextWith = () => {
    return (
        <View style={{ alignItems: 'center', top: 50 }}>
            <MyName fname='Napat' lname='Touangam' />
            <MyName fname='Thanarat' lname='Pongjan' />
        </View>
    )
}

export default MyCustomTextWith