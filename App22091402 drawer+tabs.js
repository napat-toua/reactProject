import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(234, 0, 0)'
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name='home' size={30}/>
      <Text>Home!</Text>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 25, marginBottom: 10}}>Setting Screen</Text>
      <Button
        title='Go to Home'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "information-circle" : "information-circle";
          } else if (route.name === "Setting") {
            iconName = focused ? "ios-help" : "ios-list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        TabBarActiveTintColor: '#008f26',
        TabBarInactiveTintColor: '#949494',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
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
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Setting" component={MyTabs} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer  theme={MyTheme}>
      <MyDrawer/> 
    </NavigationContainer>
  );
}

export default App