//navition creat post "Passing params to a previous screen" slide Ch9 - Page 16
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {}
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
      color="#0072bb"
        title="Create Post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{fontSize:25}}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");
  return (
    <>
      <TextInput
        multiline
        placeholder="Please Text here"
        style={{ height: 50, padding: 10, backgroundColor: "#F9F9F9" }}
        onChangeText={setPostText}
        value={postText}
      />
      <Button
      color="#0072bb"
        title="Done"
        onPress={() => {
          navigation.navigate("Home", { post: postText });
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        backgroundColor="red"
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#0072bb" },
          headerTintColor: "#aaddee",
          headerTitleStyle: { fontWeight: "350", fontSize: 45 },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}