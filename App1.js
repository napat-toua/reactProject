import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import styles from './components/styles';
import stySheet from './components/stySheet';
import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';
import Cafe from './components/Cafe';

const App = () => {

  const showData = () => {
    alert("Hello Button")
  }

  return (
    <View>
      <Text style={[styles.title, styles.warning]}>Hello React Native</Text>
      <Logo />
      <Button
        onPress={showData}
        title='Click ME'
      />
      {/* <Text style={stySheet.title}>Hello React Native</Text> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  )
}

export default App