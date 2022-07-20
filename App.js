import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassWord from './components/UserNameandPassWord'
import UserNamePassword from './components/UserNamePassword'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Logo />
      <Button title='Click ME'/>
      <User />
      <LotsOfGreetings/>
      <MyCustomTextWith /> 
      <Count />
      <InputText/>
      <UserNameandPassWord/>*/}
      <UserNamePassword/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})