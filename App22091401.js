import { View, Text, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home!</Text>
      <Button
        title='Go to Setting'
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting!</Text>
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
            iconName = focused ? "ios-arrow-redo-circle" : "ios-arrow-redo-circle-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "ios-list" : "ios-add";
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

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App