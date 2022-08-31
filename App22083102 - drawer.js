import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <Button
        title='Go to notification'
        onPress={() => navigation.navigate('Notification')}
      />
    </View>
  )
}

function Notification({ navigation }) {
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <Button
        title='Go back home'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>{/* useLegacyImplementation for run in chrome */}
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Notification' component={Notification}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App