import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='เกี่ยวกับเรา'
        onPress={() => navigation.navigate('About', {
          email: 'reactnative.tni.ac.th'
        })}
      />
    </View>
  )
}

export default HomeScreen