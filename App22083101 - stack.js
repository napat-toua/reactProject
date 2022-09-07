import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='First Page'
        screenOptions={{
          headerStyle: { backgroundColor: '#0072bb' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name='First Page' component={FirstPage} />
        <Stack.Screen name='Second Page' component={SecondPage} />
        <Stack.Screen name='Third Page' component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}