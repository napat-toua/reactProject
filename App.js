import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const App = () => {

  const showAlert = () => {
    alert("Hello")
  }

  return (
    <View style={styles.container}>
      <Text>Button Example</Text>
      <Button
        color='red'
        onPress={showAlert}
        title='CLICK ME'
        
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});