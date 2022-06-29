import { View, Text , Button} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
const App = () => {
  return (
    <View>
      <Logo />
      <Button title='Click ME'/>
      <User />
    </View>
  )
}

export default App