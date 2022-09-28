import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)'
  }
}

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title='OPEN DRAWER'
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title='TOGGLE DRAWER'
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <Image
        style={styles.sideMenuProfileIcon}
        source={require('./assets/react_logo.png')}
      />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Close Drawer'
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent{...props} />}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Product' component={ProductScreen} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    margin: 10
  },
})