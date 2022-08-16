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
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Logo />
      <Button title='Click ME'/>
      <User />
      <LotsOfGreetings/>
      <MyCustomTextWith /> 
      
      <InputText/>
      <UserNameandPassWord/>
      <UserNamePassword/>
      <AlertComponent/>
      <ImageWithTextInput/>
      <ButtonExample/>
      <Touchable_Example/>
      <TouchablePractice/>*/}
      <Count/>
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