import { View, Text } from 'react-native'
import React from 'react'
import Cat from './Cat'

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat/>
      <Cat/>
      <Cat/>
    </View>
  )
}

export default Cafe