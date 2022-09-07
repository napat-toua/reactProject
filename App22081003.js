import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';


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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});