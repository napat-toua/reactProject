import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({ name, date }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello {name} {date}</Text>
        </View>
    )
}

const LotsOfGreetings = () => {
    return (
        <View style={{ alignItems: 'center', top: 50 }}>
            <Greeting name='Marry Chismas' date='25-Dec-2022' />
            <Greeting name='Happy New' date='31-Dec-2022' />
            <Greeting name='Songkran Festival' date='13-Apr-2022' />
        </View>
    )
}

export default LotsOfGreetings